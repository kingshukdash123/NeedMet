import { useState, useEffect, useRef } from "react";
import "../style/ImageSlider.css";

function ImageSlider({
  slide=false, 
  width = "600px",
  height = "400px",
  images = ['https://img.freepik.com/free-vector/natural-landscape-wallpaper-concept_23-2148650600.jpg?semt=ais_user_personalization&w=740&q=80', 'https://t4.ftcdn.net/jpg/07/46/85/53/240_F_746855306_vgMhzGTquLlpfAhOM1WGFq5QvudNXtW6.jpg', 'https://t3.ftcdn.net/jpg/06/15/17/14/240_F_615171472_VfBqTvsPSfAbsXl2T8nkbua7Vff2hRfh.jpg']
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    if(!slide) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000);
  };

  const stopAutoSlide = () => {
    if(!slide) return;

    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!images.length) return;

    startAutoSlide();

    return () => stopAutoSlide();
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!images.length) return null;

  return (
    <div
      className="carousel-container"
      style={{ width, height }}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {images.map((img, index) => (
          <img
            src={img}
            alt={`slide-${index}`}
            key={index}
            className="carousel-image"
          />
        ))}
      </div>

      <button className="carousel-btn prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        ❯
      </button>

      <div className="slides-counter">
        {images.map((_, index) => (
          <div
            key={index}
            className={`single-counter ${
              index === currentIndex ? "active-dot" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;