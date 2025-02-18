import React from "react";
import HomePagel from "./homepagel";
import HomePager from "./homepager";
import "../styles/home.css";

const HomePage = () => {
    return (
    <div className="container">
        <div className="left">
            <HomePagel />
        </div>
        <div className="right">
            <HomePager />
        </div>
    </div>
    );
};

export default HomePage;