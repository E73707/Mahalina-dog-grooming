import react from "react";
import mail from "../../img/mail.svg";
import phone from "../../img/phone.svg";
import socials from "../../img/social.svg";

import "../../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-header">
          <h1>Contact Us</h1>
          <p>
            Have a question or want to book an appointment? Contact us today!
          </p>
        </div>
        <div className="footer-content-contact">
          <div className="footer-content-contact-info">
            <img className="contact-logo" src={mail}></img>
            <h2>Email</h2>
            <p>
              For any inquiries or appointments, feel free to reach out to us
              via Email.
            </p>
            <p>555-555-5555</p>
          </div>
          <div className="footer-content-contact-info">
            <img className="contact-logo" src={phone}></img>
            <h2>Phone</h2>
            <p>We look forward to pampering your furry friend!</p>
            <p>0000000000</p>
          </div>
          <div className="footer-content-contact-info">
            <img className="contact-logo" src={socials}></img>
            <h2>Socials</h2>
            <p>
              Follow us on social media for cute dog grooming pictures and
              updates.
            </p>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
    </div>
  );
}
