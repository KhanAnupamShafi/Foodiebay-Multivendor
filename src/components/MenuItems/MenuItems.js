import React, { useState } from "react";
import styled from "styled-components";
import SingleItem from "./SingleItem";

import SingleMenuItem from "./SingleMenuItem";

const MenuItems = ({ store, showCart, setShowCart, refetch, restaurantId }) => {
  const [menuItem, setMenuItem] = useState(null);
  console.log(store);
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
                  <SingleMenuItem
                    key={food._id}
                    food={food}
                    setMenuItem={setMenuItem}
                  ></SingleMenuItem>
                ))}
            </DishContainer>
            {menuItem && (
              <SingleItem
                menuItem={menuItem}
                setShowCart={setShowCart}
                restaurantId={restaurantId}
              />
            )}
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
