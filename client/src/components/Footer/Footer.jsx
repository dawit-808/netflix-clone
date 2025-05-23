import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="container netflix-footer text-muted pt-4 pb-5">
        {/* contact */}
        <p className="footer-top-text">
          Questions? Call <a href="tel:+251 922090582">+251 922090582</a>
        </p>

        {/* more links */}
        <div className="row">
          <div className="col-6 col-md-3">
            <ul className="list-unstyled">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Speed Test</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Ways to Watch</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
              <li>
                <a href="#">Only on Netflix</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled">
              <li>
                <a href="#">Media Center</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* language selection */}
        <select
          className="form-select bg-dark text-light footer-lang-select"
          style={{ width: "150px" }}
        >
          <option>English</option>
          <option>Amharic</option>
        </select>

        {/* copyright */}
        <p className="mt-3 text-light mb-0 small">
          &copy; 2025 Netflix Clone by Dawit Tesfaye
        </p>
      </footer>
    </>
  );
}

export default Footer;
