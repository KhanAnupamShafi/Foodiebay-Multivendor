import axios from "axios";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { useShoppingCart } from "use-shopping-cart";
import auth from "../firebase.init";

const useCheckout = () => {
  const [user] = useAuthState(auth);
  const { cartDetails, redirectToCheckout } = useShoppingCart();

  const navigate = useNavigate();

  // console.log(user);
  async function handleCheckout() {
    const session = await axios
      .post("http://localhost:5000/checkout-sessions", cartDetails)
      .then((res) => res.data)
      .catch((error) => {
        toast.error("checkout failed");
        console.log("Error during checkout : ", error);
      });
    // const session = await fetch("http://localhost:5000/checkout-sessions", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ items: cartDetails }),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((result) => {
    //     if (result.url) {
    //       window.location.assign(result.url);
    //     }
    //   })
    //   .catch((error) => {
    //     toast.error("checkout failed");
    //     console.log("Error during checkout : ", error);
    // });

    if (session?.checkoutSession && user) {
      console.log("this is session", session);
      // redirectToCheckout({ sessionId: session?.checkoutSession?.id });
      window.location.assign(session?.checkoutSession?.url);
    } else {
      navigate("/signin");
    }
  }
  return handleCheckout;
};

export default useCheckout;
