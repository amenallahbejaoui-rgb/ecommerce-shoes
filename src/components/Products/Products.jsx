
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PRODUCTS_DATA } from "./productsData";
import Footer from "../Footer/Footer";
import "./Products.css";

export default function Products() {
  const { productId } = useParams();
  const product = PRODUCTS_DATA.find((p) => p.id === parseInt(productId));
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();

  if (!product) return <div>Product not found</div>;

  return (
    <div className="products-container">
      <Link to="/" className="back-link">← Back</Link>
      
      <div className="products-layout">
        <div className="image-section">
          <div className="image-main">
            <img src={product.images[0]} alt={product.name} />
          </div>
        </div>
        <div className="details-section">
          <div className="product-header">
            <h1>{product.name}</h1>
            <span className="price">{product.price}</span>
          </div>

          <div className="colors">
            <span className="label">More colors</span>
            <div className="color-list">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  className={`color-swatch ${selectedColor === color ? "active" : ""}`}
                  style={{ backgroundColor: color === "blackb" ? "#1a1a1a" : color === "gum" ? "#c4a879" : color === "gumwhite" ? "#e6e6e6" : color }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>

          <div className="sizes">
            <div className="size-header">
              <span className="label">Size</span>
              <span className="size-guide">Size guide</span>
            </div>
            <div className="size-list">
              {product.size.map((s) => (
                <button
                  key={s}
                  className={`size-item ${selectedSize === s ? "active" : ""}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button className="add-to-cart" onClick={() => navigate('/checkout')}>Add to cart</button>

          <div className="info-block">
            <div className="stock-info">
              <div className="dot"></div>
              <span>In stock</span>
            </div>
            <div className="delivery-info">
              <p>Free delivery in 2 to 7 working days</p>
              <p>Payment in 3 installments, without fees with Alma</p>
            </div>
          </div>

          <div className="tabs">
            <button className="tab" onClick={() => setActiveTab('description')}>Description</button>
            <button className="tab" onClick={() => setActiveTab('delivery')}>Delivery and returns</button>
            <button className="tab" onClick={() => setActiveTab('assistance')}>Assistance</button>
          </div>
        </div>
      </div>
      
      <div className={`tab-modal-overlay ${activeTab ? 'active' : ''}`} onClick={() => setActiveTab(null)}>
        {activeTab && (
          <div className="tab-modal" onClick={(e) => e.stopPropagation()}>
            <div className="tab-modal-header">
              <h3>
                {activeTab === 'description' ? 'Description' : activeTab === 'delivery' ? 'Delivery and returns' : 'Assistance'}
              </h3>
              <button className="tab-modal-close" onClick={() => setActiveTab(null)}>×</button>
            </div>
            <div className="tab-modal-content">
              {activeTab === 'description' && (
                <>
                  <h4>Our iconic model, inspired by basketball sneakers from the 80s.</h4>
                  <ul>
                    <li>Handmade in Portugal</li>
                    <li>Smooth leather, tanned in Italy and certified Gold by the LWG*</li>
                    <li>Glued and stitched rubber sole</li>
                    <li>Cowhide leather lining</li>
                    <li>100% cotton laces</li>
                    <li>Comes with a carrying pouch</li>
                  </ul>
                  <p className="tab-modal-note">*Leather Working Group</p>
                </>
              )}
              {activeTab === 'delivery' && (
                <>
                  <p>To better serve you, we offer several delivery options tailored to your needs.</p>
                  <h5>IN METROPOLITAN FRANCE</h5>
                  <p><strong>Delivery :</strong></p>
                  <ul>
                    <li>Mondial Relay - 3 to 4 working days: Free, from 100€ purchase</li>
                    <li>Relay Point Colissimo - 3 to 4 working days - €6</li>
                    <li>Colissimo Home - 2 to 3 working days: €8</li>
                    <li>Chronopost Express - Home delivery within 48 hours, if ordered before 12 noon from Monday to Friday - €15</li>
                  </ul>
                  <p><strong>Exchange / Credit :</strong> Free</p>
                  <p><strong>Refunds :</strong> Participation of €5, deducted from the refund</p>
                  <h5>OUTSIDE METROPOLITAN FRANCE</h5>
                  <p><strong>Delivery :</strong></p>
                  <ul>
                    <li>Home (Colissimo Europe - 3/5 days) Spain, Portugal, Italy, Germany, United Kingdom, Belgium, Netherlands, Austria, Ireland, Luxembourg: €10</li>
                    <li>Home (Colissimo Europe - 3/5 days) - Switzerland: €15</li>
                  </ul>
                  <p><strong>Returns:</strong> At the customer's expense</p>
                </>
              )}
              {activeTab === 'assistance' && (
                <>
                  <p>For any questions, please visit our Help Center by clicking here.</p>
                  <p>You can also contact us by email at info@belledonne.co or via our social networks @belledonne.paris</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="image-grid-full">
        {product.images.slice(1).map((img, idx) => (
          <div key={idx} className="image-item-full">
            <img src={img} alt={product.name} />
          </div>
        ))}
      </div>
      
      <div className="know-how-section">
        <div className="know-how-left">
          <span className="know-how-label">KNOW-HOW</span>
        </div>
        <div className="know-how-center">
          <img src="/USINE-PHOTO-2.jpg" alt="Know-how" />
          <span className="know-how-discover">Discover</span>
          <p className="know-how-text">At Belledonne, each sneaker is the result of precise and attentive work. From Italian leathers to Portuguese workshops, our artisans transform exceptional materials into durable and elegant sneakers.<br/>Discover each step of their creation.</p>
        </div>
        <div className="know-how-right">
          <img src="/USINE-PHOTO.jpg" alt="Know-how" />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
