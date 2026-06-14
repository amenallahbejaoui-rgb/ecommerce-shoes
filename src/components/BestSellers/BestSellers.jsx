import { useRef, useEffect, useState } from "react";
import "./BestSellers.css";
import { PRODUCTS } from "./products";
import { Link } from "react-router-dom";

export default function BestSellers() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(1);
  const isDraggingRef = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const cardW = el.children[0]?.offsetWidth || 1;
      const idx = Math.round(el.scrollLeft / cardW);
      setPage(idx + 1);
    };

    const onMouseDown = (e) => {
      isDraggingRef.current = true;
      setIsDragging(true);
      startX.current = e.pageX - el.offsetLeft;
      startScrollLeft.current = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 2;
      el.scrollLeft = startScrollLeft.current - walk;
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
      el.style.cursor = 'grab';
    };

    const onMouseLeave = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
      el.style.cursor = 'grab';
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseLeave);
    
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="header">
        <h2>Our best-sellers</h2>
        <a href="#">View all</a>
      </div>

      <div ref={trackRef} className="track">
        {PRODUCTS.map((p) => (
          <Link 
            key={p.id} 
            to={`/product/${p.id}`} 
            className="card-link"
            onClick={(e) => {
              if (isDragging) {
                e.preventDefault();
              }
            }}
          >
            <div className="card">
              <div className="imgBox">
                <img src={p.image} alt={p.name} draggable="false" />
              </div>

              <div className="info">
                <span>{p.name}</span>
                <span>{p.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

     
    </div>
  );
}