import { fundsData } from "./funds-data";

const fundsContainer = document.querySelector('.js-funds');
const fundsRender = document.querySelector('.funds-list');


const markup = fundsData
    .map((fund) =>
        `<li class="funds-item slide">
        <a class="funds-link" href="${fund.url}" target="_blank" rel="noopener noreferrer">
        <img class="funds-image" 
          src="${fund.img}" 
          alt="${fund.title}"
          target="_parent">
         </a>
    </li> 
        `)
    .join("");


fundsRender.insertAdjacentHTML("beforeend", markup);

const down = document.querySelector('.down-scroll');
const up = document.querySelector('.up-scroll');

down.addEventListener('click', onClick);
up.addEventListener('click', upClick);

let size = 0;

function onClick() {

    if (size > fundsRender.clientHeight) {
        downClick();
        size = 0;
        down.classList.add('visually-hidden');
        up.classList.remove('visually-hidden');
        return;
    } else {
        size += fundsRender.clientHeight;
        downClick();
    }
    
}

function downClick() {
    fundsRender.scrollTo({
        top: fundsRender.scrollWidth = size,
        behavior: 'smooth'
    });
}

function upClick() {
    down.classList.remove('visually-hidden');
    up.classList.add('visually-hidden');
    fundsRender.scrollTo({
        top: fundsRender.scrollIntoView,
        behavior: 'smooth'
    });
}


// // console.log(firstEl);
// firstEl.classList.add('active');
