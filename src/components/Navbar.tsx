"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-content">
        <Link href="/" className="logo">
          ByteBasket <span>Cakes</span>
        </Link>

        {/* Mobile menu toggle */}
        <button 
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link href="#home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="#menu" onClick={() => setMenuOpen(false)}>Our Menu</Link></li>
          <li><Link href="#about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link href="#location" onClick={() => setMenuOpen(false)}>Locations</Link></li>
          <li><Link href="#order" onClick={() => setMenuOpen(false)} className="nav-btn">Order Now</Link></li>
        </ul>
      </div>
    </nav>
  );
}
