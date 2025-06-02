import "../styles/PersonalInfoForm.css";

export default function PersonalInfoForm() {
  return (
    <div className="personal-info-container">
      <h1>Personal Information</h1>
      <form>
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="Full Name"
        />

        <input
          type="text"
          id="job-title"
          name="job-title"
          placeholder="Job Title"
        />

        <input
          type="text"
          id="phone-number"
          name="phone-number"
          placeholder="Phone Number"
        />

        <input
          type="email"
          id="email-address"
          name="email-address"
          placeholder="Email Address"
        />

        <input
          type="text"
          id="location"
          name="location"
          placeholder="Location"
        />
      </form>
    </div>
  );
}
