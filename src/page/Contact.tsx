import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage(""); // Reset status message

    emailjs
      .send(
        "service_aa7qh01",
        "template_atulhim4325b",
        {
          from_email: formData.email,
          // reply_to: formData.email,
          subject: formData.subject,
          from_name: formData.name,
          message: formData.message,
        },
        "7kSQo4GbZEO7X0ISn"
      )
      .then(
        (response:any) => {
          setStatusMessage("Message sent successfully!");
          setSending(false);
          setFormData({ email: "", name: "", message: "", subject: "" }); // Reset form
          console.log(response);
        },
        (error:any) => {
          setStatusMessage("Oops! unable to send message...");
          setSending(false);
          console.log(error);
        }
      );
  };

  return (
    <main id="contact" className="contact_form">
      <form id="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="subject"
          name="subject"
          placeholder="Your Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className="cv" type="submit" id="submitbtn">
          {sending ? "Sending... " : "Send Message"}
        </button>
      </form>
      {statusMessage && (
        <div id="responseMessage">
          <p>{statusMessage}</p>
        </div>
      )}
    </main>
  );
};
