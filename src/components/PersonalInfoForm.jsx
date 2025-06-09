import "../styles/form.css";

export default function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div className="personal-info-container">
      <h1>Personal Information</h1>
      <form>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={personalInfo.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={personalInfo.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={personalInfo.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={personalInfo.location}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
