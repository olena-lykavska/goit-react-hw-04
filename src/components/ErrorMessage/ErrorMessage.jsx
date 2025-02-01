import React from "react";
import css from "./ErrorMessage.module.css";

// Компонент ErrorMessage, який приймає пропс "message"
const ErrorMessage = ({ message }) => {
  // Виводимо повідомлення про помилку в стилізований div
  return <div className={css.errorMessage}>{message}</div>;
};

export default ErrorMessage; 
