import "../styles/form.css";

export default function EducationForm() {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <form>
        <input type="text" id="school" name="school" placeholder="School" />
        <input type="text" id="degree" name="degree" placeholder="Degree" />
        <input
          type="text"
          id="education-start-date"
          name="education-start-date"
          placeholder="Start Date"
        />
        <input
          type="text"
          id="education-end-date"
          name="education-end-date"
          placeholder="End Date"
        />

        <button type="button" className="btn-add-education">
          Add Education
        </button>
      </form>
    </div>
  );
}
