import "./ExceptionalKnowHow.css";
import video from "./atelier-belledonne.mp4"




const VIDEO_SRC  = video;   // ← your video
const POSTER_SRC = "/images/atelier-poster.jpg";        // ← your poster still

export default function ExceptionalKnowHow() {
  return (
    <section className="knowhow-section">

      {/* Background video */}
      <video
        className="knowhow-video"
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="knowhow-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="knowhow-content">

        <h2 className="knowhow-eyebrow">Exceptional Know-How</h2>

        <p className="knowhow-body">
          At Belledonne, each pair of sneakers reflects meticulous work and careful
          attention to every detail.<br />
          From the selection of Italian leathers to the careful manufacturing in our
          Portuguese workshops, our artisans transform exceptional materials into
          durable and elegant sneakers.
        </p>

        {/* Info card */}
        <div className="knowhow-card">
          <div className="knowhow-card__label">
            <span>History</span>
          </div>
          <div className="knowhow-card__body">
            <p className="knowhow-card__desc">
              Discover the story behind each step of creation.
            </p>
            <a className="knowhow-card__link" href="/about">
              Discover
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
