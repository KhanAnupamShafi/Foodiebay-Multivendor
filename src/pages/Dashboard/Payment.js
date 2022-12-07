import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JwnwsAhRvIuSrv7SUBvBMIECkmBpCOapiW0GXIRiTIUnk8Y7ltilJ88fpezd1mZMbikl8eIExIqJca3gG7VD6km00NLErVXan"
);

const Payment = () => {
  const { paymentId } = useParams();
  const url = `https://foodiebay.onrender.com/productForPayment/${paymentId}`;
  // React query...
  const { data: product, isLoading } = useQuery(["payment", paymentId], () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="card w-96 bg-base-100 text-neutral-content my-3">
        <div className="card-body">
          <h2 className="text-red-500">Payment Area</h2>
          <p className="text-red-500">
            {" "}
            <span className="text-yellow-500">payment ID</span> :{paymentId}
          </p>
          <p className="text-red-500 font-bold text-2xl">
            {" "}
            <span className="text-yellow-500">Name</span> :{" "}
            {product.productName}
          </p>
          <p className="text-red-500">
            {" "}
            <span className="text-yellow-500">Price</span> : ${product.price}
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 text-neutral-content">
        <div className="card-body">
          <h2 className="text-red-500">Payment Area</h2>
          {/* <p className='text-red-500'> <span className='text-yellow-500'>payment ID</span> :{paymentId}</p> */}
          <p className="text-red-500">
            {" "}
            <span className="text-yellow-500">Price</span> : ${product.price}
          </p>

          <Elements stripe={stripePromise}>
            <CheckoutForm product={product} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
