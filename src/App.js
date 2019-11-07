import React, {useState, useEffect} from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import "./App.css";

function App() {
  const [dailyImg, setDailyImg] = useState([]);
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=NQLqVRpjRdpDOVg6vsjcliCst79kXsHrcWpbvfm1')
    .then(response => {
      console.log(response.data);
      setDailyImg(response.data);
    })
  }, [])

  return(
    <div className="App">
      <h1>Nasa Photo of The Day</h1>
      <ImageCard title={dailyImg.title} url={dailyImg.url} explanation={dailyImg.explanation} date={dailyImg.date}/>
    </div>
  )
}

export default App;
