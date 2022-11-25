import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StarFill } from "styled-icons/octicons";
import Loading from "../Shared/Loading/Loading";

const VendorList = () => {
  const {
    data: vendors,
    isLoading,
    refetch,
  } = useQuery([`restaurants`], () =>
    fetch(`http://localhost:5000/restaurants/vendor`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <VendorContainer>
      <VendorListHeader>Popular restaurants</VendorListHeader>
      <RestaurantList>
        {vendors.map((restaurant) => (
          <ListItem key={restaurant?._id}>
            <Link to={`/restaurant/${restaurant.restaurant_id}`}>
              <ImageTop background={restaurant.restaurantBanner}>
                <RestaurantInfo>
                  <CompanyLogo
                    src={restaurant?.restaurantLogo}
                    alt="Merchant logo"
                  />
                  <CompanyDesc>
                    <h3>{restaurant?.restaurantName}</h3>
                    <p>{restaurant?.restaurantType}</p>
                  </CompanyDesc>
                </RestaurantInfo>
              </ImageTop>
              <ImageRating>
                <div>
                  <span>
                    <StarFill width={20} />
                    <StarFill width={20} />
                    <StarFill width={20} />
                    <StarFill width={20} />
                    <StarFill width={20} />
                  </span>
                  <span>(0)</span>
                </div>
                <div>
                  <PriceRange>
                    <p>৳৳</p>৳
                  </PriceRange>
                </div>
              </ImageRating>
              <MoreDetails>
                <Time>
                  <div>
                    <span>Opens</span>
                  </div>
                  <span>10:00 am</span>
                </Time>
                <Delivery>
                  <div>
                    <span>45-60min</span>
                  </div>
                  <span>Est. time</span>
                </Delivery>
                <MinSpend>
                  <div>
                    <span>Tk 100</span>
                  </div>
                  <span>Minimum</span>
                </MinSpend>
                <Fee>
                  <div>
                    <span>Tk 40</span>
                  </div>
                  <span>Delivery Fee</span>
                </Fee>
              </MoreDetails>
            </Link>
          </ListItem>
        ))}
      </RestaurantList>
    </VendorContainer>
  );
};

export default VendorList;

const VendorContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  text-align: left;
  margin-top: 48px;
  padding-left: 18px;
  padding-right: 18px;
`;
const VendorListHeader = styled.span`
  font-size: 3.2rem;
  margin-bottom: 16px;
`;
const RestaurantList = styled.ul`
  margin-top: 50px;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    padding: 0 40px;
  }
`;
const ListItem = styled.li`
  margin-bottom: 20px;
  padding: 10px;
  transition: all 0.2s ease-in;
  a {
    position: relative;
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }
  &:hover {
    border-radius: 5px;
    background-color: rgba(73, 170, 255, 0.1);
  }
`;
const ImageTop = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.2)
    ),
    url(${(props) => props.background});
  position: relative;
  height: 172px;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
`;
const RestaurantInfo = styled.div`
  background: linear-gradient(
    180deg,
    rgba(28, 3, 25, 0) 0%,
    rgba(35, 1, 26, 0.2) 35%,
    rgba(52, 1, 34, 0.3) 100%
  );
  display: flex;
  margin: 5px;
  position: absolute;
  bottom: 0;
`;
const CompanyLogo = styled.img`
  box-sizing: border-box;
  height: 70px;
  width: 70px;
  border: 2px solid #eee;
  border-radius: 3px;
  background-color: #9b9b9b;
  object-fit: cover;
`;
const CompanyDesc = styled.div`
  margin-left: 5px;
  padding-right: 5px;
  h3 {
    color: #fff;
    font-size: 1.1429rem;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 1.5714rem;
    margin-bottom: 2px;
  }
  p {
    display: inline;
    color: #fff;
    font-size: 0.8571rem;
    letter-spacing: 0;
    line-height: 1.0714rem;
  }
`;
const ImageRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
    span {
      color: #aaa;
      font-size: 1.0714rem;
      letter-spacing: 0.1429rem;
      position: relative;
      padding-right: 4px;
    }
  }
`;

const PriceRange = styled.div`
  color: #ffb413;
  p {
    color: #ffb413;
    font-weight: bold;
  }
`;
const MoreDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Time = styled.div`
  max-width: 68px;
  flex: auto;
  color: #666;
  div {
    span {
      font-weight: 700;
    }
    margin-bottom: 3px;
  }
  span {
    font-weight: 400;
  }
`;
const Delivery = styled.div`
  min-width: 20px;
  /* max-width: 68px; */
  flex: 0 1 auto;
  color: #666;
  div {
    span {
      font-weight: 700;
    }
    margin-bottom: 3px;
  }
  span {
    font-weight: 400;
  }
`;
const MinSpend = styled.div`
  max-width: 68px;
  flex: auto;
  color: #666;
  div {
    span {
      font-weight: 700;
    }
    margin-bottom: 3px;
  }
  span {
    font-weight: 400;
  }
`;
const Fee = styled.div`
  max-width: 99px;
  flex: 0 1 auto;
  flex: auto;
  color: #666;
  div {
    span {
      font-weight: 700;
    }
    margin-bottom: 3px;
  }
  span {
    font-weight: 400;
  }
`;
