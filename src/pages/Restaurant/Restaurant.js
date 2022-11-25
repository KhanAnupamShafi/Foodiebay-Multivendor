import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { InfoOutline } from "styled-icons/evaicons-outline";
import { Close, Menu3, Time } from "styled-icons/remix-line";
import MenuItems from "../../components/MenuItems/MenuItems";
import Loading from "../../components/Shared/Loading/Loading";
import VendorNavigation from "../../components/VendorNavigation/VendorNavigation";
import Header from "../../layouts/Header/Header";
import { MobileIcon } from "../../layouts/Header/Header.elements";
import {
  Adressbar,
  Aside,
  BannerBox,
  Box,
  BoxContainer,
  Container,
  DrawerContent,
  DrawerSide,
  Grid,
  RestaurantContainer,
  Seperator,
  StoreInfo,
  Tags,
  VendorBanner,
  VendorButton,
  VendorDetails,
  VendorInfo,
  VendorLogo,
  VendorOpen,
  VendorTags,
} from "./Restaurent.elements";

const Restaurant = () => {
  const { restaurantId } = useParams();
  const [click, setClick] = useState(false);
  const closeCart = () => setClick(false);
  const [button, setButton] = useState(true);
  const [restaurantTags, setRestaurantTags] = useState([]);
  const handleClick = () => setClick(!click);

  const url = `http://localhost:5000/restaurants/vendor/${restaurantId}`;
  const url2 = `http://localhost:5000/menu/${restaurantId}`;
  // React query...
  const { data: restaurant, isLoading: restaurantLoading } = useQuery(
    ["restaurant", restaurantId],
    () => fetch(url).then((res) => res.json())
  );
  const {
    data: store,
    isLoading: menuLoading,
    refetch,
  } = useQuery(["menu", restaurantId], () =>
    fetch(url2).then((res) => res.json(), {
      refetchOnWindowFocus: false,
      enabled: false,
      staleTime: Infinity,
      cacheTime: 0,
    })
  );

  useEffect(() => {
    setRestaurantTags(restaurant?.restaurantType.split(", "));
  }, [restaurant]);

  if (restaurantLoading || menuLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Container>
        <Header />
        <Grid>
          <RestaurantContainer>
            <BoxContainer>
              <Box>
                <BannerBox>
                  <VendorBanner>
                    <img
                      src={restaurant?.restaurantBanner}
                      alt="Vendor Banner"
                    />
                  </VendorBanner>
                  <VendorLogo>
                    <div>
                      <picture>
                        <img
                          loading="eager"
                          src={restaurant?.restaurantLogo}
                          alt="restaurant logo"
                        />
                      </picture>
                    </div>
                  </VendorLogo>
                </BannerBox>
                <VendorInfo>
                  <h1>{restaurant?.restaurantName}</h1>
                  <VendorDetails>
                    <StoreInfo>
                      <Tags>
                        <p>৳৳৳</p>
                        {restaurantTags?.map((tag, index) => (
                          <div key={index}>
                            <Seperator />
                            <VendorTags>
                              <span>{tag}</span>
                            </VendorTags>
                          </div>
                        ))}
                      </Tags>
                      <Adressbar>
                        <Time size="15" />
                        <VendorOpen>
                          <p>Closed</p>
                        </VendorOpen>
                        <Seperator />
                        <span>Opens at 10:00 AM</span>
                        <Seperator />
                        <p>{restaurant?.restaurantAddress}</p>
                      </Adressbar>
                    </StoreInfo>
                    <VendorButton>
                      <button>
                        <span>
                          <span>
                            <InfoOutline size="20" />
                            More Info
                          </span>
                        </span>
                      </button>
                    </VendorButton>
                  </VendorDetails>
                </VendorInfo>
                {/* restaurant content section */}
                <VendorNavigation store={store} />
                <MenuItems store={store} />

                <DrawerContent
                  onClick={handleClick}
                  className="drawer-content h-screen"
                >
                  {/* <!-- Page content here --> */}
                  <label
                    htmlFor="my-drawer"
                    className="btn btn-primary drawer-button"
                  >
                    Open drawer
                  </label>
                  <MobileIcon onClick={handleClick}>
                    {!click ? <Menu3 size="48" /> : <Close size="48" />}
                  </MobileIcon>
                </DrawerContent>
              </Box>
            </BoxContainer>
          </RestaurantContainer>
          <Aside click={click} className="drawer mt-10">
            <div>
              <DrawerSide className="drawer-side bg-primary">
                <ul className="menu p-4 w-80 bg-red-300 text-base-content">
                  {/* <!-- Sidebar content here --> */}
                  <li>
                    <p>Sidebar Item 1</p>
                  </li>
                  <li>
                    <p>Sidebar Item 2</p>
                  </li>
                </ul>
              </DrawerSide>
            </div>
          </Aside>
        </Grid>
      </Container>
    </>
  );
};

export default Restaurant;
