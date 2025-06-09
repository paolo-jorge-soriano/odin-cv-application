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

  const [educationList, setEducationList] = useState([]);

  return (
    <>
      <div className="grid-container">
        <div className="form-container">
          <PersonalInfoForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <EducationForm
            educationList={educationList}
            setEducationList={setEducationList}
          />
          <ExperienceForm />
        </div>

        <div className="preview">
          <CV personalInfo={personalInfo} educationList={educationList} />
        </div>
      </div>
    </>
  );
}
