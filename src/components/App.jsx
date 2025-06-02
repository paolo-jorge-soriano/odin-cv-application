import { useState } from "react";
import "../styles/App.css";
import PersonalInfoForm from "./PersonalInfoForm";

export default function App() {
  return (
    <>
      <div className="form-container">
        <PersonalInfoForm />
      </div>
    </>
  );
}
