import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import ScrollToTop from "./utils/scrollToTop";
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "use-shopping-cart";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
const stripePromise = loadStripe(
  "pk_test_51M9LLkIRbvipvrSQ9kbihtaUiWjhAzQfFwbS1F3Ifm29OmyQJsSS5jzriDZ5pj38gFpPhfkULbGR934m8axgz54W00NF0qEfpl"
);

root.render(
  <QueryClientProvider client={queryClient}>
    <CartProvider mode="checkout-session" stripe={stripePromise} currency="USD">
      <BrowserRouter>
        <React.StrictMode>
          <ScrollToTop />
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </CartProvider>
  </QueryClientProvider>
);
