import React from "react";
import "../../styles/Testimonials.css";
import dog1 from "../../img/cute.jpg";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials-header">
        <h1>Testimonials</h1>
        <p>
          read what our customers have to say about the services provided by
          Fresh Furever!!
        </p>
      </div>

      <div className="testimonials-container">
        <div className="testimonial">
          <div className="testimonial-background-card"></div>
          <div className="testimonial-card">
            <div className="testimonial-author">
              <img className="testimonial-image" src={dog1} alt={dog1}></img>
              <p className="testimonial-author-name">Jane Doe</p>
            </div>

            <p className="testimonial-text">
              "I was so impressed with the grooming services provided by Fresh
              Fur Ever. My dog looks amazing and smells great!"
            </p>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-background-card"></div>
          <div className="testimonial-card">
            <div className="testimonial-author">
              <img className="testimonial-image" src={dog1} alt={dog1}></img>
              <p className="testimonial-author-name">Jane Doe</p>
            </div>

            <p className="testimonial-text">
              "I was so impressed with the grooming services provided by Fresh
              Fur Ever. My dog looks amazing and smells great!"
            </p>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-background-card"></div>
          <div className="testimonial-card">
            <div className="testimonial-author">
              <img className="testimonial-image" src={dog1} alt={dog1}></img>
              <p className="testimonial-author-name">Jane Doe</p>
            </div>

            <p className="testimonial-text">
              "I was so impressed with the grooming services provided by Fresh
              Fur Ever. My dog looks amazing and smells great!"
            </p>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-background-card"></div>
          <div className="testimonial-card">
            <div className="testimonial-author">
              <img className="testimonial-image" src={dog1} alt={dog1}></img>
              <p className="testimonial-author-name">Jane Doe</p>
            </div>

            <p className="testimonial-text">
              "I was so impressed with the grooming services provided by Fresh
              Fur Ever. My dog looks amazing and smells great!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
