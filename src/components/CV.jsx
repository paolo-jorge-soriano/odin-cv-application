import "../styles/CV.css";
import phoneIcon from "../assets/phone-icon.svg";
import emailIcon from "../assets/email-icon.svg";
import locationIcon from "../assets/location-icon.svg";

export default function CV({ personalInfo, educationList }) {
  return (
    <div className="cv-container">
      <div className="cv-personal-info">
        <h1>{personalInfo.fullName || "Full Name"}</h1>

        <div className="details-container">
          <div className="details">
            <img src={phoneIcon} alt="phone-icon" />
            <p>{personalInfo.phoneNumber || "Phone Number"}</p>
          </div>

          <div className="details">
            <img src={emailIcon} alt="email-icon" />
            <p>{personalInfo.email || "Email Address"}</p>
          </div>

          <div className="details">
            <img src={locationIcon} alt="location-icon" />
            <p>{personalInfo.location || "Location"}</p>
          </div>
        </div>
      </div>

      <div className="cv-education">
        <div className="cv-header">
          <h2>Education</h2>
        </div>
        <div className="education-content">
          {educationList.length === 0 ? (
            <p>No education added yet.</p>
          ) : (
            educationList.map((edu, index) => (
              <div key={index} className="education-entry">
                <div>
                  <h3>{edu.school}</h3>
                  <p>{edu.degree}</p>
                </div>
                <div>
                  <p>
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </div>
            ))
          )}
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
