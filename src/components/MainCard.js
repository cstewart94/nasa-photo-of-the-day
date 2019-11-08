import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import InfoCard from "./InfoCard";
import ImageCard from "./ImageCard";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const MainStyle = styled.div`

justify-content:center;
align-items:center;
`


export default function MainCard() {
  const [nasaCard, setNasaCard] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=NQLqVRpjRdpDOVg6vsjcliCst79kXsHrcWpbvfm1')
    .then(response => {
      console.log(response.data);
      setNasaCard(response.data);
    })
  }, [])

  return(
      <Card>
        <CardBody>
          <MainStyle>
            <ImageCard url={nasaCard.url}/>
            <InfoCard title={nasaCard.title} explanation={nasaCard.explanation} date={nasaCard.date}/>
          </MainStyle>
        </CardBody>
      </Card>
  )
}


