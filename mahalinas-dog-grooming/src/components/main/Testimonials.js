import React from "react";
import "../../styles/Testimonials.css";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>
            "I was so impressed with the grooming services provided by Fresh Fur
            Ever. My dog looks amazing and smells great!"
          </p>
          <p className="testimonial-author">- Jane Doe</p>
        </div>
        <div className="testimonial">
          <p>
            "The groomers were very professional and friendly. They did an
            excellent job grooming my dog."
          </p>
          <p className="testimonial-author">- John Smith</p>
        </div>
        <div className="testimonial">
          <p>
            "I highly recommend Fresh Fur Ever for anyone looking for a
            convenient and stress-free grooming experience for their dog."
          </p>
          <p className="testimonial-author">- Mary Johnson</p>
        </div>
      </div>
    </div>
  );
}
