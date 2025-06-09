import { useState } from "react";
import "../styles/form.css";

export default function ExperienceForm({ experienceList, setExperienceList }) {
  const [experience, setExperience] = useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    jobDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleAddExperience = () => {
    if (
      !experience.jobTitle ||
      !experience.company ||
      !experience.startDate ||
      !experience.endDate ||
      !experience.jobDescription
    ) {
      alert("Please fill out fields.");
      return;
    }

    setExperienceList((data) => [...data, experience]);
    setExperience({
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
    });
  };

  const handleDeleteExperience = (indexToDelete) => {
    setExperienceList((data) =>
      data.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="experience-container">
      <h1>Experience</h1>

      {experienceList.length > 0 && (
        <div className="experience-preview">
          {experienceList.map((exp, index) => (
            <div key={index} className="experience-preview-card">
              <div>
                <h3>{exp.jobTitle}</h3>
                <p>{exp.company}</p>
              </div>
              <button
                type="button"
                className="btn-delete"
                onClick={() => handleDeleteExperience(index)}
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
          name="jobTitle"
          placeholder="Job Title"
          value={experience.jobTitle}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={experience.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start Date"
          value={experience.startDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End Date"
          value={experience.endDate}
          onChange={handleChange}
        />
        <textarea
          name="jobDescription"
          placeholder="Job Description"
          rows="7"
          value={experience.jobDescription}
          onChange={handleChange}
        ></textarea>

        <button
          type="button"
          className="btn-add-experience"
          onClick={handleAddExperience}
        >
          Add Experience
        </button>
      </form>
    </div>
  );
}
