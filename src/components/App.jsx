import { useState } from "react";
import "../styles/App.css";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import CV from "./CV";

export default function App() {
  return (
    <>
      <div className="grid-container">
        <div className="form-container">
          <PersonalInfoForm />
          <EducationForm />
          <ExperienceForm />
        </div>

        <div className="preview">
          <CV />
        </div>
      </div>
    </>
  );
}
