import React from "react"; 
import css from "./ImageCard.module.css"; 

// Компонент ImageCard, який приймає два пропси: image (об'єкт з даними зображення) та onClick (функція для обробки кліку)
const ImageCard = ({ image, onClick }) => {
  return (
    <div className={css.imageCard} onClick={onClick}> {/* Клік по картці викликає onClick */}
      <img
        className={css.image} 
        src={image.urls?.regular} // Отримуємо регулярне зображення з об'єкта "image" (за наявності)
        alt={image.alt_description || "Image"} // Якщо немає alt_description, використовуємо "Image" як альт-текст
      />
    </div>
  );
};

export default ImageCard; 
