import React from "react";
import Image from "../../assets/84-1.jpg";
import "./index.scss";
import { AiOutlineClose } from "react-icons/ai";
const Popup = ({ setShowPopup }) => {
  return (
    <div className="popup-window">
      <div className="popup-card">
        <div className="popup-container">
          <div className="popup-row-2nd">
            <button className="closed" onClick={() => setShowPopup(false)}>
              <AiOutlineClose className="menu" />
            </button>
          </div>
          <div className="popup-row-1st">
            <div className="popup-col">
              <img src={Image} alt="" className="popup-image" />
            </div>
            <div className="popup-col">
              <h3 className="textAlignment">Title</h3>
              <h4 className="textAlignment">Author</h4>
              <h4 className="textAlignment">Price</h4>
              <h4 className="textAlignment">Rating</h4>
              <h4 className="textAlignment">Description</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="popup-card-medium">
        <div className="popup-container">
          <div className="popup-row-2nd">
            <button
              className="closed-medium"
              onClick={() => setShowPopup(false)}
            >
              <AiOutlineClose className="menu" />
            </button>
          </div>
          <div className="popup-row-1st-medium">
            <div className="popup-col-medium">
              <img src={Image} alt="" className="popup-image-medium" />
            </div>
            <div className="popup-col-medium">
              <h3 className="textAlignment">Title</h3>
              <h4 className="textAlignment">Author</h4>
              <h4 className="textAlignment">Price</h4>
              <h4 className="textAlignment">Rating</h4>
              <h4 className="textAlignment">Description</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
