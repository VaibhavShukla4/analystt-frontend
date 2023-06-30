import React from "react";
import "./index.scss";
import {
  AiOutlineMail,
  AiOutlineClockCircle,
  AiOutlineGift,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  HiOutlinePhone,
  HiOutlineTruck,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { MdOutlineAccountBalance } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <div className="textCenter">
            <h4 className="textAlignment">About Books Online</h4>
            <p className="textAlignment">
              At BooksOnline.com we are working towards bringing our retail
              experience to the web and we strive to uphold this prestige by
              serving our customers better.
            </p>
          </div>
        </div>
        <div className="footer-col">
          <div className="textCenter">
            <h4 className="textAlignment">Support</h4>
            <div className="textAlignmentChild">
              <HiOutlinePhone />
              <span>+91-9876543524</span>
            </div>
            <div className="textAlignmentChild">
              <AiOutlineMail />
              <span>books@booksonline.com</span>
            </div>
            <div className="textAlignmentChild">
              <AiOutlineClockCircle />
              <span>
                9:30&nbsp;AM&nbsp;to&nbsp;6:30&nbsp;PM&nbsp; (Mon-Sat){" "}
              </span>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <div className="textCenter">
            <h4 className="textAlignment">More Services</h4>
            <div className="textAlignmentChild">
              <AiOutlineGift />
              <span>E-Gift Cards</span>
            </div>
            <div className="textAlignmentChild">
              <MdOutlineAccountBalance />
              <span>Check E-Gift Card Balance</span>
            </div>
            <div className="textAlignmentChild">
              <HiOutlineTruck />
              <span>Track your Order</span>
            </div>
            <div className="textAlignmentChild">
              <HiOutlineLocationMarker />
              <span>Retail Stores</span>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <div className="textCenter">
            <h4 className="textAlignment">Social Media</h4>
            <div className="textAlignmentChild">
              <AiOutlineLinkedin className="linkedin" />
              <span>Linkedin</span>
            </div>
            <div className="textAlignmentChild">
              <AiOutlineFacebook className="facebook" />
              <span>Facebook</span>
            </div>
            <div className="textAlignmentChild">
              <AiOutlineInstagram className="instagram" />
              <span>Instagram</span>
            </div>
            <div className="textAlignmentChild">
              <AiOutlineTwitter className="twitter" />
              <span>Twitter</span>
            </div>
          </div>
        </div>
      </div>
      <b className="medium-device">&copy; 2023 Books. All rights reserved.</b>
    </footer>
  );
};

export default Footer;
