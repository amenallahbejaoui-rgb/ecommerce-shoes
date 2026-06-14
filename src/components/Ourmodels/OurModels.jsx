import "./OurModels.css";
import image1 from "./images/shoe1 - Copie.jpg";
import image2 from "./images/shoe2 - Copie.jpg";
import image3 from "./images/shoe3 - Copie.jpg";
import image4 from "./images/shoe4.jpg";
// Import your images
/**
 * OurModels
 *
 * Five model cards in a row.
 * On hover: all non-hovered cards fade to 25% opacity,
 * the hovered card stays at full opacity.
 *
 * Replace each `image` src with your real product image URLs.
 */

const MODELS = [
  {
    id: "b0",
    name: "B0",
    image: {
      src: image1,         // ← replace with your image
      alt: "Belledonne B0 sneaker",
    },
    href: "/products/b0",
  },
  {
    id: "b0-velcro",
    name: "B0 Velcro",
    image: {
      src: image2,  // ← replace with your image
      alt: "Belledonne B0 Velcro sneaker",
    },
    href: "/products/b0-velcro",
  },
  {
    id: "b7",
    name: "B7",
    image: {
      src: image3,         // ← replace with your image
      alt: "Belledonne B7 sneaker",
    },
    href: "/products/b7",
  },
  {
    id: "b8",
    name: "B8",
    image: {
      src: image4,         // ← replace with your image
      alt: "Belledonne B8 sneaker",
    },
    href: "/products/b8",
  },
 
];

export default function OurModels() {
  return (
    <section className="models-section">
      <h2 className="models-section__title">Our Models</h2>

      <div className="models-grid">
        {MODELS.map((model) => (
          <a
            key={model.id}
            className="model-card"
            href={model.href}
            style={{ textDecoration: "none" }}
          >
            <div className="model-card__image">
              <img
                src={model.image.src}
                alt={model.image.alt}
                loading="lazy"
              />
            </div>
            <span className="model-card__name">{model.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
