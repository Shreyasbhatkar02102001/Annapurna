

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome } from "react-icons/fa"; // Example icon from react-icons

const Navbar = (props) => {
  const [loggedIn, setLoggedIn] = useState();
  const [cust, setCust] = useState();
  const [ven, setVen] = useState();
  const [adm, setAdm] = useState();

  useEffect(() => {
    setLoggedIn(props.signIn);
    setCust(JSON.parse(sessionStorage.getItem("customer")));
    setVen(JSON.parse(sessionStorage.getItem("vendor")));
    setAdm(JSON.parse(sessionStorage.getItem("admin")));
  }, [props.signIn]);

  const logout = () => {
    sessionStorage.clear();
    props.signOut(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          
          <img src="https://static.vecteezy.com/system/resources/previews/035/888/724/large_2x/indian-woman-in-a-red-saree-cooking-food-in-a-kitchen-free-png.png" alt="" width={80} height={60} /> 𝐀𝐧𝐧𝐚𝐏𝐮𝐫𝐧𝐚
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {loggedIn ? (
              
              <>
                
                {cust != null && <li className="nav-item"><NavLink className="nav-link" to="/customer"><button className="btn btn-secondary">{cust.firstName}</button></NavLink></li>
                }
                
                {ven != null && <li className="nav-item"><NavLink className="nav-link" to="/vendor"><button className="btn btn-secondary">{ven.firstName}</button></NavLink></li>}
                {adm != null && <li className="nav-item"><NavLink className="nav-link" to="/admin"><button className="btn btn-secondary">{adm.firstName}</button></NavLink></li>}
                <li className="nav-item"><NavLink className="nav-link" onClick={logout} to="/"><button className="btn btn-danger">Logout</button></NavLink></li>
              </>
            ) : (
              <>
                <li className="nav-item"><NavLink className="nav-link" to="/"><button className="btn btn-primary">Home</button></NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/about-us"><button className="btn btn-primary">About Us</button></NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/contact-us"><button className="btn btn-primary">Contact Us</button></NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/sign-in"><button className="btn btn-primary">Sign in</button></NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/sign-up"><button className="btn btn-primary">Sign Up</button></NavLink></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

