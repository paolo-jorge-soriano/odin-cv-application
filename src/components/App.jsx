import { useState } from "react";
import "../styles/App.css";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import CV from "./CV";

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    location: "",
  });

  return (
    <>
      <div className="grid-container">
        <div className="form-container">
          <PersonalInfoForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <EducationForm />
          <ExperienceForm />
        </div>

        <div className="preview">
          <CV personalInfo={personalInfo} />
        </div>
      </div>
    </>
  );
}
