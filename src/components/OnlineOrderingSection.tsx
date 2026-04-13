import "./OnlineOrderingSection.css";

export default function OnlineOrderingSection() {
  return (
    <section id="order" className="order-section">
      <div className="container">
        <div className="order-card animate-fade-in">
          <div className="order-content">
            <h2>Order Online for Delivery</h2>
            <p>
              Craving our delicious food? Get it delivered right to your
              doorstep hot and fresh.
            </p>

            <div className="delivery-partners">
              <a href="#" className="partner-btn swiggy">
                <span className="partner-icon">🍱</span> Order on Swiggy
              </a>
              <a
                href="https://link.zomato.com/xqzv/rshare?id=13411381630563f16"
                className="partner-btn zomato"
              >
                <span className="partner-icon">🛵</span> Order on Zomato
              </a>
            </div>

            <p className="order-note">
              Or call us directly for takeaway: <strong>+91 98765 43210</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
