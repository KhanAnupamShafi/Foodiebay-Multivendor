import { format } from 'date-fns';
import QRCode from 'qrcode.react';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Group } from 'styled-icons/boxicons-regular';
import { InfoOutline } from 'styled-icons/evaicons-outline';
import { Menu3, Time } from 'styled-icons/remix-line';
import { useShoppingCart } from 'use-shopping-cart';
import CartSummary from '../../components/CartSummary/CartSummary';
import MenuItems from '../../components/MenuItems/MenuItems';
import Loading from '../../components/Shared/Loading/Loading';
import VendorNavigation from '../../components/VendorNavigation/VendorNavigation';
import Header from '../../layouts/Header/Header';
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
  QrCodeScanStyled,
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
} from './Restaurent.elements';

const Restaurant = () => {
  const { restaurantId } = useParams();
  const [click, setClick] = useState(false);
  // const closeCart = () => setClick(false);
  // const [button, setButton] = useState(true);
  const [restaurantTags, setRestaurantTags] = useState([]);
  const [showCart, setShowCart] = useState(true);
  const handleClick = () => setClick(true);
  const { cartCount, cartDetails } = useShoppingCart();
  const cartItems = Object.keys(cartDetails).map(
    (key) => cartDetails[key]
  );
  const [time, setTime] = useState('');
  const location = useLocation();

  useEffect(() => {
    const localtime = new Date();
    setTime(format(localtime, 'HH'));
  }, []);
  let qrURL = `${window.location.origin + location.pathname}`;

  console.log(qrURL);
  const url = `https://foodiebay-multivendor-server-production.up.railway.app/restaurants/vendor/${restaurantId}`;
  const url2 = `https://foodiebay-multivendor-server-production.up.railway.app/menu/${restaurantId}`;
  // React query...
  const { data: restaurant, isLoading: restaurantLoading } = useQuery(
    ['restaurant', restaurantId],
    () => fetch(url).then((res) => res.json())
  );
  const {
    data: store,
    isLoading: menuLoading,
    refetch,
  } = useQuery(['menu', restaurantId], () =>
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
      if (
        restaurantId !== cartItems[0]?.restaurantInfo?.restaurant_id
      ) {
        setShowCart(false);
      }
    }
  }, [cartCount, cartItems, restaurantId, refetch]);
  useEffect(() => {
    setRestaurantTags(restaurant?.restaurantType.split(', '));
  }, [restaurant]);

  if (restaurantLoading || menuLoading) {
    return <Loading></Loading>;
  }

  // download qr code

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById(`${qrURL}`);
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${restaurant?.restaurantName}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

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
                        <>
                          {10 < parseInt(time) &&
                          parseInt(time) < 23 ? (
                            <>
                              <VendorOpen open>
                                <p>Open</p>
                              </VendorOpen>
                              <Seperator />
                              <span>Closes at 9:00 PM</span>
                              <Seperator />
                            </>
                          ) : (
                            <>
                              <VendorOpen>
                                <p>Closed</p>
                              </VendorOpen>
                              <Seperator />
                              <span>Opens at 10:00 AM</span>
                              <Seperator />
                            </>
                          )}
                        </>

                        <p>{restaurant?.restaurantAddress}</p>
                      </Adressbar>
                    </StoreInfo>
                    <VendorButton>
                      <button type="button" onClick={downloadQRCode}>
                        <span>
                          <QrCodeScanStyled size={22} />
                        </span>
                      </button>
                      <div className="hidden">
                        <QRCode
                          id={qrURL}
                          value={qrURL}
                          size={290}
                          level={'H'}
                          includeMargin={true}
                        />
                      </div>
                      <button>
                        <span>
                          <span>
                            <InfoOutline size="20" />
                            More Info
                          </span>
                        </span>
                      </button>

                      <Link
                        to={`/booking/${restaurant?.restaurant_id}`}>
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
                    onClick={handleClick}>
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
                setClick={setClick}></CartSummary>
            </CartBox>
          </Aside>
        </Grid>
      </Container>
    </>
  );
};

export default Restaurant;
