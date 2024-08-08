import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../../styles/offers.css";
import dog from "../../img/dog-2.jpg";

export default function Offers() {
  return (
    <div className="offers-home">
      <div className="offers-container">
        <div className="offers-container-width">
          <div className="offers-container1 grid-1">
            <div classname="offers-left">
              <div className="offers-text">
                <h1>Special Offers</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </div>
            </div>
            <div className="offers-right">
              <div id="card1" className="offers-card rotate-left">
                <h1 className="offers-card-heading">First Time Customer</h1>
                <p className="offers-card-text">
                  Contact us to book a convenient time for your dog's grooming
                  session.
                </p>
                <label className="offers-card-number">01</label>
              </div>
              <div id="card2" className="offers-card rotate-right">
                <h1 className="offers-card-heading">Grooming Session</h1>
                <p className="offers-card-text">
                  Our professional groomers will arrive at your location and
                  provide top-quality grooming services for your dog.
                </p>
                <label className="offers-card-number ">02</label>
              </div>
              <div id="card3" className="offers-card rotate-left">
                <h1 className="offers-card-heading">Relax and Enjoy</h1>
                <p className="offers-card-text">
                  Sit back and relax while we pamper your furry friend with care
                  and attention.
                </p>
                <label className="offers-card-number">03</label>
              </div>
              <div id="card4" className="offers-card rotate-right">
                <h1 className="offers-card-heading">Happy Dog, Happy You</h1>
                <p className="offers-card-text">
                  After the grooming session, your dog will look and feel great,
                  bringing joy to both of you.
                </p>
                <label className="offers-card-number">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
