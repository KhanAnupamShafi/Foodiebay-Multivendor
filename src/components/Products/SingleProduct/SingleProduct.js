import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({singlePro}) => {
    const {_id,productName,price}=singlePro
    return (
        <div class="card w-96 bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
                <h2 class="card-title">Name:{productName}</h2>
                <p>Price: {price}</p>

                <h3>ID: {_id}</h3>
                <div class="card-actions justify-end">
                    
                    <Link to={`/dashboard/payment/${_id}`} ><button class="btn btn-accent">Payment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;