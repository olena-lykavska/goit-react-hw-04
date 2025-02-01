import React, { useState } from "react"; 
import css from "./SearchBar.module.css";

// Компонент SearchBar для введення запиту пошуку
const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState(""); // Стан для зберігання значення введеного тексту в полі вводу

  // Функція для обробки події submit форми
  const handleSubmit = (e) => {
    e.preventDefault(); // Запобігаємо перезавантаженню сторінки при відправці форми
    onSubmit(input); // Передаємо значення input в функцію onSubmit (яка була передана як пропс)
    setInput(""); // Очищаємо поле вводу після відправки запиту
  };

  return (
    <form className={css.searchBar} onSubmit={handleSubmit}> {/* Обгортка для форми з обробником submit */}
      <input
        className={css.input} // Стилізація поля вводу
        type="text"
        placeholder="Search images..." // Підказка для користувача
        value={input} // Прив'язуємо значення input до стану
        onChange={(e) => setInput(e.target.value)} // Оновлюємо стан при введенні користувачем
      />
      <button className={css.button} type="submit">Search</button> {/* Кнопка для відправки форми */}
    </form>
  );
};

export default SearchBar; 
