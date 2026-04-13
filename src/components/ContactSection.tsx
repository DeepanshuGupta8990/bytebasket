"use client";

import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="badge badge-light">Get In Touch</span>
            <h2>We'd Love to Hear From You</h2>
            <p>
              Whether you have a custom cake request, catering inquiry, or just
              want to tell us how much you loved your burger!
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 8955784975</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">✉️</div>
                <div>
                  <h4>Email Us</h4>
                  <p>deepanshugupta899@gmail.com</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">💬</div>
                <div>
                  <h4>Social Media</h4>
                  <p>@ByteBasketCakes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
