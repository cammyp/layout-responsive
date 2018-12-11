import React from "react";
import PropTypes from "prop-types";

const Carousel = ({ carouselProperties }) => {
  const { index, image, title, description } = carouselProperties;
  return (
    <div className="carousel-container" id={`carousel-${index}`}>
      <div className="col-md-3">
        <img src={image} alt={title} />
      </div>
      <div className="carousel-text-container col-md-5">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="button-container">
          <button type="button" className="btn btn-primary">
            Buy Now
          </button>
          <button type="button" className="btn-primary">
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  property: PropTypes.object.isRequired
};

export default Carousel;
