import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const ImageCard = props => {
  return (
    <div className="mainContainer">
      <div className="cardTitle">
        <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.date}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
        </CardBody>
        <div className="cardImage">
        <CardImg top width="100%" src={props.url} alt="Photo Of The Day" />
        </div>
      </Card>
    </div>
    </div>
  );
};

export default ImageCard;