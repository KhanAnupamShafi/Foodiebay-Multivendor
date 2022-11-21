import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import auth from "../../firebase.init";
import BD from "../../assets/Form/bangladesh-flag-icon.svg";
import BG from "../../assets/Merchant/merchant_img.png";
import { Location } from "styled-icons/entypo";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useQuery } from "react-query";
import MerchantStatus from "./MerchantStatus";
import { useNavigate } from "react-router-dom";
import { Logo, NavLogo } from "../../layouts/Header/Header.elements";
import headerLogo from "../../assets/Header/Logo2.png";

const Merchant = () => {
  const [user] = useAuthState(auth);
  const [application, setApplication] = useState({});
  console.log(application);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const date = new Date();
  const formattedDate = format(date, "PP");
  const navigate = useNavigate();
  const {
    data: restaurantInfo,
    isLoading,
    refetch,
  } = useQuery(["Restaurant", user.email], () =>
    fetch(`http://localhost:5000/restaurant?restaurantId=${user.email}`).then(
      (res) => res.json()
    )
  );
  // console.log(restaurantInfo);
  const onSubmit = (data) => {
    const restaurantData = {
      ownerName: data.fName + " " + data.lName,
      contact: data.mobile,
      email: user?.email,
      restaurantName: data.restaurant,
      restaurantType: data.type,
      restaurantBanner: data.banner,
      restaurantLogo: data.logo,
      restaurantAddress: data.address,
      applicationStatus: "pending",
      date: formattedDate,
    };
    // console.log(restaurantInfo);
    fetch(`http://localhost:5000/restaurant/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(restaurantData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setApplication(data.restaurant);
          refetch();
          navigate("/merchants");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    reset();
  };
  return (
    <MerchantSecion>
      <CorporateApplyContainer>
        <Overlay></Overlay>
        <CorporateContents>
          <NavLogo to="/">
            <Logo src={headerLogo} alt="Company Logo" />
          </NavLogo>
          <h3>START GROWING YOUR BUSINESS TODAY</h3>
          <p>
            Let your employees focus on what's important. We'll take care of the
            food they love.
            <br />
            Try our easy, flexible corporate food delivery service today.
          </p>
          {restaurantInfo?.applicationStatus || application.acknowledged ? (
            <>
              <h1>Recieved Request</h1>
              <MerchantStatus
                restaurantInfo={restaurantInfo}
                refetch={refetch}
              />
            </>
          ) : (
            <CorporateContentForm>
              <CorporateForm onSubmit={handleSubmit(onSubmit)}>
                <h4>Your Details</h4>
                <div className="pb-5">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      {...register("email", {})}
                      value={user?.email}
                      placeholder="You can't touch this"
                      className="input input-bordered w-full max-w-xs"
                      disabled
                    />
                  </div>
                  <div className="form-control w-full max-w-xs pt-5">
                    <input
                      required
                      {...register("fName", {})}
                      type="text"
                      placeholder="First Name"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs pt-5">
                    <input
                      required
                      {...register("lName", {})}
                      type="text"
                      placeholder="Last Name"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs pt-5">
                    <label className="input-group">
                      <span className="text-accent ">
                        <img width={22} src={BD} alt="" className="mr-1" />
                        +880
                      </span>
                      <input
                        required
                        {...register("mobile", { valueAsNumber: true })}
                        type="number"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                  </div>
                </div>
                <h4>Company Details</h4>
                <div className="form-control w-full max-w-xs pt-5">
                  <input
                    required
                    {...register("restaurant", {})}
                    type="text"
                    placeholder="Restaurant Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs pt-5">
                  <label className="input-group">
                    <span>Type</span>
                    <input
                      required
                      {...register("type", {})}
                      type="text"
                      placeholder="eg. Convenience, Snacks"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
                <div className="form-control w-full max-w-xs pt-5">
                  <input
                    // required
                    {...register("banner", {})}
                    type="url"
                    placeholder="Company Banner"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs pt-5">
                  <input
                    // required
                    {...register("logo", {})}
                    type="url"
                    placeholder="Company Logo"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs pt-5">
                  <label className="input-group">
                    <span>
                      <Location width={24} />
                    </span>
                    <input
                      // required
                      {...register("address", {})}
                      type="text"
                      placeholder="Address"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
                <div className="form-control w-full max-w-xs pt-5">
                  <button
                    type="submit"
                    className="btn btn-block w-full max-w-xs"
                  >
                    Apply
                  </button>
                </div>
              </CorporateForm>
            </CorporateContentForm>
          )}
        </CorporateContents>
      </CorporateApplyContainer>
    </MerchantSecion>
  );
};

export default Merchant;

const MerchantSecion = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 104px;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: #fef4f7;
  border-radius: 16px;
  text-align: left;
`;

const CorporateApplyContainer = styled.div`
  padding: 8px 15%;
  position: relative;
  margin: 0 24px;
  width: 100%;
  position: sticky;
  bottom: 0px;
  a {
    padding: 20px;
    img {
      width: 110px;
      border-radius: 10px;
    }
  }

  background-image: url(${BG});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  @media screen and (max-width: 1024px) {
    padding: 8px 5%;
  }
`;

const CorporateContents = styled.div`
  padding-top: 10px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
  th {
    background-color: #fef4f7;
  }
  h3 {
    color: #707070;
    font-size: 3rem;
    font-weight: bold;
    font-family: "Uber", Arial, sans-serif;
    font-weight: 600;
    letter-spacing: 0.31px;
    margin: 0 0 32px;
    line-height: 60px;
    word-break: break-word;
    margin-top: 20px;
  }
  p {
    color: #333;
    /* font-family: "Uber", Arial, sans-serif; */
    font-weight: 400;
    letter-spacing: 0.1px;
    line-height: 24px;
    margin-top: 32px;
    padding-bottom: 30px;
  }
`;
const CorporateContentForm = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 8%);
  border-radius: 16px;
`;

const CorporateForm = styled.form`
  text-align: left;
  padding: 24px 30% 48px;
  h4 {
    margin: 32px 0 24px;
    color: #1f4d5d;
    font-size: 2rem;
    font-family: "Open Sans", Arial, sans-serif;
    font-weight: 600;
    letter-spacing: 0.13px;
    word-break: break-word;
  }

  @media screen and (max-width: 1024px) {
    padding: 24px 10% 48px;
  }
`;
