import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ singlePro }) => {
  const { _id, productName, price } = singlePro;
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name:{productName}</h2>
        <p>Price: {price}</p>

        <h3>ID: {_id}</h3>
        <div className="card-actions justify-end">
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-accent">Payment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
