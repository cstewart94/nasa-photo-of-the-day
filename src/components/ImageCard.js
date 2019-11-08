import React from "react";
import styled from "styled-components";
import {
  Card, CardImg
} from 'reactstrap';

const CardHolder = styled.div`
width:100vw;
height:100vh;
position:fixed;
top:1px;
overflow:overlay;
::-webkit-scrollbar{
  color:black;
}
`
const PicCard = styled.div`
margin-top: -1%;
width:100vw;
`;

const ImageCard = props => {
  return (
    <CardHolder>
      <PicCard>
        <CardImg top src={props.url} alt="Photo Of The Day" />
      </PicCard>
    </CardHolder>
  );
};

export default ImageCard;