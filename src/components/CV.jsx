import "../styles/CV.css";
import phoneIcon from "../assets/phone-icon.svg";
import emailIcon from "../assets/email-icon.svg";
import locationIcon from "../assets/location-icon.svg";

export default function CV() {
  return (
    <div className="cv-container">
      <div className="cv-personal-info">
        <h1>John Doe</h1>

        <div className="details-container">
          <div className="details">
            <img src={phoneIcon} alt="phone-icon" />
            <p>0912 345 6789</p>
          </div>

          <div className="details">
            <img src={emailIcon} alt="email-icon" />
            <p>john-doe@email.com</p>
          </div>

          <div className="details">
            <img src={locationIcon} alt="location-icon" />
            <p>Los Angeles, CA</p>
          </div>
        </div>
      </div>

      <div className="cv-education">
        <div className="cv-header">
          <h2>Education</h2>
        </div>
      </div>

      <div className="cv-experience">
        <div className="cv-header">
          <h2>Experience</h2>
        </div>
      </div>
    </div>
  );
}
