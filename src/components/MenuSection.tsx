"use client";

import { useState } from "react";
import "./MenuSection.css";

const menuItems = [
  {
    id: 1,
    name: "Premium Cakes",
    icon: "🎂",
    description:
      "Freshly baked customized cakes for all your special occasions.",
  },
  {
    id: 2,
    name: "Juicy Burgers",
    icon: "🍔",
    description:
      "Loaded with flavors, our burgers are perfectly grilled and satisfying.",
  },
  {
    id: 3,
    name: "Hot Pizzas",
    icon: "🍕",
    description: "Cheesy, crispy, and baked to perfection with fresh toppings.",
  },
  {
    id: 4,
    name: "Sandwiches",
    icon: "🥪",
    description: "Healthy and hearty sandwiches made with premium ingredients.",
  },
  {
    id: 5,
    name: "Thick Shakes",
    icon: "🥤",
    description: "Rich, creamy, and irresistible shakes in multiple flavors.",
  },
  {
    id: 6,
    name: "Cold Coffee",
    icon: "🧋",
    description: "The perfect blend to refresh your mind and beat the heat.",
  },
];

const cakeMenu = [
  { name: "Black Marble Cake", original: 500 },
  { name: "Eggless Pineapple Cake", original: 480 },
  { name: "Double Chocolate Cake", original: 299 },
  { name: "Eggless Strawberry Cake", original: 480 },
  { name: "White Marble Cake", original: 520 },
  { name: "Mix Choco Chips Cake", original: 560 },
  { name: "Royal Chocolate Cake", original: 520 },
  { name: "Truffle Cake", original: 500 },
  { name: "Vanilla Cake", original: 560 },
  { name: "Red Velvet Cake", original: 660 },
  { name: "Choco Chips Cake", original: 560 },
  { name: "Cassata Cake", original: 660 },
  { name: "Butterscotch Cake", original: 480 },
  { name: "Black Forest Cake", original: 410 },
];

export default function MenuSection() {
  const [showCakeModal, setShowCakeModal] = useState(false);

  const handleCardClick = (id: number) => {
    if (id === 1) {
      setShowCakeModal(true);
    }
  };

  return (
    <>
      <section id="menu" className="menu-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Our Menu</span>
            <h2>Explore Our Delicious Offerings</h2>
            <p>
              From sweet to savory, we have something to satisfy every craving.
            </p>
          </div>

          <div className="menu-grid">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="menu-card animate-fade-in"
                style={{ animationDelay: `${item.id * 0.1}s` }}
                onClick={() => handleCardClick(item.id)}
              >
                <div className="icon-wrapper">{item.icon}</div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {item.id === 1 && (
                  <button className="view-details-btn">View Flavors ➔</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cake Modal */}
      {showCakeModal && (
        <div className="modal-overlay" onClick={() => setShowCakeModal(false)}>
          <div
            className="modal-content animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowCakeModal(false)}
            >
              ×
            </button>
            <div className="modal-header">
              <h2>
                🎂 Cake Menu <span className="cake-weight">(450g)</span>
              </h2>
              <p>Freshly baked and 50% OFF today!</p>
            </div>
            <div className="modal-body">
              <ul className="cake-list">
                {cakeMenu.map((cake, index) => {
                  const discountPrice = Math.round(cake.original / 2);
                  return (
                    <li key={index} className="cake-item">
                      <span className="cake-name">{cake.name}</span>
                      <div className="cake-pricing">
                        <span className="original-price">₹{cake.original}</span>
                        <span className="discount-price">₹{discountPrice}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary w-100"
                onClick={() =>
                  (window.location.href =
                    "https://link.zomato.com/xqzv/rshare?id=13411381630563f16")
                }
              >
                Got it, add to order!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
