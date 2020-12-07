import React, { useContext, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import AddReview from "../components/AddReview";
import Reviews from "../components/Reviews";
import StarRating from "../components/StarRating";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantDetailPage = (props) => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await RestaurantFinder.get(`${id}`);
        console.log(response.data.data.restaurant);
        setSelectedRestaurant(response.data.data.restaurant);
      };
      fetchData();
    } catch (err) {
      console.error(err.message);
    }
  }, []);
  return (
    <div>
      {selectedRestaurant && (
        <Fragment>
        <div className="mt-3">
        <Reviews />
<AddReview />
        </div>
         
        </Fragment>
      )}
    </div>
  );
};

export default RestaurantDetailPage;
