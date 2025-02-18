import React from "react";
import "../styles/right.css";

const HomePager = () => {
    return (
        <div className = "rightpage-container">
            <img src="/images/ludologo.png"></img><br />
            <img src="/images/ludologo.png" style = 
            {{
                margin : "-6px 0px -69px -390px",
                width : "7%",
            }}
            />
            <h2>RK Ludo WIN REAL CASH</h2><br /><br />
            <h2>For best experience, open rkludo.in on <img src="/images/chrome_img.png" alt="#" style={{
                    width: "3%",
                    margin: "0px 5px 0px 0px",
            }} />mobile</h2>
        </div>
    );
};

export default HomePager;