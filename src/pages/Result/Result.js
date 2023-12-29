import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { CreditCard } from 'styled-icons/boxicons-regular';
import { useShoppingCart } from 'use-shopping-cart';
import Loading from '../../components/Shared/Loading/Loading';
import auth from '../../firebase.init';

const useQueryString = () => {
  return new URLSearchParams(useLocation().search);
};

const Result = () => {
  const queryString = useQueryString();
  const [user] = useAuthState(auth);
  const { cartDetails, cartCount, totalPrice, clearCart } =
    useShoppingCart();
  const sessionId = queryString.get('session_id');
  const cartItems = Object.keys(cartDetails).map(
    (key) => cartDetails[key]
  );

  const date = new Date();
  const formattedDate = format(date, 'PP');
  // console.log(cartItems);
  const { data, isLoading, isError } = useQuery(
    'Result',
    () =>
      sessionId
        ? axios(
            `https://foodiebay-multivendor-server-production.up.railway.app/checkout-sessions/${sessionId}`
          ).then((res) => res.data)
        : null,
    {
      onSuccess: (data) => {
        if (data.status === 'complete' && cartCount > 0) {
          const orderData = {
            user: user?.displayName,
            email: user?.email,
            orderDate: formattedDate,
            amount_subtotal: data.amount_subtotal,
            amount_total: data.amount_total,
            created: data.created,
            expires_at: data.expires_at,
            customer_details: data.customer_details,
            order_id: data.id,
            payment_intent: data.payment_intent,
            payment_status: data.payment_status,
            restaurant_id: cartItems[0]?.restaurantInfo.restaurant_id,
            cartItems,
            totalPrice,
          };

          fetch(
            'https://foodiebay-multivendor-server-production.up.railway.app/order',
            {
              method: 'PUT',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(orderData),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              clearCart();
              if (data?.order?.upsertedCount > 0) {
                clearCart();
              } else {
                toast.warning(`Order already processed`);
              }
            })
            .catch((error) => {
              toast.error(`Failed to Process Order`);
              console.log(error);
            });
        }
      },
    }
  );
  console.log(data);
  if (isLoading) return <Loading />;
  if (!data && !isLoading)
    return (
      <div className="tedt-red-500 font-bold text-center mx-auto">
        No Purchase Found
      </div>
    );

  if (isError)
    return (
      <div className="tedt-red-500 font-bold text-center mx-auto">
        <p> Error loading Page</p>
        <div className="py-10 text-center">
          <Link
            to="/"
            className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
            GO Home
          </Link>
        </div>
      </div>
    );
  console.log('checkout', data);
  return (
    <div className="bg-gray-100 h-screen">
      <Checked className="bg-white p-6  md:mx-auto">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2">
          <circle
            className="path circle"
            fill="none"
            stroke="#73AF55"
            strokeWidth="6"
            strokeMiterlimit="10"
            cx="65.1"
            cy="65.1"
            r="62.1"
          />
          <polyline
            className="path check"
            fill="none"
            stroke="#73AF55"
            strokeWidth="6"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="100.2,40.2 51.5,88.8 29.8,67.5 "
          />
        </svg>
        <div className="mx-auto text-center md:w-1/4 sm:w-1/2 w-full">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! </p>
          <div className="border-2 card1 border-gray-50 shadow-lg m-4 p-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl leading-10 text-left">
                  ৳ {data.amount_total}
                </p>
                <p className="text-lg leading-10">Order Total</p>
              </div>
              <div>
                <i>
                  <CreditCard size={24} />
                </i>
              </div>
            </div>
            <div className="border-t-2 border-white"></div>
            <div className="flex justify-between items-center">
              <p className="text-sm leading-10">
                Email: {data?.customer_details?.email}
              </p>
            </div>
          </div>
          <div className="py-10 text-center">
            <Link
              to="/"
              className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
              GO BACK
            </Link>
          </div>
        </div>
      </Checked>
    </div>
  );
};

export default Result;

const Checked = styled.div`
  svg {
    width: 100px;
    display: block;
    margin: 40px auto 0;
  }
  .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    &.circle {
      -webkit-animation: dash 0.9s ease-in-out;
      animation: dash 0.9s ease-in-out;
    }
    &.line {
      stroke-dashoffset: 1000;
      -webkit-animation: dash 0.9s 0.35s ease-in-out forwards;
      animation: dash 0.9s 0.35s ease-in-out forwards;
    }
    &.check {
      stroke-dashoffset: -100;
      -webkit-animation: dash-check 0.9s 0.35s ease-in-out forwards;
      animation: dash-check 0.9s 0.35s ease-in-out forwards;
    }
  }
  @-webkit-keyframes dash {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @-webkit-keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }

  @keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }
`;
