import React from "react";
import "../../styles/intro.css";

export default function IntroWrapper() {
  return (
    <div className="intro-wrapper">
      <h1 className="main-header">Professional Mobile Dog Grooming Services</h1>
      <p className="intro-text">
        Welcome to Fresh Fur Ever! We bring the salon to your doorstep with our
        convenient and stress-free mobile dog grooming services. Your furry
        friend deserves the best pampering experience without leaving the
        comfort of their home.
      </p>
      <div className="intro-buttons">
        <a id="book-now-intro" className="selector-intro" href="#book-now">
          Book now
        </a>
        <a id="learn-more-intro" className="selector-intro" href="#learn-more">
          Learn more
        </a>
      </div>
    </div>
  );
}
