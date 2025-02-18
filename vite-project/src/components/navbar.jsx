import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
const[isOpen, setIsOpen] = useState(false);

    return (
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light shadow"
          style={{
            position: "fixed", // Keeps it fixed at the top
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1000, // Ensures it stays above other content
            padding: "8px 15px",
            minHeight: "50px",
            margin : "0px 0px 0px -536px",
          }}
        >

        <div className="container-fluid" style = {{
              backgroundColor : "lightskyblue",
              margin: "-8px 332px 0px -157px",
        }}>
             {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            border: "none",
            outline: "none",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Logo Section */}
        <Link className="navbar-brand" to="/">
        <img
        src="/images/ludologo.png"
        alt="Company Logo"
        style={{
          height: "40px", // Slightly smaller logo for a clean look
          width: "auto",
          marginRight: "10px",
          margin : "9px 0px 0px 560px",
        }}
      />
      <span style={{ fontWeight: "bold", fontSize: "18px", color: "#333" }}>RK Ludo</span>
        </Link>
        <button
          className="login"
          type="button"
          style={{
            borderRadius: "-1px",
            margin: "-11px 0px 0px 552px",
            borderColor : "black",
            color : "black",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "lightpinkss")} // Darker color on hover
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")} // Original color on leave
        >
        LOGIN  
        </button>
        </div>
        </nav>
    );
};

export default Navbar;