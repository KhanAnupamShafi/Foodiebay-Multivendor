import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Shared/Loading/Loading";

const Restaurant = () => {
  const { restaurantId } = useParams();
  const url = `http://localhost:5000/restaurants/vendor/${restaurantId}`;
  // React query...
  const { data: restaurant, isLoading } = useQuery(
    ["restaurant", restaurantId],
    () => fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(restaurant);
  return (
    <div>
      <h1>Comming soon</h1>
      <p>{restaurantId}</p>
      <span>{restaurant.restaurantName}</span>
    </div>
  );
};

export default Restaurant;
