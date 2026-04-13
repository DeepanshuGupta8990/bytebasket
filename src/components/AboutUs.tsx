import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section id="about" className="about-section">
      <div className="container about-content">
        <div className="about-image animate-fade-in">
          <div className="img-placeholder">
            <span>🧑‍🍳 Baking with Passion</span>
          </div>
        </div>
        
        <div className="about-text animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="badge">About Us</span>
          <h2>A Local Brand Built on Taste & Trust</h2>
          <p>
            Welcome to <strong>ByteBasket Cakes</strong>, where passion meets perfection. We started as a small neighborhood bakery and have grown into a beloved local food brand, serving up smiles with every order.
          </p>
          <p>
            Whether it's a customized birthday cake, a quick burger fix, or a refreshing cold coffee, we use only the freshest, high-quality ingredients. Our mission is to make quality food accessible and enjoyable for everyone in the community.
          </p>
          
          <div className="features">
            <div className="feature">
              <span className="check">✓</span>
              <span>100% Fresh Ingredients</span>
            </div>
            <div className="feature">
              <span className="check">✓</span>
              <span>Fast & Hygenic Prep</span>
            </div>
            <div className="feature">
              <span className="check">✓</span>
              <span>Locally Owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
