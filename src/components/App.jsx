import { useState } from "react";
import "../styles/App.css";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";

export default function App() {
  return (
    <>
      <div className="form-container">
        <PersonalInfoForm />
        <EducationForm />
      </div>
    </>
  );
}
