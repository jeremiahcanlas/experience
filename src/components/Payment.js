import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../utils/img/loadercat.gif";
import Button from "./button/Button";
import Fade from "react-reveal/Fade";

const Payment = ({ tier, getTier, getPath, getCompo }) => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [validName, validateName] = useState(" ");
  const [validEmail, validateEmail] = useState(" ");
  const [valid, setValid] = useState("initial");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    getPath(pathname);
    getCompo("checkout", "white");
    setOrder(Math.floor(Math.random() * 999999));

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const radio = [
    {
      name: "basic",
      color: "#ffcc00",
    },
    {
      name: "advanced",
      color: "#097054",
    },
    {
      name: "pro",
      color: "#cc0000",
    },
  ];
  const handleName = (e) => {
    const name = e.target.value;

    if (name) {
      setName(name);
      validateName("validated");
    } else {
      validateName("fail");
    }
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    const re = /^\w+(@\w+)(\.\w+)$/i;

    if (email.match(re)) {
      setEmail(email);
      validateEmail("validated");
    } else {
      validateEmail("fail");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validName === "validated" && validEmail === "validated") {
      setValid("validated");
      setLoading(true);
    } else {
      validName !== "validated" && validateName("fail");
      validEmail !== "validated" && validateEmail("fail");
      setValid(false);
    }
  };

  const PaymentForm = () => (
    <div className="payment-form">
      <h1 className="fancy">PAYMENT</h1>
      <form action="submit" noValidate onSubmit={(e) => handleSubmit(e)}>
        <div className="tiers">
          <p>1. Select your plan</p>
          <div className="labels">
            {radio.map((r) => (
              <label
                htmlFor={r.name}
                style={{ color: r.color }}
                key={radio.indexOf(r)}
              >
                <i
                  className="fa fa-circle"
                  style={{
                    display: tier === r.name ? "inline-block" : "none",
                  }}
                />
                <input
                  type="radio"
                  name="plan"
                  style={{
                    display: tier === r.name ? "none" : "inline-block",
                  }}
                  value={r.name}
                  id={r.name}
                  onChange={(e) => getTier(e.target.value)}
                  checked={tier === r.name}
                />
                {r.name.toUpperCase()}
              </label>
            ))}
          </div>
        </div>

        <div className="credentials">
          <div
            className="billing"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>2. Billing Information</p>

            <span
              style={{
                display: "inline-block",
              }}
            >
              <label htmlFor="name" style={{ display: "block" }}>
                FULL NAME *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className={validName === "fail" ? "invalid" : undefined}
                onChange={(e) => handleName(e)}
              />
              <p
                style={{
                  display: validName !== "fail" ? "none" : "block",
                  margin: 0,
                  fontSize: "0.5em",
                }}
              >
                PLEASE ENTER A VALID NAME
              </p>
            </span>
            <span
              style={{
                display: "inline-block",
              }}
            >
              <label htmlFor="email" style={{ display: "block" }}>
                EMAIL *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={validEmail === "fail" ? "invalid" : undefined}
                onChange={(e) => handleEmail(e)}
                required
              />
              <p
                style={{
                  display: validEmail !== "fail" ? "none" : "block",
                  margin: 0,
                  fontSize: "0.5em",
                }}
              >
                PLEASE ENTER A VALID EMAIL
              </p>
            </span>

            <span
              style={{
                display: "inline-block",
              }}
            >
              <label htmlFor="address" style={{ display: "block" }}>
                BILLING ADDRESS
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Sample Only"
                disabled
              />
            </span>

            <div className="split">
              <span
                style={{
                  display: "inline-block",
                }}
              >
                <label htmlFor="city" style={{ display: "block" }}>
                  CITY
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Sample Only"
                  id="city"
                  disabled
                />
              </span>

              <span
                style={{
                  display: "inline-block",
                }}
              >
                <label htmlFor="postal" style={{ display: "block" }}>
                  POSTAL CODE
                </label>
                <input
                  type="text"
                  name="postal"
                  id="postal"
                  placeholder=" A1A 1A1"
                  disabled
                />
              </span>
            </div>
          </div>

          <div
            className="credit"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>3. Credit Information</p>
            <span
              style={{
                display: "inline-block",
              }}
            >
              <label htmlFor="card-name" style={{ display: "block" }}>
                CARDHOLDER'S NAME
              </label>
              <input
                type="text"
                name="card-name"
                id="card-name"
                placeholder="Sample Only"
                disabled
              />
            </span>

            <span
              style={{
                display: "inline-block",
              }}
            >
              <label htmlFor="card-number" style={{ display: "block" }}>
                CARD NUMBER
              </label>
              <input
                type="text"
                name="card-number"
                placeholder="Sample Only"
                id="card-number"
                disabled
              />
            </span>

            <div className="split">
              <span
                style={{
                  display: "inline-block",
                }}
              >
                <label htmlFor="expiry-month" style={{ display: "block" }}>
                  EXP MONTH
                </label>
                <input
                  type="text"
                  name="expiry-month"
                  id="expiry-month"
                  placeholder=" MM/YY"
                  disabled
                />
              </span>
              <span
                style={{
                  display: "inline-block",
                }}
              >
                <label htmlFor="expiry-year" style={{ display: "block" }}>
                  EXP YEAR
                </label>
                <input
                  type="text"
                  name="expiry-year"
                  id="expiry-year"
                  placeholder=" MM/YY"
                  disabled
                />
              </span>
            </div>

            <span
              style={{
                display: "inline-block",
              }}
            >
              <label htmlFor="cvv" style={{ display: "block" }}>
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                placeholder="Sample Only"
                id="cvv"
                disabled
              />
            </span>
          </div>
        </div>

        <p className="terms">
          By continuing, I acknowledge that I’ve read and agree to the{" "}
          <span>Terms of Service</span> & <span>Privacy Policy</span>.
        </p>
        <button className="payment-btn" type="submit">
          <Button
            name="Checkout"
            style={{
              color: "black",
              border: "1px solid black",
            }}
          />
        </button>
      </form>
    </div>
  );

  const loader = (text) => (
    <Fade>
      <div className="loader">
        <div className="loader-content">
          <img src={Loader} alt="nyancat" />
          <Fade cascade bottom>
            <h2>{text}</h2>
          </Fade>
        </div>
      </div>
    </Fade>
  );

  const confirmation = () => (
    <div className="confirmation-page">
      <Fade bottom duration={1000}>
        <i className="fa fa-car"></i>
        <h1>
          Thank you,{" "}
          <span>{name.split(" ").slice(0, 1).join(" ").toLowerCase()}</span> !
        </h1>
        <div>
          <p>Thank you for subscribing.</p>
          <p>
            Please find your <b>order details</b> below:
          </p>
        </div>
        <div className="order-details">
          <p>
            <b>Order Number: </b>
            {order}
          </p>
          <p>
            <b>Membership:</b> {tier.toUpperCase()}
          </p>
          <p>
            <b>Start date:</b>{" "}
            {new Date().toLocaleString("en-US", { dateStyle: "long" })}
          </p>
          <p>
            We've emailed a copy of this invoice to <b>{email}</b>
          </p>
        </div>
        <a
          href="https://jeremiahcanlas.com"
          rel="noreferrer"
          target="_blank"
          className="confirm-btn"
        >
          <Button
            name="download app"
            style={{
              color: "black",
              borderColor: "black",
            }}
          />
        </a>
      </Fade>
    </div>
  );

  return valid === "validated" ? (
    <div className="payment">
      {loading ? loader("Processing your order...") : confirmation()}
    </div>
  ) : (
    <div className="payment">
      {loading
        ? loader(`ADDING ${tier.toUpperCase()} MEMBERSHIP...`)
        : PaymentForm()}
    </div>
  );
};

export default Payment;
