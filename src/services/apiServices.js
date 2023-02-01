import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31600931-0a470777dbdb6f40891ab4c3c';

export async function fetchImages(searchQuery, pageNumber) {
  const resp = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: pageNumber,
      per_page: 12,
    },
  });
  return resp.data;
}
