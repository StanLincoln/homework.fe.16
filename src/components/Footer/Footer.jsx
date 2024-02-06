import React, { useState } from "react";
import "./footer.scss";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setError("Email is required");
      return;
    }

    setSub("Successful");
    setEmail("");
    setError("");
  };
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <div className="footer__logo">
            <a href="#">
              <h3>Funiro.</h3>
            </a>
            <p>
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
          <div className="footer__links">
            <h4>Links</h4>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__links">
            <h4>Help</h4>
            <nav>
              <ul>
                <li>
                  <a href="#">Payment Options</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Privacy Policies</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__letter">
            <h4>Newsletter</h4>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} required
            />
            <a onClick={handleSubscribe} href="">
              {sub ? "Succsessful" : "SUBSCRIBE"}
            </a>
          </div>
        </div>
        <div className="footer__rights">
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
