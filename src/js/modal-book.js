import * as basicLightbox from 'basiclightbox';
import { BookshelfApiService } from './api-service';
import iconClose from '../images/x-close.png';
import store1 from '../images/modal/store1.png';
import store2 from '../images/modal/store2.png';
import store3 from '../images/modal/store3.png';

const bookEl = document.querySelector('.js-test-modal');
bookEl.addEventListener('click', onBookClick);

const booksApi = new BookshelfApiService();
// const ID_BOOK = '643282b1e85766588626a0dc';
const ID_BOOK = '643282b2e85766588626a0f2';

function disableBodyScroll() {
  document.body.style.overflow = 'hidden';
}

function enableBodyScroll() {
  document.body.style.overflow = 'visible';
}

const instance = basicLightbox.create(`<div class="js-modal"></div>`, {
  onShow: () => {
    document.addEventListener('keydown', onEscDown);
    disableBodyScroll();
  },
  onClose: () => {
    document.removeEventListener('keydown', onEscDown);
    enableBodyScroll();
  },
});

export async function markupBook(id) {
  bookData = await booksApi.fetchDetailsByBookId(id);
  const { book_image, title, author, description, buy_links } = bookData;

  instance.show();

  const instanceEl = document.querySelector('.js-modal');

  instanceEl.innerHTML = `<div class="modal container">
    <button class="modal-close-btn" type="button" aria-label="close">
      <img class="modal-close-svg" src="${iconClose}" alt="" width="24" height="24"/>
    </button>
    <div class="modal-info">
    <img class="book-image" src="${book_image}" alt=""/>
    <div class="book-info">
    <h2 class="title">${title}</h2>
    <h3 class="author">${author}</h3>
    <p class="description">${description}</p>
    <ul class="buy-list list">
      <li class="buy-item">
        <a href="${buy_links[0].url}"><img class="store-1" src="${store1}" alt="" width="" height=""/></a>
      </li>
      <li class="buy-item">
        <a href="${buy_links[1].url}"><img class="store-2" src="${store2}" alt="" width="" height=""/></a>
      </li>
      <li class="buy-item">
        <a href="${buy_links[2].url}"><img class="store-3" src="${store3}" alt="" width="" height=""/></a>
      </li>
    </ul>
    </div>
    </div>
    <button class="add-to-shoping-list" data-id=${id} type="button">ADD TO SHOPING LIST</button>
  </div>
  `;

  let bookInList;
  const btnAddEl = document.querySelector('.add-to-shoping-list');
  btnAddEl.addEventListener('click', onClickBtnAdd);

  if (shoppingListData.find(book => book._id === id)) {
    btnAddEl.textContent = 'REMOVE FROM THE SHOPPING LIST';
  } else {
    btnAddEl.textContent = 'ADD TO SHOPING LIST';
  }
}

function onBookClick(evt) {
  evt.preventDefault();
  if (evt.target.classList === '.js-test-modal') {
    return;
  }
  markupBook(ID_BOOK);
}

