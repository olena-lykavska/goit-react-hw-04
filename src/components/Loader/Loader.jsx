import React from "react"; 
import { Rings } from "react-loader-spinner"; 
import css from "./Loader.module.css"; 

// Компонент Loader, який показує індикатор завантаження
const Loader = () => {
  return (
    <div className={css.loader}> {/* Обгортка для індикатора завантаження */}
      {/* Компонент Rings з анімацією завантаження */}
      <Rings color="#4d5ae5" height={80} width={80} /> 
    </div>
  );
};

export default Loader; 