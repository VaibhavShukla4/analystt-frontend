import React, { useState } from "react";
import "./index.scss";
import Logo from "../../assets/4851043.png";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <nav>
        <div className="nav-row">
          <div className="nav-col-side">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="nav-col">
            <div className="searchBox">
              <input />
              <select>
                <option>Author</option>
                <option>Company</option>
                <option>Price</option>
              </select>
              <div className="search">
                <button className="search-button">
                  <AiOutlineSearch fontSize={30} />
                </button>
              </div>
            </div>
          </div>
          <div className="nav-col-side">
            <button className="login-button">Login</button>
            <button className="toggle-menu" onClick={() => setShow(!show)}>
              {show ? (
                <AiOutlineClose className="menu" />
              ) : (
                <AiOutlineMenu className="menu" />
              )}
            </button>
          </div>
        </div>
        {show ? (
          <div className="navbar-medium">
            <div className="center">
              <div className="searchBox-medium">
                <input />
                <div className="search-medium">
                  <button className="search-button">
                    <AiOutlineSearch fontSize={30} />
                  </button>
                </div>
              </div>
              <div className="select-login">
                <select className="select">
                  <option>Author</option>
                  <option>Company</option>
                  <option>Price</option>
                </select>
                <button className="login-button-medium">Login</button>
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
