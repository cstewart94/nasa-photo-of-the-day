import React from "react";
import styled from "styled-components";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const InfoStyle = styled.div`
  display:flex;
  flex-direction: column;
  width: 30%;
  background:black;
  position:fixed;
  right:1px;
  top:1px;
`;


const InfoCard = props =>{
return(
      <InfoStyle>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.date}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
      </InfoStyle>
  );
}

export default InfoCard;