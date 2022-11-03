import React, { useState } from "react";
import styled from "styled-components";
import { Logo, NavLogo } from "../../layouts/Header/Header.elements";
import headerLogo from "../../assets/Header/Logo1.png";
import Food_delivery from "../../assets/Login/food_delivery.png";
import HeroImg from "../../assets/Login/hero-login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../components/Shared/Loading/Loading";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    // const email = event.target.email.value;
    // const password = event.target.password.value;
    // console.log(email, password);
    // signInWithEmailAndPassword(email, password);
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (guser || user) {
    console.log(guser || user);
    navigate(from, { replace: true });
    // navigate('/home')
  }
  let loadingButton;
  if (loading || gloading) {
    loadingButton = <Loading />;
  }

  let errorMessage;
  if (error || gerror) {
    console.log("error message", error || gerror);
    errorMessage = (
      <p className="m-auto text-red-500">{error?.message || gerror?.message}</p>
    );
  }

  return (
    <>
      <Container>
        <LogoContainer>
          <NavLogo to="/">
            <Logo src={headerLogo} alt="Company Logo" />
          </NavLogo>
        </LogoContainer>
        <Left>
          <SvgConttainer>
            <img src={Food_delivery} alt="" />
          </SvgConttainer>
        </Left>
        <Right></Right>
        <Wrapper>
          <RegisterContainer>
            <Top>
              <p className="text-left text-lg md:text-xl">
                Welome to Foodiebay
              </p>
              <p className="text-right text-xs md:text-sm text-slate-400">
                No account?
                <Link to="/signup">
                  <span className="block transition-colors duration-300 text-accent hover:text-orange-400 cursor-pointer">
                    Sign Up
                  </span>
                </Link>
              </p>
            </Top>
            <h1 className="text-5xl md:text-6xl py-4">Sign In</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text md:text-base">
                    Enter your email address
                  </span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email Required !",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Provide a valid email!",
                    },
                  })}
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full pt-5">
                <label className="label">
                  <span className="label-text md:text-base">
                    Enter your password
                  </span>
                </label>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password Required !",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 character or longer",
                      },
                    })}
                    name="password"
                    placeholder="Password"
                    type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}
                    className="input input-bordered w-full focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />

                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <button
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      className="btn btn-ghost btn-circle"
                    >
                      {!values.showPassword ? (
                        <svg
                          className="h-6 text-gray-700"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          className="h-6 text-gray-700"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                        >
                          <path
                            fill="currentColor"
                            d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                          ></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
                <label className="label">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                        className="checkbox"
                      />
                      <span className="label-text ml-2">Remember me</span>
                    </label>
                  </div>
                  <label className="label">
                    <span className="label-text-alt cursor-pointer">
                      Forgot password?
                    </span>
                  </label>
                </label>
              </div>
              {errorMessage}
              <button type="submit" className="btn btn-accent btn-block my-10">
                Sign In
              </button>
              {loadingButton}
            </Form>
            <div className="divider">OR</div>
            <ButtonGroup>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-warning  flex-auto md:flex-1"
              >
                <svg
                  width="24"
                  height="24"
                  color="SystemWhite"
                  viewBox="0 0 24 24"
                  style={{ marginRight: 4 }}
                >
                  <path
                    fill="#fff"
                    d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
                  ></path>
                  <path
                    fill="#4285F4"
                    fillRule="evenodd"
                    d="M19.2 12.17c0-.531-.048-1.042-.136-1.533H12v2.9h4.036a3.45 3.45 0 01-1.496 2.264v1.882h2.424c1.418-1.305 2.236-3.228 2.236-5.512z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#34A853"
                    fillRule="evenodd"
                    d="M12 19.5c2.025 0 3.723-.672 4.964-1.817L14.54 15.8c-.672.45-1.53.716-2.54.716-1.953 0-3.607-1.32-4.196-3.092H5.298v1.943A7.497 7.497 0 0012 19.5z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#FBBC05"
                    fillRule="evenodd"
                    d="M7.803 13.425c-.15-.45-.235-.93-.235-1.425 0-.494.085-.975.235-1.425V8.632H5.298A7.497 7.497 0 004.5 12c0 1.21.29 2.356.798 3.368l2.505-1.943z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#EA4335"
                    fillRule="evenodd"
                    d="M12 7.483c1.101 0 2.09.378 2.867 1.122l2.151-2.152C15.72 5.243 14.022 4.5 12 4.5a7.497 7.497 0 00-6.702 4.132l2.506 1.943c.59-1.773 2.243-3.092 4.196-3.092z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="">Sign in with Google</span>
              </button>
              <button className="btn btn-square btn-active btn-ghost grow md:grow-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="none"
                  aria-hidden="true"
                  className="styles__StyledInlineSvg-sc-12l8vvi-0 bLgQGi"
                  viewBox="0 0 24 24"
                  style={{ marginRight: 4 }}
                >
                  <path
                    fill="#1877F2"
                    d="M21 12a9 9 0 10-10.406 8.89v-6.288H8.309V12h2.285v-1.983c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.175 2.014.175v2.215h-1.135c-1.118 0-1.467.694-1.467 1.406V12h2.496l-.399 2.602h-2.097v6.289C17.71 20.216 21 16.492 21 12z"
                  ></path>
                </svg>
              </button>
              <button className="btn btn-square btn-active btn-ghost grow md:grow-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="none"
                  aria-hidden="true"
                  className="styles__StyledInlineSvg-sc-12l8vvi-0 bLgQGi"
                  viewBox="0 0 24 24"
                  style={{ marginRight: 4 }}
                >
                  <path
                    fill="#191919"
                    d="M17.02 11.094c.027 2.875 2.523 3.832 2.55 3.844-.02.068-.398 1.364-1.314 2.703-.792 1.157-1.614 2.31-2.909 2.334-1.272.024-1.681-.754-3.136-.754-1.454 0-1.908.73-3.112.778-1.25.047-2.202-1.252-3-2.405-1.632-2.359-2.879-6.666-1.204-9.573.831-1.444 2.318-2.358 3.931-2.381 1.227-.024 2.386.825 3.136.825s2.157-1.02 3.637-.87c.62.025 2.358.25 3.475 1.884-.09.056-2.075 1.211-2.053 3.615zm-2.39-7.06c.663-.804 1.11-1.922.988-3.034-.956.038-2.113.637-2.799 1.44-.615.71-1.153 1.849-1.008 2.939 1.066.082 2.155-.542 2.819-1.345"
                  ></path>
                </svg>
              </button>
            </ButtonGroup>
          </RegisterContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default SignIn;

const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  height: 100vh;
`;

const Left = styled.div`
  position: relative;
  background-color: #e48700;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SvgConttainer = styled.div`
  width: 350px;
  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: bottom;
  }
`;

const Right = styled.div`
  position: relative;
  background-color: #fff;
  background-image: url(${HeroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left center;
  width: 100%;

  @media screen and (max-width: 1024px) {
    background-position: 20% center;
  }
`;
const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;
const RegisterContainer = styled.div.attrs({ className: "text-left" })`
  margin: auto 10px;
  width: 540px;
  background-color: #fff;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.08);
  border-radius: 40px;
  padding: 40px;

  @media screen and (max-width: 540px) {
    max-width: auto;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 2%;
  left: 5%;
  width: 100px;
  z-index: 1;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;
