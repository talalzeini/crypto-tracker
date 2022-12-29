import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="mt-5">
      <div className="d-{block} m-auto text-center">
        <h5>COVID-19 Tracker</h5>
        <div className="footer-stuff">
          <a href="./html/charts.html">Charts</a>
          <a href="https://talalzeini.com/">Portfolio</a>
          <a href="https://telzeini.web.app">Tree</a>
        </div>
        <p className="copyright-text">Copyright © 2022 Talal El Zeini</p>
      </div>
    </footer>
  );
}

export default Footer;
