import "./contact.css";

export function ContactPage() {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>Send us a message!</p>
      <form>
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="message">Message</label>
          <textarea id="message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
