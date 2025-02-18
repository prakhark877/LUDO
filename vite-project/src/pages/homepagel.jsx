import React from "react";
import Navbar from "../components/navbar";
import "../styles/left.css";

const HomePagel = () => {
  return (
    <div className="homepage-container">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="searchbar-container">
        <input
          type="text"
          placeholder="Search tournaments..."
          className="search-input"
          style = {{
            margin : "101px 141px 0px -22px",
          }}
        />
      </div>

      <div className="tournaments-container">
        <p style={{
             margin: "0px 0px -22px -307px",
             fontWeight: "700",
             fontSize: "17px",
        }}>Tournaments</p>
        <button
          className="buttonyou"
          type="button"
          style={{
            border: "none",
            outline: "none",
            border: "blueviolet",
            outline: "none",
            backgroundColor : "red",
            color: "white",
            margin: "-58px -31px 0px 270px",
          }}
        >You Tube</button>
      </div>
      <div className="container-fluid" style = {{
         margin : "54px 0px 0px -223px",
      }}>
         <img className="screenshot1" src="/images/pic1.png" alt="#" style = {{
            width : "91%",
         }} />
      </div>
      <img className="screenshot2" src = "/images/Screenshot (40).png" alt="#" />

      <div className="container-fluid" style = {{
         margin : "54px 0px 0px -223px",
      }}>
         <img className="screenshot1=3" src="/images/Screenshot (41).png" alt="#" style = {{
            width : "91%",
         }} />
      </div>
      <img className="screenshot4" src = "/images/Screenshot (44).png" alt="#" />
      <div className="container-fluid" style = {{
         margin : "54px 0px 0px -223px",
      }}>
         <img className="screenshot5" src="/images/Screenshot (42).png" alt="#"
         style = {{
          width: "51%",
          margin: "86px 0px 0px 237px",
         }}
         />
      </div>

    </div>
  );
};

export default HomePagel;
