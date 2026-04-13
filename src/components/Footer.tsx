import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link href="/" className="logo">
            ByteBasket <span>Cakes</span>
          </Link>
          <p>Delivering happiness in every bite. From delicious cakes to satisfying burgers, we've got your cravings covered.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="#menu">Menu</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#order">Order Online</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-locations">
          <h3>Our Locations</h3>
          <ul>
            <li>📍 Jaipur</li>
            <li>📍 Sanganer</li>
            <li>📍 Pratap Nagar</li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">📱</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ByteBasket Cakes. All rights reserved.</p>
      </div>
    </footer>
  );
}
