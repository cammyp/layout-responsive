import React from "react";

const Base = ({ layoutProperties }) => {
  const { title, image, layoutType, description } = layoutProperties;
  if (layoutType) {
    return (
      <div className="layout-container">
        <div className="col-md-6 order1">
          <img src={image} alt={title} />
        </div>
        <div className="text-container col-md-6 order2">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="layout-container">
        <div className="text-container col-md-6">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="col-md-6">
          <img src={image} alt={title} />
        </div>
      </div>
    );
  }
};

export default Base;
