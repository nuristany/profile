import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jywdeda",
        "template_5wpqzil",
        formData,
        "0k7FDGarIjAkQCG-K"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-title">
        <p>Connect with me</p>
        <h1 style={{ color: "black", marginTop: "1rem" }}>Get in touch with</h1>
        <p>I`d love to hear from you! if you have anyquestion, comment or feedback please use the form <br/>below</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="contact-input-container">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="contact-text-input">
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
