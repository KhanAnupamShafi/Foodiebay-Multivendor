import React from "react";
import styled from "styled-components";
import Food_delivery from "../../assets/Login/food_delivery.png";
import HeroImg from "../../assets/Login/hero-login.jpg";
import { Logo, NavLogo } from "../../layouts/Header/Header.elements";
import headerLogo from "../../assets/Header/Logo1.png";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from "../../components/Shared/Loading/Loading";

const SignUp = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);



  // sign up with (Email & Password)
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  // update user Name....
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);



  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = async (event) => {
    event.preventDefault();
    const name = event.target.name.value
    const email = event.target.email.value
    const number = event.target.number.value
    const password = event.target.password.value
    console.log(name, email, number, password)
    await createUserWithEmailAndPassword(email, password)
    await updateProfile({ displayName: name });
    alert('Updated profile');
    console.log('Update done')
    navigate('/home')
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const navigate = useNavigate()

  if (guser || user) {
    console.log(guser || user)
    // navigate('/')
  }

  if (loading || gloading) {
    return <Loading></Loading>
  }
  let errorMessage;
  if (error || gerror || updateError) {
      console.log('error message',error || gerror || updateError)
      errorMessage = <p className='text-red-500'>Error: {error?.message || gerror?.message || updateError?.message}</p>;
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
                Already have an account?
                <Link to="/signin">
                  <span className="block transition-colors duration-300 text-accent hover:text-orange-400 cursor-pointer">
                    Sign In
                  </span>
                </Link>
              </p>
            </Top>
            <h1 className="text-5xl md:text-6xl py-4">Sign Up</h1>
            <Form onSubmit={handleMouseDownPassword}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text md:text-base">
                    Enter your email address
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                />
                {/* <label className="label">
              <span className="label-text-alt">Alt label</span>
            </label> */}
              </div>

              <div className="flex flex-row gap-5 py-8">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text md:text-base">Username</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Username"
                    className="input input-bordered w-full focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                  {/* <label className="label">
              <span className="label-text-alt">Alt label</span>
            </label> */}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text md:text-base">Contact No.</span>
                  </label>
                  <input
                    name="number"
                    type="number"
                    placeholder="Contact"
                    className="input input-bordered w-full focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                  {/* <label className="label">
              <span className="label-text-alt">Alt label</span>
            </label> */}
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text md:text-base">
                    Enter your password
                  </span>
                </label>
                <div className="relative">
                  <input
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
                {/* <label className="label">
              <span className="label-text-alt">Alt label</span>
            </label> */}
              </div>

            {/* Error Message */}
              {errorMessage}

              <button type="submit" className="btn btn-accent btn-block my-14">
                Sign Up
              </button>
            </Form>
            <div class="divider">OR</div>

            <div className="text-center">
              <button onClick={() => signInWithGoogle()} class="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg">Google Registration</button>
            </div>
          </RegisterContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default SignUp;

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
  padding-top: 40px;
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
  z-index: 5;
`;
