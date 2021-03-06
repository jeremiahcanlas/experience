import React, { Fragment } from "react";
import Perks from "./Perks";
import Button from "./button/Button";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Footer = ({ path }) => {
  const year = new Date();

  return (
    <div
      className="footer"
      style={{ scrollSnapAlign: path === "/price" && "none" }}
    >
      <div
        className="footer-black"
        style={{
          display: path === "/checkout" ? "none" : path === "/perks" && "none",
        }}
      >
        {path === "/price" ? (
          <Perks footer />
        ) : (
          <Fragment>
            <div className="content">
              <Fade bottom duration={1000} delay={500}>
                <h1 className="fancy">
                  GET <span>EXP.RALLY</span> NOW
                </h1>
              </Fade>
              <Fade bottom duration={1000} delay={1000}>
                <p>Purchase and download the app</p>
              </Fade>
            </div>
            <div className="footer-btn">
              <Link to="/price">
                <Button name={"try it now"} duration={1000} delay={1500} />
              </Link>
            </div>
          </Fragment>
        )}
      </div>
      <div className="footer-purple">
        <Fade left duration={1000} delay={500}>
          <div>
            <i className="fa fa-envelope"></i>
            <p>SUPPORT@EXPERIENCERALLY.COM</p>
          </div>
        </Fade>
        <div style={{ textAlign: "center" }}>
          <Fade duration={1000} delay={700}>
            <h1 className="fancy">EXP.RALLY</h1>
          </Fade>
          <Fade duration={1000} delay={1200}>
            <p>
              {" "}
              {year.getFullYear()} &copy; By yours truly, Jeremiah Canlas 🌶️
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Footer;
