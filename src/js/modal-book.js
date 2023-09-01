import { BookshelfApiService } from './api-service';

const bookshelfApiService = new BookshelfApiService();

const modalBtn = document.querySelector('.js-test-modal');

modalBtn.addEventListener('click', onClick);

function createMarkup() {}

// function createMarkup(arr) {
//   return arr.map(
//     ({
//       book_image,
//       title,
//       author,
//       description,
//       buy_links: { name, url },
//     }) => `<div class="modal modal-info">
//   <button class="modal-close-btn" type="button">
//     <svg class="modal-close-svg" width="24" height="24">
//       <use href=""></use>
//     </svg>
//   </button>
//   <img class="book-image" src="${book_image}" alt="" />
//   <h2 class="title">${title}</h2>
//   <h3 class="author">${author}</h3>
//   <p class="description">${description}</p>
//   <ul class="buy-list">
//     <li class="buy-item"><a href="${buy_links[0].url}">${buy_links[0].name}</a></li>
//     <li class="buy-item"><a href="${buy_links[1].url}">${buy_links[1].name}</a></li>
//     <li class="buy-item"><a href="${buy_links[2].url}">${buy_links[2].name}</a></li>
//   </ul>
//   <button class="add-to-shoping-list" type="button">ADD TO SHOPING LIST</button>
// </div>`
//   );
// }

// createMarkup();

// async function getBookId() {
//   let topBooks;

//   try {
//     topBooks = await bookshelfApiService.fetchTopBooks();
//     console.log(topBooks);
//   } catch (error) {
//     console.log(error);
//     return;
//   }

//   // [b1, b2, ....] = booksByCategory
//   // bn {
//   //  _id: 13124536247568
//   // some values: any
//   // .....
//   // }

//   //         b1
//   //   const book = booksByCategory[0];
//   //   console.log(book);
//   //   const bookId = book['_id'];
//   //   console.log(bookId);

//   //   try {
//   //     const detailsByBookId = await bookshelfApiService.fetchDetailsByBookId(
//   //       bookId
//   //     );
//   //     console.log(detailsByBookId);
//   //   } catch (error) {
//   //     console.log(error);
//   //     return;
//     }
// }

// getBookId();
