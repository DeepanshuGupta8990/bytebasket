import "./LocationSection.css";

const locations = [
  { id: 1, name: "Jaipur Central", type: "Flagship Store", address: "123 Pink City Road, Jaipur, Rajasthan", open: "10 AM - 11 PM" },
  { id: 2, name: "Sanganer", type: "Express Outlet", address: "45 Market Square, Sanganer", open: "11 AM - 10 PM" },
  { id: 3, name: "Pratap Nagar", type: "Dine-in & Takeaway", address: "Sector 16, Main Blvd, Pratap Nagar", open: "10 AM - 11 PM" }
];

export default function LocationSection() {
  return (
    <section id="location" className="location-section">
      <div className="container">
        <div className="location-header text-center">
          <span className="badge">Find Us</span>
          <h2>Our Locations</h2>
          <p>Where to find your favorite treats.</p>
        </div>

        <div className="locations-wrapper">
          {locations.map((loc, index) => (
            <div key={loc.id} className="location-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="loc-icon">📍</div>
              <div className="loc-details">
                <h3>{loc.name} <span className="loc-type">{loc.type}</span></h3>
                <p>{loc.address}</p>
                <div className="loc-time">🕔 Open: {loc.open}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
