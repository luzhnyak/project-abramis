import { fundsData } from './funds-data';

const fundsContainer = document.querySelector('.js-funds');
const fundsRender = document.querySelector('.funds-list');

const markup = fundsData
  .map(
    fund =>
      `<li class="funds-item slide">
        <a class="funds-link" href="${fund.url}" target="_blank" rel="noopener noreferrer">
        <img class="funds-image" 
          src="${fund.img}" 
          alt="${fund.title}"
          target="_parent"
          min-width="62"
          loading="lazy">
         </a>
    </li> 
        `
  )
  .join('');

fundsRender.insertAdjacentHTML('beforeend', markup);

const down = document.querySelector('.down-scroll');
const up = document.querySelector('.up-scroll');

down.addEventListener('click', onClick);
up.addEventListener('click', upClick);

let size = fundsRender.clientHeight;

function onClick() {
  if (size === 0) {
    upClick();
  } else {
    downClick();
    size += fundsRender.clientHeight;
  }
}

function downClick() {
  fundsRender.scrollTo({
    top: size,
    behavior: 'smooth',
  });

  if (size + fundsRender.clientHeight >= fundsRender.scrollHeight) {
    down.classList.remove('down-scroll-anim');
    down.classList.add('up-scroll-anim');
  }

  if (size >= fundsRender.scrollHeight) {
    upClick();
    size = 0;
  }
}

function upClick() {
  down.classList.remove('up-scroll-anim');
  down.classList.add('down-scroll-anim');

  fundsRender.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
