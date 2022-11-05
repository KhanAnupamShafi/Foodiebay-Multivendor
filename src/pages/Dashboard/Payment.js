import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LEr9KBhhQqyCqe6pdI3j9qwMMZZCdC2wHTxL5Zyv3QGdZoJvg5iv6bVSxvonKuO9ag4l4bdADRBDPoNKTzUKdiV00eUm9i66S');

const Payment = () => {
    const { paymentId } = useParams()
    const url = `http://localhost:5000/productForPayment/${paymentId}`
     // React query...
     const { data: product, isLoading } = useQuery(['payment', paymentId], () => fetch(url).then(res => res.json()))
     if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 text-neutral-content my-3">
                <div class="card-body">
                    <h2 className='text-red-500'>Payment Area</h2>
                    <p className='text-red-500'> <span className='text-yellow-500'>payment ID</span> :{paymentId}</p>
                    <p className='text-red-500 font-bold text-2xl'> <span className='text-yellow-500'>Name</span> : {product.productName}</p>
                    <p className='text-red-500'> <span className='text-yellow-500'>Price</span> : ${product.price}</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 text-neutral-content">
                <div class="card-body">
                    <h2 className='text-red-500'>Payment Area</h2>
                    {/* <p className='text-red-500'> <span className='text-yellow-500'>payment ID</span> :{paymentId}</p> */}
                    <p className='text-red-500'> <span className='text-yellow-500'>Price</span> : ${product.price}</p>
                    
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;