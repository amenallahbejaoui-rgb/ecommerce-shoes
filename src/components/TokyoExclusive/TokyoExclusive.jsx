import "./TokyoExclusive.css";
import loaferImg from "./JAPPPP.jpg";

export default function TokyoExclusive() {
  return (
    <div className="tokyo-container">

      {/* LEFT SIDE (ONLY IMAGE) */}
      <div className="left">
        <div className="image-wrapper">
          <img src={loaferImg} alt="Tokyo Loafer" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="content">
          <p className="title">Tokyo Exclusive</p>

          <p className="desc">
            Initialement développée pour ISETAN à Tokyo, la Loafer Tokyo rejoint
            exceptionnellement notre boutique en ligne en très petites quantités.
          </p>

          <a className="btn" href="#">
            Découvrir la Loafer Tokyo
          </a>
        </div>
      </div>

    </div>
  );
}