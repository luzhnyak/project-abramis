import { BookshelfApiService } from './api-service';

const allCategories = document.querySelector('.categoryes');

async function listCategories() {
  const booksApi = new BookshelfApiService();
  const catList = await booksApi.fetchCategoryList();

  const listHtml = catList
    .map(el => {
      return `<li class="categorie-item"><button data-list_name=${el.list_name} class="categorie-btn">${el.list_name}</button>
      </li>`;
    })
    .join('');
  allCategories.innerHTML = `<ul class="categorie-list list"><li><button class="categorie-btn">All categories</button></li>${listHtml}</ul>`;
}

listCategories();
