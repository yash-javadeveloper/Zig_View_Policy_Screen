import React from "react";
import { Link } from "react-router-dom"; 
import zurichLogo from "../assets/zig.png"; 

const HeaderComponent = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    {/* Zurich Logo with Name */}
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img 
                            src={zurichLogo} 
                            alt="Zurich Insurance Logo" 
                            style={{ width: "220px", height: "40px", marginRight: "10px" }} 
                        />
                        
                    </Link> 
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;
