import React, { useState } from "react";
import "./index.scss";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section>
        <div className="row scroll-bar">
          <div className="col">
            <Cards />
          </div>
          <div className="col">
            <Cards />
          </div>
          <div className="col">
            <Cards />
          </div>
          <div className="col">
            <Cards />
          </div>
          <div className="col">
            <Cards />
          </div>
          <div className="col">
            <Cards />
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
