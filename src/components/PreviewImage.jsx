import { useState } from "react";
import "../style/PreviewImage.css";

export default function PreviewImage({ width="100%", images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div 
      className="main-image" 
      style={{
        width: width,
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="preview-container">

        <div>
          <button className="preview-image-arrow prev-img-arrow-left">
            ❮
          </button>
        </div>

        <div className="preview-wrapper">
          {images.map((img, index) => (
            <img
            key={index}
            src={img}
            alt="preview"
            className={`preview ${currentIndex === index ? "preview-active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div>
          <button className="preview-image-arrow prev-img-arrow-right">
            ❮
          </button>
        </div>

      </div>
    </div>

  );
}