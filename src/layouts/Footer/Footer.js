import React from "react";
import { Facebook } from "styled-icons/fa-brands";
import { Twitter } from "styled-icons/remix-line";
import { Apple, Github } from "styled-icons/simple-icons";

const Footer = () => {
  return (
    <>
      <h1>....</h1>
      <footer className="relative bg-gray-200 pt-8 pb-6 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-gray-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter">
                    <Twitter size={20} />{" "}
                  </i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square">
                    <Facebook size={22} />
                  </i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble">
                    <Apple size={22} />
                  </i>
                </button>
                <button
                  className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github">
                    {" "}
                    <Github size={22} />
                  </i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2021</span>
                <a
                  href="https://github.com/KhanAnupamShafi/"
                  className="text-gray-500 hover:text-gray-800 px-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Foodiebay
                </a>
                <a
                  href="https://github.com/KhanAnupamShafi"
                  className="text-gray-500 hover:text-gray-800"
                >
                  Anupam & ALi
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
