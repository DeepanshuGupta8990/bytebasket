import Link from "next/link";
import Image from "next/image";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content animate-fade-in">
        <div className="hero-text">
          <div className="badge">100% Fresh & Delicious</div>
          <h1>
            Bite into <span>Happiness</span> at ByteBasket Cakes
          </h1>
          <p>
            Experience the finest assortment of premium cakes, juicy burgers, crispy pizzas, and refreshing shakes. Handcrafted locally with love.
          </p>
          <div className="hero-cta">
            <Link href="#order" className="btn btn-primary">
              Order Now
            </Link>
            <Link href="#menu" className="btn btn-secondary">
              View Menu
            </Link>
          </div>
          
          <div className="stats">
            <div className="stat-item">
              <h4>5k+</h4>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h4>50+</h4>
              <p>Menu Items</p>
            </div>
            <div className="stat-item">
              <h4>3</h4>
              <p>Store Locations</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-composition">
             <div className="img-backdrop"></div>
             <div className="food-img-wrapper main-img float-anim-1">
               <Image src="/images/cake.png" alt="Delicious Chocolate Cake" width={400} height={400} className="food-image" />
             </div>
             <div className="food-img-wrapper side-img-1 float-anim-2">
               <Image src="/images/burger.png" alt="Juicy Burger" width={250} height={250} className="food-image" />
             </div>
             <div className="food-img-wrapper side-img-2 float-anim-3">
               <Image src="/images/pizza.png" alt="Hot Pizza" width={200} height={200} className="food-image" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
