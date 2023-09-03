import { BookshelfApiService } from './api-service';

const allCategories = document.querySelector('.categoryes');

async function listCategories() {
  const booksApi = new BookshelfApiService();
  const catList = await booksApi.fetchCategoryList();

  const listHtml = catList
    .map(el => {
      return `<li class="categorie-item"><button class="categorie-btn" href=“”>${el.list_name}</button></li>`;
    })
    .join('');
  allCategories.innerHTML = `<ul class="categorie-list list"><li><button class="categorie-btn active" href=“”>All categories</button></li>${listHtml}</ul>`;
}

listCategories();
