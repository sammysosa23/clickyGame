import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card" onClick={props.imageClick} >
    <div className="img-container">
      <img src={props.image} alt={props.id} className="img-responsive" height="100%" width="100%" />
    </div>
  </div>
);

export default ImageCard;