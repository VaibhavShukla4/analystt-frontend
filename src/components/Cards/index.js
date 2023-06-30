import React, { useState } from "react";
import "./index.scss";
import Image from "../../assets/84-1.jpg";
import Popup from "../Popup";
const Cards = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-image">
          <img
            src={Image}
            alt="book-image"
            className="book-image"
            onClick={() => setShowPopup(true)}
          />
        </div>
        <h3>Title</h3>
        <h4>Author</h4>
        <p>Price</p>
      </div>
      {showPopup ? <Popup setShowPopup={setShowPopup} /> : null}
    </React.Fragment>
  );
};

export default Cards;
