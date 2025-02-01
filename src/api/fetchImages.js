const API_KEY = "9ao_imBwchao0-lXPH6KHWPOBhs8XAQPHs5xEG7iYj0"; 
const BASE_URL = "https://api.unsplash.com/search/photos";

async function fetchImages(query, page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}?query=${query}&page=${page}&per_page=12&client_id=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Щось пішло не так! Спробуйте ще раз.");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Помилка при завантаженні зображень:", error);
    return [];
  }
}

export default fetchImages;
