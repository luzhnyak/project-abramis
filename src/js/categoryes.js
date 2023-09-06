import { BookshelfApiService } from './api-service';
import { booksCategory } from './cards';
import Notiflix from 'notiflix';

const cardsEl = document.querySelector('.js-cards');
const allCategories = document.querySelector('.categoryes');

async function listCategories() {
  try {
    const booksApi = new BookshelfApiService();
    const catList = await booksApi.fetchCategoryList();

    const listHtml = catList
      .map(el => {
        return `<li class="categorie-item"><button data-list_name="${el.list_name}" class="categorie-btn">${el.list_name}</button>
      </li>`;
      })
      .join('');
    allCategories.innerHTML = `<ul class="categorie-list list"><li class="categorie-item"><button class="categorie-btn active">All categories</button></li>${listHtml}</ul>`;

    if (catList.length === 0) {
      Notiflix.Notify.failure('No categories found');
    }

    const catsBtn = document.querySelectorAll('.categorie-btn');

    catsBtn.forEach(el => {
      el.addEventListener('click', event => {
        document
          .querySelector('.categorie-btn.active')
          .classList.remove('active');

        booksCategory(el.textContent);
        el.classList.add('active');
      });
    });
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}

listCategories();
