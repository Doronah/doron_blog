export function ContactPage() {
    return (
      <div>
        <h1>Contact</h1>
        <p>Send us a message!</p>
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
  
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
  
          <label htmlFor="message">Message</label>
          <textarea id="message" />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }