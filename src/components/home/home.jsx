import { useState } from "react";
import "./home.css";
import homepage from "./shoes/home.jpg";
import { Link } from "react-router-dom";

const NAV_LINKS = ["Men", "Women", "About", "Dernières tailles"];

export default function HomePage() {
  const [notifOpen, setNotifOpen] = useState(true);
  const [active, setActive] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className={`nav-link ${active === link ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(link);
              }}
              onMouseEnter={() => setActive(link)}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="nav-center">
          <a href="#">
            <div className="logo">BELLEDONNE</div>
            <div className="logo-sub">Paris</div>
          </a>
        </div>

        <div className="nav-right">
          <Link to="/login">Log in</Link>
          <a href="#" onClick={(e) => { e.preventDefault(); setCartOpen(true); }}>Cart (0)</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${homepage})` }}
      >
        {notifOpen && (
          <div className="info-card">
            <div className="info-left">
              <p>
                Sale of
                <br />
                Archives
              </p>
            </div>

            <div className="info-right">
              <p>
                Belledonne elegance, from summer to the following seasons.
              </p>

              <a href="#">To discover</a>
            </div>

            <button
              className="close-btn"
              onClick={() => setNotifOpen(false)}
            >
              ×
            </button>
          </div>
        )}
      </section>

      {/* Cart Modal */}
      <div className={`cart-overlay ${cartOpen ? 'active' : ''}`} onClick={() => setCartOpen(false)}>
        <div className="cart-card" onClick={(e) => e.stopPropagation()}>
          <div className="cart-header">
            <h2>CART</h2>
            <button className="cart-close" onClick={() => setCartOpen(false)}>×</button>
          </div>
          <div className="cart-empty">
            <p>YOUR CART IS EMPTY</p>
          </div>
        </div>
      </div>
    </div>
  );
}