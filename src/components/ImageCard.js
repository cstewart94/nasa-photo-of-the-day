import React from "react";

const ImageCard = props => {
  return (
    <div className="mainContainer">
      <div className="cardTitle">
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
        <p>{props.explanation}</p>
      </div>
      <div className="cardImage">
        <img src={props.url} alt="Photo Of The Day"/>
        
      </div>
    </div>
  );
};

export default ImageCard;