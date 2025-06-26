export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51028814-fcea6b5a1dfbba86f24da2f1c';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: '',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
