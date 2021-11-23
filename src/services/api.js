const API_KEY = "23526463-69d460dc9366e545ff49935bb";
const BASE_URL = 'https://pixabay.com/api/';

function fetchImage(searchName, page) {
  return fetch(
    `${BASE_URL}?q=${searchName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет изображения с именем ${searchName}`));
  });
}

const api = {
  fetchImage,
};

export default api;
