import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartAdd } from "styled-icons/boxicons-solid";
import DefaultImg from "../../assets/Restaurant/default_dish_pic.svg";
import { Fade } from "react-awesome-reveal";

const SingleMenuItem = ({ food, setMenuItem }) => {
  // const price = formatProductPrice(food);
  // console.log(food._id);
  const handleClick = (params) => {
    // console.log(price);
  };
  return (
    <>
      <ListItem htmlFor="single-menu-item" onClick={() => setMenuItem(food)}>
        <button></button>
        <Fade cascade damping={0.1}>
          <li>
            <ItemDetails>
              <ItemData>
                <h3>{food.name}</h3>
                {!food.desc ? (
                  <p>
                    Chicken Dumpling fried and served with home-made sauce mild
                    or spicy.
                  </p>
                ) : (
                  <p title={food.desc}>{food.desc.slice(0, 100)}</p>
                )}
              </ItemData>
              <ItemPic>
                <DishPhoto image={food.image}></DishPhoto>
              </ItemPic>
            </ItemDetails>
            <PriceContainer>
              <ProductPrice>
                <div>
                  <p className="mt-1 ">
                    Tk {food.price}
                    {!food.offer ? (
                      <span></span>
                    ) : (
                      <span className="pl-1">Tk {food.offer + food.price}</span>
                    )}
                  </p>
                </div>
              </ProductPrice>
              <AddCartBtn onClick={handleClick}>
                <CartAdd size={24} />
              </AddCartBtn>
            </PriceContainer>
          </li>
        </Fade>
      </ListItem>
    </>
  );
};

export default SingleMenuItem;

const ListItem = styled.label`
  li {
    z-index: 100;
  }

  cursor: pointer;
  width: 48.7069%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  box-shadow: 0 0.1rem 0.5rem rgb(0 0 0 / 15%);
  border-radius: 4px;
  margin-top: 16px;
  padding: 20px;
  background: #fff;
  button {
    border-radius: 4px;
    bottom: 0;
    cursor: pointer;
    display: block;
    height: calc(100% - 2px);
    left: 1px;
    outline: none !important;
    position: absolute;
    right: 0;
    top: 1px;
    width: calc(100% - 2px);
    background: none;
    border: none;
    z-index: -1;
  }

  @media only screen and (max-width: 768px) {
    border-bottom: 2px solid #ebebebeb;
    width: 100%;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const ItemData = styled.div`
  width: 100%;
  padding-right: 16px;
  h3 {
    color: #333333;
    font-weight: 600;
    line-height: 1.25;
  }
  p {
    color: #767676;
    font-weight: 300;
    line-height: 1.45;
    margin-top: 10px;
    font-family: "Ubuntu", sans-serif;
  }
`;
const ItemPic = styled.picture`
  background: rgba(0, 0, 0, 0.04);
  background-image: url(${DefaultImg});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 55px 50px;
  border-radius: 2px;
  flex: none;
  height: 88px;
  margin-bottom: -28px;
  overflow: hidden;
  position: relative;
  width: 88px;
`;
const DishPhoto = styled.div`
  background-image: url(${(props) => props.image});
  animation: show 0.15s ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  background-position: 50%;
  background-size: cover;
  height: 100%;
  width: 100%;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const ProductPrice = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-right: 16px;
  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    p {
      font-weight: 500;
      line-height: 1.5;
      span {
        text-decoration: line-through;
        font-weight: 300;
      }
    }
  }
`;
const AddCartBtn = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 24px;
  padding: 0;
  width: 24px;
  background-color: rgb(235, 23, 0);
  color: #fff;
  word-wrap: normal;
  border: 1px solid;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 46px;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  text-transform: none;
  touch-action: manipulation;
  transition: color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    border-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  z-index: 1;
`;
