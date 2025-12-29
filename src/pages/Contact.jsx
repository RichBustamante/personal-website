import { useState } from "react";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    const email = "rich.j.bustamante@gmail.com";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="page">
      <h1>Contact</h1>

      <form onSubmit={handleSend} className="contact-form">
        <label>
          Subject
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>

        <label>
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          />
        </label>

        <button type="submit">Send Email</button>
      </form>
    </section>
  );
}
