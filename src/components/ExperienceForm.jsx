import "../styles/form.css";

export default function ExperienceForm() {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <form>
        <input
          type="text"
          id="job-title"
          name="job-title"
          placeholder="Job Title"
        />
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company Name"
        />
        <input
          type="text"
          id="experience-start-date"
          name="experience-sstart-date"
          placeholder="Start Date"
        />
        <input
          type="text"
          id="experience-send-date"
          name="experience-send-date"
          placeholder="End Date"
        />
        <textarea
          id="job-description"
          name="job-description"
          placeholder="Job Description"
          rows="7"
        ></textarea>

        <button type="button" className="btn-add-experience">
          Add Experience
        </button>
      </form>
    </div>
  );
}
