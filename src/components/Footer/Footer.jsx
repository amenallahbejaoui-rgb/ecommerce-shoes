import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Newsletter */}
        <div className="newsletter">
          <h3>SUBSCRIBE TO THE NEWSLETTER</h3>

          <div className="newsletter-input">
            <input type="email" placeholder="Email" />
            <button>→</button>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>INFORMATION</h4>
            <a href="/">Returns</a>
            <a href="/">Contact</a>
            <a href="/">Size guide</a>
          </div>

          <div className="footer-column">
            <h4>ABOUT</h4>
            <a href="/">Man</a>
            <a href="/">Women</a>
            <a href="/">Our History</a>
          </div>

          <div className="footer-column">
            <h4>LEGAL INFORMATION</h4>
            <a href="/">GTC</a>
            <a href="/">Legal Notice</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Legal contact details</a>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="selectors">
          <div className="select-box">
            <label>Country/region</label>
            <select>
              <option>France | EUR €</option>
            </select>
          </div>

          <div className="select-box">
            <label>Language</label>
            <select>
              <option>English</option>
            </select>
          </div>
        </div>

        <div className="socials">
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
        </div>

        <div className="payments">
          <span>AMEX</span>
          <span>Apple Pay</span>
          <span>CB</span>
          <span>Klarna</span>
          <span>MC</span>
          <span>PayPal</span>
          <span>Shop</span>
          <span>VISA</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026, Belledonne Paris</p>
      </div>
    </footer>
  );
}