import "./Collectionsplit.css";
 import hommeImg from "./homme.jpg";
 import femmeImg from "./femme.jpg";
 

const SECTIONS = [
  {
    id: "men",
    variant: "men",           // controls layout order via CSS
    eyebrow: "Men's Collection",
    link: { label: "Discover all our models", href: "/collections/men" },
    // ↓ swap with your real image URL
    image: {
      src: hommeImg,
      alt: "Man in white tank top seated on a chrome chair — Men's Collection",
    },
  },
  {
    id: "women",
    variant: "women",         // controls layout order via CSS
    eyebrow: "Women's Collection",
    link: { label: "Discover all our models", href: "/collections/women" },
    // ↓ swap with your real image URL
    image: {
      src: femmeImg,
      alt: "Woman in grey top on white bedding wearing sneakers — Women's Collection",
    },
  },
];

export default function CollectionSplit() {
  return (
    <div className="collection-wrapper">
      {SECTIONS.map((section, idx) => (
        <div key={section.id}>
          <section className={`collection-split collection-split--${section.variant}`}>

            {/* Editorial photo */}
            <div className="collection-split__image">
              <img
                src={section.image.src}
                alt={section.image.alt}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>

            {/* Text panel */}
            <div className="collection-split__text">
              <div className="collection-split__content">
                <h2 className="collection-split__eyebrow">{section.eyebrow}</h2>
                <a className="collection-split__link" href={section.link.href}>
                  {section.link.label}
                </a>
              </div>
            </div>

          </section>

          {/* thin divider between rows, not after the last */}
          {idx < SECTIONS.length - 1 && <div className="collection-divider" />}
        </div>
      ))}
    </div>
  );
}