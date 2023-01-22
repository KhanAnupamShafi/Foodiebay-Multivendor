import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../layouts/Header/Header";
import { Container } from "../Restaurant/Restaurent.elements";
import ReservationImg from "../../assets/Restaurant/reservation_1.jpg";
import { useForm } from "react-hook-form";
import { Dish } from "styled-icons/boxicons-regular";
import { Person } from "styled-icons/bootstrap";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-scroll";

const Booking = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [table, setTable] = useState([]);
  const [bookingStat, setBookingStat] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    data: tableInfo,
    isLoading,
    refetch,
  } = useQuery(["tables", id], () =>
    fetch(`https://foodiebay.onrender.com/table/${id}`).then((res) =>
      res.json()
    )
  );

  useEffect(() => {
    const person = tableInfo?.find((table) => {
      return table?.customer?.email === user?.email;
    });
    setBookingStat(person || {});
  }, [tableInfo, user?.email]);
  // console.log(bookingStat);
  useEffect(() => {
    const available = tableInfo?.filter((e) => {
      return e.booked === false;
    });
    setTable(available);
  }, [tableInfo]);

  console.log(table);

  // handle submit
  const onSubmit = (data) => {
    let bookingData = { ...data, id: table[0]?.id, email: user?.email };
    console.log(bookingData);
    const uri = `https://foodiebay.onrender.com/table/${id}`;
    fetch(uri, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.modifiedCount > 0) {
          toast.success(`Booked Successfully`);
          refetch();
        } else {
          toast.error(`Failed! Try Again`);
        }
      });
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  return (
    <>
      <Container>
        <Header />
      </Container>
      <PageTitle>
        <h3>Reservation</h3>
        <h2>Book Your table online</h2>
      </PageTitle>
      <BookingSection>
        <ImageContainer>
          <img src={ReservationImg} alt="" />
        </ImageContainer>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white w-auto h-auto pb-10 mt-5 mx-5 px-5 rounded-lg sm:w-full md:w-4/5 md:mx-auto">
              {/* header section */}
              <div className="h-24 flex justify-center items-center shadow ">
                {!bookingStat?.customer ? (
                  <p className="uppercase font-bold text-xl lg:text-4xl text-center">
                    Make A Reservation
                  </p>
                ) : (
                  <p className="uppercase font-bold text-xl lg:text-4xl text-center">
                    Thanks For Booking
                  </p>
                )}
              </div>
            </div>

            {bookingStat?.customer ? (
              <div className="mx-auto right-0 mt-2 mx-5 px-5 rounded-lg sm:w-full md:w-4/5 md:mx-auto">
                <div className="bg-white rounded overflow-hidden shadow-lg">
                  <div className="text-center p-6 bg-gray-800 border-b">
                    <p className="pt-2 text-lg font-semibold text-gray-50">
                      {bookingStat?.customer?.name}
                    </p>
                    <p className="text-md text-gray-100">
                      {bookingStat?.customer?.email}
                    </p>
                    <div className="mt-5 text-center">
                      <div className="text-sm breadcrumbs">
                        <ul className="justify-center text-gray-100">
                          <li>
                            <a> {bookingStat?.customer?.reserveDate}</a>
                          </li>
                          <li>
                            <a> {bookingStat?.customer?.time}</a>
                          </li>
                          <li> {bookingStat?.customer?.guest} guests</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-b">
                    <div className="px-4 py-2 bg-orange-400  flex justify-center">
                      <p className="border rounded-full py-2 px-4 font-bold text-sm text-rose-100 hover:bg-orange-500">
                        Cancel Booking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid justify-center items-center shadow space-y-5 bg-indigo-50 pb-10 md:w-3/4 mx-auto px-2">
                <div className="w-full">
                  <div className="flex flex-col md:flex-row md:space-x-8 mt-5">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className={`w-6 h-6 ${
                          errors.tableType &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        value="Family Dining<"
                        {...register("tableType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                      <p className="text-md font-bold uppercase">
                        Family Dining
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className={`w-6 h-6 ${
                          errors.tableType &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        value="Booths"
                        {...register("tableType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                      <p className="ttext-lg font-bold uppercase">Booths</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className={`w-6 h-6 ${
                          errors.tableType &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        value="Outdoor"
                        {...register("tableType", {
                          required: {
                            value: true,
                            message: "Trip type is required",
                          },
                        })}
                      />
                      <p className="text-md font-bold uppercase">Outdoor</p>
                    </div>
                  </div>
                  <div>
                    {errors.tableType && (
                      <span className="text-sm text-red-500">
                        {errors.tableType.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* radio end */}

                <div>
                  <div>
                    <div>
                      <div>
                        <div className="relative">
                          <p className="font-bold text-lg text-left uppercase">
                            Reservation date
                          </p>
                          <input
                            type="date"
                            min={disablePastDate()}
                            className={`w-full h-12 text-xl rounded-lg ${
                              errors.reserveDate &&
                              " focus:border-red-500 focus:ring-red-500 border-red-500"
                            }`}
                            {...register("reserveDate", {
                              required: {
                                value: true,
                                message: "Reservation date is required",
                              },
                            })}
                          />
                        </div>
                        <div>
                          {errors.reserveDate && (
                            <span className="text-sm text-red-500">
                              {errors.reserveDate.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* time end */}
                <div className="flex space-x-4 ">
                  {/* departure section */}
                  <div className="md:flex-none">
                    <div className="relative">
                      <p className="font-bold text-lg text-left uppercase">
                        When
                      </p>
                      <select
                        className={`w-full h-12 text-xl pl-16 rounded-lg align-middle ${
                          errors.time &&
                          " focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        {...register("time", {
                          required: {
                            value: true,
                            message: "Booking time is required",
                          },
                        })}
                      >
                        <option value="" defaultValue disabled hidden>
                          --Select Time--
                        </option>
                        <option value="12:00 am - 1:00 pm">
                          12:00 am - 1:00 pm
                        </option>
                        <option value="1:00 pm - 2:00 pm">
                          {" "}
                          1:00 pm - 2:00 pm
                        </option>
                        <option value="2:00 pm - 3:00 pm">
                          {" "}
                          2:00 pm - 3:00 pm
                        </option>
                        <option value="4:00 pm - 5:00 pm">
                          {" "}
                          4:00 pm - 5:00 pm
                        </option>
                        <option value="6:00 pm - 7:00 pm">
                          {" "}
                          6:00 pm - 7:00 pm
                        </option>
                        <option value="7:00 pm - 8:00 pm">
                          {" "}
                          7:00 pm - 8:00 pm
                        </option>
                      </select>
                      <Dish
                        className="text-4xl absolute left-5 top-9 "
                        size={30}
                      />
                    </div>
                    <div>
                      {errors.time && (
                        <span className="text-sm text-red-500">
                          {errors.time.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:shrink">
                    <div>
                      <div className="relative">
                        <p className="font-bold text-lg text-left uppercase">
                          Guests
                        </p>
                        <select
                          className="w-full h-12 rounded-lg text-xl pl-16"
                          {...register("guest", {
                            required: {
                              value: true,
                              message: "Trip type is required",
                            },
                          })}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <Person
                          size={30}
                          className="text-4xl absolute left-5 top-9 "
                        />
                      </div>
                      {/* <div>Error</div> */}
                    </div>
                  </div>
                </div>
                {/* end  */}
                <div>
                  <div>
                    <div className="relative">
                      <p className="font-bold text-lg text-left uppercase">
                        Your Name
                      </p>
                      <input
                        type="text"
                        className={`w-full h-12 mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 rounded-lg focus:ring-0 focus:border-black ${
                          errors.name &&
                          "focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        {...register("name", {
                          required: {
                            value: true,
                            message: "name is required",
                          },
                        })}
                      />
                    </div>
                    <div>
                      {errors.name && (
                        <span className="text-sm text-red-500">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {/* end  */}
                <div>
                  <div>
                    <div className="relative">
                      <p className="font-bold text-lg text-left uppercase">
                        Your Mobile
                      </p>
                      <input
                        type="tel"
                        className={`w-full h-12 mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 rounded-lg focus:ring-0 focus:border-black ${
                          errors.mobile &&
                          "focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        {...register("mobile", {
                          required: {
                            value: true,
                            message: "Reservation date is required",
                          },
                        })}
                      />
                    </div>
                    <div>
                      {errors.mobile && (
                        <span className="text-sm text-red-500">
                          {errors.mobile.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <input
                    disabled={table?.length < 1}
                    type="submit"
                    value="Book NOW"
                    className="w-full text-base-100 h-16 font-bold text-2xl uppercase rounded-lg disabled:bg-gray-300 hover:disabled:none bg-red-400 hover:bg-red-500"
                  />
                </div>

                <div>
                  {table?.length < 1 && (
                    <span className="text-sm text-red-500">
                      Sorry there is no table available right now
                    </span>
                  )}
                </div>
              </div>
            )}
          </form>
        </FormContainer>
      </BookingSection>
    </>
  );
};

export default Booking;

const PageTitle = styled.div`
  padding: 80px 0 90px;
  h3 {
    color: #e7272d;
    font-family: Uber, Sans-serif;
    font-size: 38px;
    font-weight: 400;
    line-height: 58px;
    letter-spacing: -0.96px;
    margin: 0;
  }
  h2 {
    color: #333;
    margin: 0 0 10px;
    font-size: 54px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: -1.08px;
  }
`;
const BookingSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 20px;
`;
const ImageContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border: 3px solid #eaeaea;
    height: 500px;
    max-width: 100%;
    margin: auto;
    margin-top: 30%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const FormContainer = styled.div`
  width: 60%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
