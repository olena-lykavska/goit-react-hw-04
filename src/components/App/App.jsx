import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar"; 
import ImageGallery from "../ImageGallery/ImageGallery"; 
import Loader from "../Loader/Loader"; 
import ErrorMessage from "../ErrorMessage/ErrorMessage"; 
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"; 
import ImageModal from "../ImageModal/ImageModal"; 
import fetchImages from "../../api/fetchImages"; 
import css from "./App.module.css"; 

// Імпорт компоненту для toast-повідомлень та стилів
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // Оголошуємо стейти:
  const [images, setImages] = useState([]); // Массив для збереження зображень
  const [query, setQuery] = useState(""); // Термін пошуку
  const [page, setPage] = useState(1); // Сторінка для пагінації
  const [isLoading, setIsLoading] = useState(false); // Стейт для відображення лоадера
  const [error, setError] = useState(null); // Стейт для зберігання повідомлень про помилки
  const [selectedImage, setSelectedImage] = useState(null); // Стейт для збереження вибраного зображення

  // Функція для обробки пошуку
  const handleSearch = (newQuery) => {
    setQuery(newQuery); // Оновлюємо значення query
    setPage(1); // Скидаємо сторінку на першу
    setImages([]); // Очищаємо зображення
  };

  // Функція для завантаження наступної сторінки зображень
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); // Оновлюємо сторінку
  };

  // Використовуємо useEffect для запуску запиту при зміні query або page:
  useEffect(() => {
    if (query === "") return; // Якщо query порожнє, не робимо запит

    const fetchData = async () => {
      setIsLoading(true); // Встановлюємо лоадер
      setError(null); // Скидаємо помилки
      try {
        const newImages = await fetchImages(query, page); // Отримуємо нові зображення
        setImages((prevImages) => [...prevImages, ...newImages]); // Додаємо нові зображення до попередніх
      } catch (err) {
        setError("Error fetching images. Please try again."); // Повідомлення про помилку
      } finally {
        setIsLoading(false); // Закриваємо лоадер після запиту
      }
    };

    fetchData(); // Викликаємо функцію для завантаження зображень
  }, [query, page]); // Ефект спрацьовує при зміні query або page

  return (
    <div className={css.app}> {/* Основний контейнер */}
      <SearchBar onSubmit={handleSearch} /> {/* Пошуковий рядок */}
      {error && <ErrorMessage message={error} />} {/* Повідомлення про помилку */}
      <ImageGallery images={images} onImageClick={setSelectedImage} /> {/* Галерея зображень */}
      {isLoading && <Loader />} {/* Лоадер під час завантаження */}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} /> // Кнопка "Load more"
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
      
      <ToastContainer /> {/* Контейнер для відображення toast-повідомлень */}
    </div>
  );
};

export default App;
