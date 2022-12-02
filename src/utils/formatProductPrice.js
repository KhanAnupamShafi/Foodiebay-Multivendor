import { formatCurrencyString } from "use-shopping-cart";

const formatProductPrice = (product) => {
  return formatCurrencyString({
    value: product?.price * 100,
    currency: product?.currency,
    language: "en-US",
  });
};

export default formatProductPrice;
