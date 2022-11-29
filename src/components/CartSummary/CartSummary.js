import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Minus } from "styled-icons/boxicons-regular";
import { ChevronRight } from "styled-icons/boxicons-solid";
import {} from "styled-icons/evil";
import { Plus } from "styled-icons/feather";

import { DeleteForever } from "styled-icons/material";
import { useShoppingCart } from "use-shopping-cart";
import CartSVG from "../../assets/Restaurant/CartSVG";

const CartSummary = ({ restaurant, showCart }) => {
  const { cartDetails, incrementItem, decrementItem, cartCount } =
    useShoppingCart();

  const cartItems = Object.keys(cartDetails).map((key) => cartDetails[key]);
  console.log(showCart);
  return (
    <CartSummaryContainer>
      <CartHeader>
        <span>Your cart from</span>
        <ChevronRight size={18} />
        <p>{restaurant.restaurantName} </p>
      </CartHeader>
      {!cartCount || !showCart ? (
        <EmptyCart>
          <div>
            <CartSVG />
          </div>
          <span>Your cart is empty</span>
          <span>Add items to get started</span>
        </EmptyCart>
      ) : (
        <CartCheckout>
          <Link>
            <CheckoutStyled>
              <span>
                <span>
                  <div>
                    <p>Checkout</p>
                    <p>Tk 500</p>
                  </div>
                </span>
              </span>
            </CheckoutStyled>
          </Link>
        </CartCheckout>
      )}

      <CartItems>
        {cartItems.map((item) => (
          <li key={item._id}>
            {showCart && (
              <>
                <InsetBorder>
                  <hr />
                </InsetBorder>
                <CartCellContent>
                  <ImageGrid>
                    <ImageContainer>
                      <picture>
                        {" "}
                        <img src={item.image} alt="cart items" />
                      </picture>
                    </ImageContainer>
                  </ImageGrid>
                  <PriceGrid>
                    <div>
                      <span>
                        <span>{item.name}</span>
                      </span>
                      <p>TK {item.price}</p>
                    </div>
                  </PriceGrid>
                  <QuantityGrid>
                    <QuantityBox>
                      <QuantityContents>
                        <QuantityFlexItems>
                          <IconBox>
                            {item.quantity === 1 ? (
                              <button
                                type="button"
                                onClick={() => decrementItem(item.sku)}
                              >
                                <DeleteForever size={24} />
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={() => decrementItem(item.sku)}
                              >
                                <Minus size={24} />
                              </button>
                            )}
                          </IconBox>
                          <CounterBox>
                            <span>{item.quantity} x</span>
                          </CounterBox>
                          <IconBox>
                            <button
                              type="button"
                              onClick={() => incrementItem(item.sku)}
                            >
                              <Plus size={24} />
                            </button>
                          </IconBox>
                        </QuantityFlexItems>
                      </QuantityContents>
                    </QuantityBox>
                  </QuantityGrid>
                </CartCellContent>
                <InsetBorder>
                  <hr />
                </InsetBorder>
              </>
            )}
          </li>
        ))}
      </CartItems>
    </CartSummaryContainer>
  );
};

export default CartSummary;
const CartSummaryContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  overflow-y: auto;
  padding-top: 24px;
  right: 0;
  z-index: 900;
`;
const CartHeader = styled.div`
  max-width: 100%;
  padding: 16px;
  span {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0ch;
    text-transform: none;
    color: rgb(118, 118, 118);
  }
  p {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.04ch;
    text-transform: none;
    color: rgb(25, 25, 25);
  }
`;
const EmptyCart = styled.div`
  max-width: 100%;
  padding: 16px;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    /* background: #005460; */
    margin: 20px 0px;
    svg {
      width: 100%;
      mix-blend-mode: multiply;
    }
  }
  span {
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0ch;
    text-transform: none;
    color: rgb(118, 118, 118);
    text-align: center;
    margin: 0px;
    padding: 0px;
    display: block;
  }
`;
const CartCheckout = styled.div`
  padding: 0px 16px;
  margin-bottom: 16px;

  a {
    position: relative;
    max-width: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    min-height: 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 1000px;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;
    user-select: none;
    text-decoration: none;
    text-align: center;
    background-color: rgb(235, 23, 0);
    box-shadow: transparent 0px 0px 0px 1px inset;
    color: rgb(255, 255, 255);

    &:hover {
      background-color: rgb(217, 20, 0);
      box-shadow: transparent 0px 0px 0px 1px inset;
    }
  }
`;

const CheckoutStyled = styled.span`
  display: block;
  flex-grow: 1;
  max-width: 100%;
  transition: opacity 0.15s ease-in-out 0s;
  opacity: 1;

  span {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    span {
      flex-grow: 2;
      min-width: 0px;
      display: flex;
      justify-content: center;
      div {
        width: 100%;
        max-width: 100%;
        display: flex;
        font-size: 17px;
        justify-content: space-between;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0ch;
        text-transform: none;
        text-align: center;
      }
    }
  }
`;

const CartItems = styled.ul`
  li {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    text-decoration: none;
    appearance: none;
    border: none;
    padding: 0px;
    margin: 0px;
    text-align: inherit;
    display: block;
    width: 100%;
    background: rgb(255, 255, 255);
    outline: none !important;
    transition: all 0.2s ease-in 0s;
    &:hover {
      background: rgb(247, 247, 247);
    }
  }
`;
const CartCellContent = styled.div`
  padding: 16px;
  max-width: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: auto 1fr auto;
  column-gap: 20px;
`;
const PriceGrid = styled.div`
  flex-grow: 1;
  overflow: hidden;
  flex-basis: 100%;
  max-width: 100%;
  grid-area: 2 / 2 / auto / auto;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.04ch;
    text-transform: none;
    color: rgb(25, 25, 25);
    text-align: left;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0ch;
      color: rgb(25, 25, 25);
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      max-height: 44px;
      white-space: normal;
    }
    p {
      margin-top: 6px;
    }
  }
`;
const QuantityGrid = styled.div`
  grid-area: 2 / 3 / auto / auto;
`;
const ImageGrid = styled.div`
  grid-area: 2 / 1 / auto / auto;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  picture {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    margin-left: 4px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
`;
const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const QuantityContents = styled.div`
  position: static;
  top: 0px;
  right: auto;
  border-radius: 1000px;
  white-space: nowrap;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px;
`;
const QuantityFlexItems = styled.div`
  width: 100%;
  overflow: hidden;
  background: rgb(247, 247, 247);
  border-radius: 1000px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const CounterBox = styled.div`
  position: relative;
  span {
    font-size: 14px;
    height: 32px;
    min-width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms ease-in-out 0s;
    opacity: 1;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.04ch;
    text-transform: none;
    color: rgb(25, 25, 25);
  }
`;
const IconBox = styled.div`
  transition: all 200ms ease-in-out 0s;
  max-width: 32px;
  button {
    position: relative;
    max-width: 100%;
    margin: 0px;
    display: inline-flex;
    min-height: 32px;
    border-radius: 100%;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;
    user-select: none;
    text-decoration: none;
    text-align: center;
    background-color: rgb(255, 255, 255);
    box-shadow: transparent 0px 0px 0px 1px inset;
    color: rgb(73, 73, 73);
    height: 32px;
    width: 32px;
    padding: 0px;
    align-items: center;
    justify-content: center;
  }
`;
const InsetBorder = styled.div`
  width: 100%;
  padding-left: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
  hr {
    display: block;
    width: 100%;
    margin: 0px;
    border: none;
    height: 1px;
    background: rgb(231, 231, 231);
  }
`;
