import React, { useEffect, useState } from "react";
import Doctor from "../Assets/img/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faAngleUp,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <div>
            <h2 className="text-title">Professional Family Health Care</h2>
            <p className="text-descritpion">
              HEALTHCARE WITHOUT BOUNDARIES INNOVATION WITHOUT LIMITS
            </p>
            <div className="hero-logos">
              <FontAwesomeIcon icon={faHeartPulse} size="3x" />
              <FontAwesomeIcon icon={faHeartPulse} size="3x" />
              <FontAwesomeIcon icon={faHeartPulse} size="3x" />
            </div>
          </div>
          <div className="hero-image-section">
            <img className="hero-image1" src={Doctor} alt="Doctor" />
          </div>
          {/* <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Receive Patients</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Expert Doctors</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div> */}
        </div>

        <div className="hero-text-bubble-container">
          <div className="hero-text-bubble">
            <h3>OPENING HOURS</h3>
            <p>Weekdays: 10:00 AM to 6:00 PM</p>
            <p>Weekends: 8:00 AM to 8:00 PM</p>
            <button>Contact Us</button>
          </div>
          <div className="hero-text-bubble">
            <h3>DO YOU WANT TO MAKE AN APPOINTMENT?</h3>
            <button
               className="text-appointment-btn"
               type="button"
               onClick={handleBookAppointmentClick}
            >Book Now</button>
          </div>
          <div className="hero-text-bubble">
            <h4>1-800-600-380</h4>
            <h3>EMERGENCY SERVICE</h3>
            <button>See More</button>
          </div>
        </div>

        {/* <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div> */}
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
