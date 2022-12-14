import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { InfoOutline } from "styled-icons/evaicons-outline";
import { Close, Menu3, Time } from "styled-icons/remix-line";
import MenuItems from "../../components/MenuItems/MenuItems";
import Loading from "../../components/Shared/Loading/Loading";
import VendorNavigation from "../../components/VendorNavigation/VendorNavigation";
import CartSummary from "../../components/CartSummary/CartSummary";
import Header from "../../layouts/Header/Header";
import { BookingBtn, MobileIcon } from "../../layouts/Header/Header.elements";
import {
  Adressbar,
  Aside,
  BannerBox,
  BookingButton,
  Box,
  BoxContainer,
  CartBox,
  Container,
  DrawerContent,
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
import { useShoppingCart } from "use-shopping-cart";
import { Group } from "styled-icons/boxicons-regular";

const Restaurant = () => {
  const { restaurantId } = useParams();
  const [click, setClick] = useState(false);
  const closeCart = () => setClick(false);
  const [button, setButton] = useState(true);
  const [restaurantTags, setRestaurantTags] = useState([]);
  const [showCart, setShowCart] = useState(true);
  const handleClick = () => setClick(true);
  const { cartCount, cartDetails } = useShoppingCart();
  const cartItems = Object.keys(cartDetails).map((key) => cartDetails[key]);

  const url = `https://foodiebay.onrender.com/restaurants/vendor/${restaurantId}`;
  const url2 = `https://foodiebay.onrender.com/menu/${restaurantId}`;
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
      // enabled: false,
      // staleTime: Infinity,
      cacheTime: 0,
    })
  );
  useEffect(() => {
    if (cartCount) {
      // refetch();
      if (restaurantId !== cartItems[0]?.restaurantInfo?.restaurant_id) {
        setShowCart(false);
      }
    }
  }, [cartCount, cartItems, restaurantId, refetch]);
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
                      crossOrigin="anonymous"
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
                        <p>?????????</p>
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

                      <Link to={`/booking/${restaurant?.restaurant_id}`}>
                        <BookingButton>
                          <span>
                            <span>
                              <Group size="20" />
                              Book A Table
                            </span>
                          </span>
                        </BookingButton>
                      </Link>
                    </VendorButton>
                  </VendorDetails>
                </VendorInfo>
                {/* restaurant content section */}
                <DrawerContent className="drawer-content md:hidden">
                  {/* <!-- Page content here --> */}
                  <label
                    htmlFor="my-drawer"
                    className="p-2 btn btn-secondary"
                    onClick={handleClick}
                  >
                    <span>
                      Cart <Menu3 size="28" />
                    </span>
                  </label>
                </DrawerContent>

                <VendorNavigation store={store} />
                <MenuItems
                  store={store}
                  showCart={showCart}
                  setShowCart={setShowCart}
                  restaurantId={restaurantId}
                />
              </Box>
            </BoxContainer>
          </RestaurantContainer>
          <Aside click={click}>
            <CartBox>
              <CartSummary
                restaurant={restaurant}
                showCart={showCart}
                setClick={setClick}
              ></CartSummary>
            </CartBox>
          </Aside>
        </Grid>
      </Container>
    </>
  );
};

export default Restaurant;