function onEscDown(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

// ================ Local Storage

let shoppingListData = [];
let bookData = {};
loadData();

function onClickBtnAdd(event) {
  const id = event.target.dataset.id;

  if (shoppingListData.find(book => book._id === id)) {
    shoppingListData = shoppingListData.filter(book => book._id !== id);
    event.target.textContent = 'ADD TO SHOPING LIST';
  } else {
    shoppingListData.push(bookData);
    event.target.textContent = 'REMOVE FROM THE SHOPPING LIST';
  }

  saveData(shoppingListData);
}

function bookInList(id) {
  shoppingListData.find(book => book._id === id);
}

function loadData() {
  const data = localStorage.getItem('shopping-list');

  if (!data) return;

  shoppingListData = JSON.parse(data);
}

function saveData(data) {
  localStorage.setItem('shopping-list', JSON.stringify(data));
}

// Тестові дані

testData = [
  {
    _id: '643282b1e85766588626a0dc',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-09T09:28:38.946Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Alison Roman',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg',
    book_image_width: 402,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/aab1d8fe-9383-5fa0-bbf9-80321e07a3d8',
    contributor: 'by Alison Roman',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1984826395',
    primary_isbn13: '9781984826398',
    publisher: 'Clarkson Potter',
    rank: 3,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'SWEET ENOUGH',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 1,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781984826398?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984826398',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSWEET%252BENOUGH%252FAlison%252BRoman%252F9781984826398&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSWEET%252BENOUGH%252BAlison%252BRoman',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984826398&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DSWEET%2BENOUGH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984826398%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSWEET%2BENOUGH%2BAlison%2BRoman%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a080',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-01T00:00:00.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'James Clear',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg',
    book_image_width: 328,
    book_image_height: 495,
    book_review_link: '',
    book_uri: 'nyt://book/0398a355-c032-534e-a0af-647b06f0840d',
    contributor: 'by James Clear',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0735211299',
    primary_isbn13: '9780735211292',
    publisher: 'Avery',
    rank: 1,
    rank_last_week: 1,
    sunday_review_link: '',
    title: 'ATOMIC HABITS',
    updated_date: '2023-04-05 22:10:16',
    weeks_on_list: 175,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780735211292?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DATOMIC%2BHABITS',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b1e85766588626a0ba',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-09T09:28:38.643Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Shannon Bream',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg',
    book_image_width: 329,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/dc28bfbb-6ba7-54c6-a60b-272a327604ab',
    contributor: 'by Shannon Bream',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0063226057',
    primary_isbn13: '9780063226050',
    publisher: 'Broadside',
    rank: 2,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'THE LOVE STORIES OF THE BIBLE SPEAK',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 1,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780063226050?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b2e85766588626a0fc',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-01T00:00:00.000Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0593652886?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Rick Rubin with Neil Strauss',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593652886.jpg',
    book_image_width: 341,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/da28ca16-1ebd-55aa-aba3-fde278604a82',
    contributor: 'by Rick Rubin with Neil Strauss',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0593652886',
    primary_isbn13: '9780593652886',
    publisher: 'Penguin Press',
    rank: 4,
    rank_last_week: 2,
    sunday_review_link: '',
    title: 'THE CREATIVE ACT',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 11,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0593652886?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780593652886?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593652886',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BCREATIVE%252BACT%252FRick%252BRubin%252Bwith%252BNeil%252BStrauss%252F9780593652886&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BCREATIVE%252BACT%252BRick%252BRubin%252Bwith%252BNeil%252BStrauss',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593652886&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BCREATIVE%2BACT',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593652886%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BCREATIVE%2BACT%2BRick%2BRubin%2Bwith%2BNeil%2BStrauss%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '643282b2e85766588626a158',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-09T09:28:39.491Z',
    age_group: '',
    amazon_product_url: 'https://www.amazon.com/dp/0593489306?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'Miroslav Volf, Matthew Croasmun and Ryan McAnnally-Linz',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593489307.jpg',
    book_image_width: 331,
    book_image_height: 500,
    book_review_link: '',
    book_uri: 'nyt://book/9629b71b-3628-5ae4-acb1-32754b41e8c8',
    contributor: 'by Miroslav Volf, Matthew Croasmun and Ryan McAnnally-Linz',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0593489306',
    primary_isbn13: '9780593489307',
    publisher: 'The Open Field',
    rank: 7,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'LIFE WORTH LIVING',
    updated_date: '2023-04-05 22:10:17',
    weeks_on_list: 1,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/0593489306?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780593489307?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593489307',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FLIFE%252BWORTH%252BLIVING%252FMiroslav%252BVolf%25252C%252BMatthew%252BCroasmun%252Band%252BRyan%252BMcAnnally-Linz%252F9780593489307&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DLIFE%252BWORTH%252BLIVING%252BMiroslav%252BVolf%25252C%252BMatthew%252BCroasmun%252Band%252BRyan%252BMcAnnally-Linz',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593489307&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DLIFE%2BWORTH%2BLIVING',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593489307%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DLIFE%2BWORTH%2BLIVING%2BMiroslav%2BVolf%252C%2BMatthew%2BCroasmun%2Band%2BRyan%2BMcAnnally-Linz%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
];

saveData(testData);
