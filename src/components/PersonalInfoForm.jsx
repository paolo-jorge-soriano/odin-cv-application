export default function PersonalInfoForm() {
  return (
    <form className="personal-info-form">
      <label htmlFor="full-name">Full Name:</label>
      <input
        type="text"
        id="full-name"
        name="full-name"
        placeholder="John Doe"
      />

      <label htmlFor="professional-title">Professional Title:</label>
      <input
        type="text"
        id="professional-title"
        name="professional-title"
        placeholder="Web Developer"
      />

      <label htmlFor="phone-number">Phone Number:</label>
      <input
        type="text"
        id="phone-number"
        name="phone-number"
        placeholder="0912-345-6789"
      />

      <label htmlFor="email-address">Email Adress:</label>
      <input
        type="email"
        id="email-address"
        name="email-address"
        placeholder="johndoe@email.com"
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Los Angeles, CA"
      />
    </form>
  );
}
