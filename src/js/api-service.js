import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books';

export class BookshelfApiService {
  async fetchCategoryList() {
    const response = await axios.get(`${BASE_URL}/category-list`);
    return response.data;
  }

  async fetchTopBooks() {
    const response = await axios.get(`${BASE_URL}/top-books`);
    return response.data;
  }

  async fetchBooksByCategory(category) {
    const response = await axios.get(
      `${BASE_URL}/category?category=${category}`
    );
    return response.data;
  }

  async fetchDetailsByBookId(id) {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  }
}
