import { useState } from "react";
import "../styles/form.css";

export default function EducationForm({ educationList, setEducationList }) {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleAddEducation = () => {
    if (
      !education.school ||
      !education.degree ||
      !education.startDate ||
      !education.endDate
    ) {
      alert("Please fill out all fields.");
      return;
    }

    setEducationList((data) => [...data, education]);
    setEducation({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleDeleteEducation = (indexToDelete) => {
    setEducationList((data) =>
      data.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="education-container">
      <h1>Education</h1>

      {educationList.length > 0 && (
        <div className="education-preview">
          {educationList.map((edu, index) => (
            <div key={index} className="education-preview-card">
              <h3>{edu.school}</h3>
              <button
                type="button"
                className="btn-delete"
                onClick={() => handleDeleteEducation(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <form>
        <input
          type="text"
          name="school"
          placeholder="School"
          value={education.school}
          onChange={handleChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={education.degree}
          onChange={handleChange}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start Date"
          value={education.startDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End Date"
          value={education.endDate}
          onChange={handleChange}
        />

        <button
          type="button"
          className="btn-add-education"
          onClick={handleAddEducation}
        >
          Add Education
        </button>
      </form>
    </div>
  );
}
