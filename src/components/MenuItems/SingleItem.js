import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Plus } from "styled-icons/boxicons-regular";
import { useShoppingCart } from "use-shopping-cart";
import DefaultImg from "../../assets/Restaurant/default_dish_pic.svg";

const SingleItem = ({ menuItem, setShowCart, restaurantId }) => {
  console.log(menuItem);
  // const [isChecked, setIsChecked] = React.useState(true);
  const { addItem, cartDetails, formattedTotalPrice, totalPrice, clearCart } =
    useShoppingCart();

  const cartItems = Object.keys(cartDetails).map((key) => cartDetails[key]);
  const [checkedState, setCheckedState] = useState(
    new Array(menuItem?.ingredients.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  const handleAddToCart = () => {
    setShowCart(true);
    if (restaurantId !== cartItems[0]?.restaurantInfo?.restaurant_id) {
      clearCart();
    }
    addItem(menuItem);

    toast.success(`${menuItem.name} successfully added`);
  };
  return (
    <>
      <input type="checkbox" id="single-menu-item" className="modal-toggle" />
      <label htmlFor="single-menu-item" className="modal cursor-pointer">
        <MenuItemDialog>
          <label className="modal-box relative p-0" htmlFor="">
            <label
              htmlFor="single-menu-item"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <ItemPic>
              <DishPhoto image={menuItem.image}></DishPhoto>
            </ItemPic>

            <ItemName>
              <div>
                <h3>{menuItem.name}</h3>
                <span>TK {menuItem.price}</span>
              </div>

              {!menuItem.desc ? (
                <p>
                  Chicken Dumpling fried and served with home-made sauce mild or
                  spicy.
                </p>
              ) : (
                <p>{menuItem.desc}</p>
              )}
            </ItemName>
            <AddOnsMenu>
              <MenuHeader>
                <h3>
                  <span>Add on</span>
                  <div>
                    <span>Optional</span>
                  </div>
                </h3>
                <p>Select up to {menuItem?.ingredients.length}</p>
              </MenuHeader>
            </AddOnsMenu>
            {menuItem?.ingredients?.map((topping, index) => (
              <AddOnOptions key={index}>
                <label htmlFor={index}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={topping?.label}
                    value={topping?.label}
                    onChange={() => handleOnChange(index)}
                    checked={checkedState[index]}
                  />

                  <OptionLabel htmlFor={`custom-checkbox-${index}`}>
                    {" "}
                    <Option>{topping?.label}</Option>
                  </OptionLabel>
                </label>
              </AddOnOptions>
            ))}
            <AddToCartSection>
              <QuantityModifier>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="24"
                    height="24"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <defs>
                      <path id="sIcMinus" d="M4 11h16v2H4z"></path>
                    </defs>
                    <use fillRule="evenodd" xlinkHref="#sIcMinus"></use>
                  </svg>
                </button>
                <span>1</span>
                <button type="button">
                  <RedPlus size={24} />
                </button>
              </QuantityModifier>
              <CartBtn type="button" onClick={handleAddToCart}>
                Add To Cart
              </CartBtn>
            </AddToCartSection>
          </label>
        </MenuItemDialog>
      </label>
    </>
  );
};

export default SingleItem;
const MenuItemDialog = styled.div`
  background: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  max-width: 768px;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
  @media (min-width: 0px) and (max-width: 480px) {
    width: 100% !important;
  }
`;
const ItemPic = styled.picture`
  background-image: url(${DefaultImg});

  background-color: rgba(0, 0, 0, 0.04);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 55px 50px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: block;
  height: 205px;
  overflow: hidden;
  width: 100%;

  @media (min-width: 768px) {
    height: 317px;
  }
`;
const DishPhoto = styled.div`
  background-image: url(${(props) => props.image});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;
const ItemName = styled.div`
  padding: 16px;
  div {
    display: flex;
    align-items: flex-start;
    h3 {
      flex-grow: 1;
      color: #333333;
      font-weight: 700;
    }
    span {
      flex-shrink: 0;
      font-weight: 300;
    }
  }
  p {
    border-bottom: 1px solid #ebebeb;
    padding: 16px 0;
    font-weight: 300;
    line-height: 1.5;
  }
`;
const AddOnsMenu = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
`;
const MenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin-bottom: 16px;
  h3 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    span {
      font-weight: 700;
      line-height: 1.25;
    }
    div {
      flex-shrink: 0;
      opacity: 0.8;
      background: #ebebeb;
      border-radius: 2px;
      margin-left: 8px;
      padding: 4px 8px;
      span {
        font-size: 1rem;
      }
    }
  }
  p {
    font-weight: 300;
  }
`;
const AddOnOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  cursor: pointer;
  align-items: center;
  label {
    display: flex;
    flex-grow: 1;
    align-items: center;
    display: inline-flex;
    font-weight: 300;
    margin-bottom: 0;
    padding: 12px 0;
    input {
      height: 18px;
    }
  }
`;
const Option = styled.span`
  color: #c21760;
  width: 100%;
  line-height: 1.6;
  margin-left: 16px;
`;
const OptionLabel = styled.label`
  display: block;
  padding: 0 !important;
`;
const AddToCartSection = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  box-shadow: 0 0.3rem 2rem rgb(0 0 0 / 10%);
  padding: 16px;
  background: #f2f2f2;
`;
const CartBtn = styled.button`
  background: #e03000;
  color: #fff;
  flex-grow: 1;
  word-wrap: normal;
  border: 1px solid #e03000;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  height: 48px;
  line-height: 46px;
  max-width: 100%;
  overflow: hidden;
  padding: 0 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    background-color: #fdf2f7;
    border-color: #fdf2f7;
    color: red;
  }
`;
const QuantityModifier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  button {
    border: none;
    padding: 8px;
  }
  span {
    font-weight: 600;
    font-size: 1.4rem;
    padding: 0 4px;
  }
`;
export const RedPlus = styled(Plus)`
  color: red;
`;
