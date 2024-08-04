import React from "react";
import "../../styles/HomeFeatures.css";
import dog from "../../img/dog-2.jpg";

function HomeFeatures() {
  return (
    <div className="home-features">
      <div className="home-features__feature photo">
        <img className="dog" src={dog}></img>
      </div>
      <div className="home-features__feature features-text-wrapper">
        <div className="features-text">
          <div className="features-content">
            <h1>Convenient Service</h1>
            <p>We come to your doorstep, saving you time and hassle.</p>
          </div>
        </div>

        <div className="features-text">
          <div className="features-content">
            <h1>Quality Products</h1>
            <p>We use high-quality, pet-safe products for grooming services.</p>
          </div>
        </div>
        <div className="features-text">
          <div className="features-content">
            <h1>Professional Groomers</h1>
            <p>
              Our groomers are experienced and gentle with all breeds of dogs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFeatures;
