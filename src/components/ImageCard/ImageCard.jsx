import React from "react"; 
import css from "./ImageCard.module.css"; 

// Компонент ImageCard, який приймає два пропси: image (об'єкт з даними зображення) та onClick (функція для обробки кліку)
const ImageCard = ({ image, onClick }) => {
  return (
    <div className={css.imageCard}> {/* Картка зображення, обгортка для <img> */}
      <img
        className={css.image} 
        src={image.urls?.small} // Використовуємо "small" для отримання зображення з об'єкта "image"
        alt={image.alt_description || "Image"} // Якщо немає alt_description, використовуємо "Image" як альт-текст
        onClick={onClick} // Обробник події onClick
      />
    </div>
  );
};

export default ImageCard;
