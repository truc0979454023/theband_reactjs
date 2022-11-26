import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="#!">
          <AiFillFacebook />
        </a>
        <a href="#!">
          <AiOutlineInstagram />
        </a>
        <a href="#!">
          <FaLinkedinIn />
        </a>
        <a href="#!">
          <BsTwitter />
        </a>
        <a href="#!">
          <FaPinterestP />
        </a>
        <a href="#!">
          <AiFillYoutube />
        </a>
      </div>
      <p>
        Code by <a href="#!">minhtruc060500</a>
      </p>
    </div>
  );
};

export default Footer;
