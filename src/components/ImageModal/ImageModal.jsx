import React from "react"; 
import Modal from "react-modal";
import css from "./ImageModal.module.css";

// Встановлюємо корінь додатка для доступу до модального вікна (рекомендується для доступності)
Modal.setAppElement("#root");

// Компонент ImageModal, який приймає два пропси: image (дані зображення) та onClose (функція для закриття модального вікна)
const ImageModal = ({ image, onClose }) => {
  if (!image) return null; // Якщо немає зображення, компонент не рендериться

  return (
    <Modal
      key={image?.id} // Використовуємо унікальний ключ для кожного модального вікна
      isOpen={!!image} // Модальне вікно відкривається, якщо є зображення
      onRequestClose={onClose} // Закриває модальне вікно при запиті
      className={css.modal} // Клас для стилізації модального вікна
      overlayClassName={css.overlay} // Клас для стилізації перекриття
    >
      {/* Кнопка для закриття модального вікна */}
      <button className={css.closeBtn} onClick={onClose}>
        {"\u00D7"} {/* Символ для закриття (×) */}
      </button>
      <img
        className={css.image} 
        src={image?.urls?.regular} // Отримуємо зображення з URL (якщо є)
        alt={image?.alt_description || "Image"} // Альт-текст або "Image", якщо немає опису
      />
    </Modal>
  );
};

export default ImageModal; 