import "../styles/EducationForm.css";

export default function EducationForm() {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <form>
        <input type="text" id="school" name="school" placeholder="School" />
        <input type="text" id="degree" name="degree" placeholder="Degree" />
        <input
          type="text"
          id="start-date"
          name="start-date"
          placeholder="Start Date"
        />
        <input
          type="text"
          id="end-date"
          name="end-date"
          placeholder="End Date"
        />

        <button type="button">Add Education</button>
      </form>
    </div>
  );
}
