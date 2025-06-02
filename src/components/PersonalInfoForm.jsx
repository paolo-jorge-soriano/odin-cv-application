import "../styles/PersonalInfoForm.css";

export default function PersonalInfoForm() {
  return (
    <form className="personal-info-form">
      <h1>Personal Information</h1>

      <div>
        <label htmlFor="full-name">Full Name:</label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="professional-title">Professional Title:</label>
        <input
          type="text"
          id="professional-title"
          name="professional-title"
          placeholder="Web Developer"
        />
      </div>

      <div>
        <label htmlFor="phone-number">Phone Number:</label>
        <input
          type="text"
          id="phone-number"
          name="phone-number"
          placeholder="09123456789"
        />
      </div>

      <div>
        <label htmlFor="email-address">Email Adress:</label>
        <input
          type="email"
          id="email-address"
          name="email-address"
          placeholder="johndoe@email.com"
        />
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Los Angeles, CA"
        />
      </div>
    </form>
  );
}
