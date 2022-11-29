import { formatCurrencyString } from "use-shopping-cart";

const formatProductPrice = (product) => {
  return formatCurrencyString({
    value: product?.price * 100,
    currency: "USD",
    language: "EN",
  });
};

export default formatProductPrice;
