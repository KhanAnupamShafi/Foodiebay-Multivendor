import React from "react";
import styled from "styled-components";
import { CartAdd } from "styled-icons/boxicons-solid";
import DefaultImg from "../../assets/Restaurant/default_dish_pic.svg";

const MenuItems = ({ store }) => {
  const handleClick = (params) => {
    console.log("clicked");
  };
  return (
    <MenuWrapper>
      {store?.menu.map((category, index) => (
        <DishSection key={index} id={category}>
          <DishCategory>
            <BoxFlex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                aria-hidden="true"
                className="fl-interaction-primary"
                viewBox="0 0 16 16"
              >
                <path d="M10.346 5.598c-1.012-.89-1.42-1.944-1.222-3.16l.03-.168a.333.333 0 00-.545-.318l-.336.298c-.8.717-1.297 1.24-1.491 1.57l-.07.129c-.363.709-.707 2.156.621 3.602.972.84.667 2.1-.551 2.1-.525 0-.912-1.055-1.162-3.166l-.047-.436a.333.333 0 00-.564-.206C2.96 7.82 2.524 9.92 3.702 12.141a4.942 4.942 0 006.752 1.809c2.364-1.365 3.327-4.14 2.213-5.95l-.231-.304c-.584-.758-.73-.902-2.09-2.098z"></path>
              </svg>
              <h2>{category}</h2>
            </BoxFlex>
            <p>Most ordered right now.</p>
            <DishContainer>
              {store?.items
                .filter((item) => item.category.label === category)
                .map((food) => (
                  <ListItem key={food._id}>
                    <button onClick={handleClick}></button>
                    <ItemDetails>
                      <ItemData>
                        <h3>{food.name}</h3>
                        <p>
                          Authentic ah ah shsa adas asd a ad a fd asfas faf arf
                          asfasf{" "}
                        </p>
                      </ItemData>
                      <ItemPic>{/* <DishPhoto></DishPhoto> */}</ItemPic>
                    </ItemDetails>
                    <PriceContainer>
                      <ProductPrice>
                        <div>
                          <p>
                            Tk 150 <span>Tk 200</span>
                          </p>
                        </div>
                      </ProductPrice>
                      <AddCartBtn>
                        <CartAdd size={24} />
                      </AddCartBtn>
                    </PriceContainer>
                  </ListItem>
                ))}
            </DishContainer>
          </DishCategory>
        </DishSection>
      ))}
    </MenuWrapper>
  );
};

export default MenuItems;
const MenuWrapper = styled.section`
  background: #f7f7f7;
  overflow: hidden;
  position: relative;
  margin-top: 16px;
`;
const DishSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  background: #fff;
`;
const DishCategory = styled.section`
  padding: 24px;
  @media only screen and (min-width: 768px) {
    padding-left: 48px;
    padding-right: 48px;
  }
  p {
    line-height: 1;
    color: #767676;
  }
`;
const BoxFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  svg {
    fill: #e03000;
  }
  h2 {
    font-weight: 700;
    font-size: 1.6rem;
  }
`;
const DishContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ListItem = styled.li`
  cursor: default;
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
    z-index: 1;
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
    line-height: 1.25;
    margin-top: 10px;
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
  background-image: url(https://images.deliveryhero.io/image/fd-bd/Products/827237.jpg?width=200);
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
