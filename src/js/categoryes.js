import { BookshelfApiService } from './api-service';

const allCategories = document.querySelector('.categoryes');

async function listCategories() {
  const booksApi = new BookshelfApiService();
  const catList = await booksApi.fetchCategoryList();

  const listHtml = catList
    .map(el => {
      return `<li>${el.list_name}</li>`;
    })
    .join('');

  allCategories.innerHTML = `<ul><li>ALL CATEGORIES</li>${listHtml}</ul>`;

  console.log(listHtml);
}

listCategories();
