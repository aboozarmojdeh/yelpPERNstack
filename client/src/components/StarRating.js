import React, { Fragment } from "react";

const StarRating = ({ rating }) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i className="fas fa-star text-warning"></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i className="fas fa-star-half-alt text-warning"></i>);
    } else {
      stars.push(<i className="far fa-star text-warning"></i>);
    }
  }
  return <Fragment>{stars}</Fragment>;
};

export default StarRating;