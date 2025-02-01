import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

// Компонент ImageGallery, який приймає два пропси: images (масив зображень) та onImageClick (функція для обробки кліку)
const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={css.gallery}> {/* Блок, який містить усі зображення */}
      {images.map((img) => (
        // Для кожного зображення створюється компонент ImageCard
        <ImageCard 
          key={img.id} // Важливо використовувати унікальний key для кожного елементу в списку
          image={img} // Передаємо зображення в компонент ImageCard
          onClick={() => onImageClick(img)} // Передаємо функцію для обробки кліку, передаючи відповідне зображення
        />
      ))}
    </div>
  );
};

export default ImageGallery; 
