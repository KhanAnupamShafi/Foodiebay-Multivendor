import React from "react";
import { Link } from "react-router-dom";
import LogoFooter from "./logo_footer.png";
import Payment from "./payment.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Pinterest,
} from "styled-icons/fa-brands";

const Test = () => {
  return (
    <footer className="max-w-screen-xl w-full px-5 m-auto">
      <div className="footer-top px-0 pt-28 pb-px border-b border-textContrast">
        <ul className="row flex flex-wrap -mx-2.5">
          <li className="flex-auto sm:w-2/4 lg:w-4/12 px-2.5">
            <div className="widget mt-px mb-14">
              <Link to="/" className="mb-4">
                <img
                  src={LogoFooter}
                  width="144"
                  height="45"
                  alt="logo"
                  className="max-w-full object-cover align-middle mb-4"
                />
              </Link>
              <div className="widget-body p-0 text-[#333] text-start">
                <p className="widget-about-title mb-4">
                  Got Question? Call us 24/7
                </p>
                <a
                  href="tel:18005707777"
                  className="text-[#333] leading-4 mb-4 font-bold no-underline text-2xl"
                >
                  1-800-570-7777
                </a>
                <p className="leading-9 mb-7 font-light mb-8 max-w-sm">
                  Register now to get updates on pronot get up icons &amp;
                  coupons ster now toon.
                </p>
                <div className="inline-flex">
                  <a href="/" className="my-0.5 mr-2.5">
                    <Facebook size={32} color="#1b4f9b" />
                  </a>
                  <a href="/" className="my-0.5 mr-2.5">
                    <Twitter size={32} color="#00adef" />
                  </a>
                  <a href="/" className="my-0.5 mr-2.5">
                    <Instagram size={32} color="#cc0001" />
                  </a>
                  <a href="/" className="my-0.5 mr-2.5">
                    <Youtube size={32} color="#2c567e" />
                  </a>
                  <a href="/" className="my-0.5 mr-2.5">
                    <Pinterest size={32} color="#f96a02" />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="flex-auto w-2/4 sm:w-2/4 lg:w-1/5  px-2.5">
            <div className="widget mb-14 ">
              <h3 className="text-lg text-[#333] mb-8 text-start">Company</h3>
              <ul className="text--[#666] text-start">
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    About Us
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Team Member
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Career
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Contact Us
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Affliate
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Order History
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="flex-auto w-2/4 sm:w-2/4 lg:w-1/5  px-2.5">
            <div className="widget mb-14 ">
              <h3 className="text-lg text-[#333] mb-8 text-start">
                My Account
              </h3>
              <ul className="text-[#666] text-start">
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Track My Order
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    View Cart
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Sign In
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Help
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    My Wishlist
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="flex-auto w-2/4 sm:w-2/4 lg:w-1/5  px-2.5">
            <div className="widget mb-14 ">
              <h3 className="text-lg text-[#333] mb-8 text-start">
                Customer Service
              </h3>
              <ul className="text-[#666] text-start">
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Customer Service
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Customer Service
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Product Returns
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Support Center
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Shipping
                  </Link>
                </li>
                <li className="leading-4 mb-6">
                  <Link to="/" className="text-[#666]">
                    Term and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="block lg:flex items-center text-[#666] py-12">
        <div className="flex justify-center lg:justify-start items-center">
          <p className="copyright">
            Copyright © 2021 Wolmart Store. All Rights Reserved.
          </p>
        </div>
        <div className="footer-right flex flex-1 flex-col lg:flex-row justify-center lg:justify-end items-center">
          <span className="mr-0 lg:mr-16 my-4 lg:my-0">
            We're using safe payment for
          </span>
          <figure className="payment">
            <img
              src={Payment}
              alt="payment"
              className="max-w-full object-cover align-middle"
              width="159"
              height="25"
            />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Test;
