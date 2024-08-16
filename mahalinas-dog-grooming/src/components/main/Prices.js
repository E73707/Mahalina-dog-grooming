import React from "react";

import "../../styles/Prices.css";

export default function Prices() {
  return (
    <div className="prices-container">
      <div className="prices-header">
        <h1>Our Services</h1>
      </div>

      <div className="prices-card-wrapper">
        <div className="prices-card" id="price-1">
          <div className="prices-card-header">
            <h3>Basic Grooming</h3>
            <h1>$50</h1>
            <p>$600 per year</p>
          </div>
          <div className="prices-card-body">
            <div className="prices-card-text">
              <p>Brush and Bath</p>
              <p>Ear Cleaning</p>
              <p>Nail Trimming</p>
            </div>
          </div>
        </div>
        <div className="prices-card" id="price-2">
          <div className="prices-card-header">
            <h3>Deluxe Grooming</h3>
            <h1>$80</h1>
            <p>$950 per year</p>
          </div>
          <div className="prices-card-body">
            <div className="prices-card-text">
              <p>All basic grooming services</p>
              <p>Haircut and style</p>
              <p>Teeth brushing</p>
              <p>Anal gland expression</p>
            </div>
          </div>
        </div>
        <div className="prices-card" id="price-3">
          <div className="prices-card-header">
            <h3>Pampered Pooch Package</h3>
            <h1>$120</h1>
            <p>$1400 per year</p>
          </div>
          <div className="prices-card-body">
            <div className="prices-card-text">
              <p>All Deluxe Grooming services</p>
              <p>Specialty Shampoo & Conditioner</p>
              <p>Pawdicure (Paw Care)</p>
              <p>Anal gland expression</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
