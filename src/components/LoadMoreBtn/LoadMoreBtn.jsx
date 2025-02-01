import React from "react"; 
import css from "./LoadMoreBtn.module.css"; 

// Компонент LoadMoreBtn для відображення кнопки "Load more"
const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick}> {/* Кнопка з класом для стилізації і функцією для обробки кліку */}
      Load more {/* Текст кнопки */}
    </button>
  );
};

export default LoadMoreBtn;
