import { fundsData } from "./funds-data";

const fundsContainer = document.querySelector('.js-funds');
const fundsRender = document.querySelector('.funds-list');


const markup = fundsData
    .map((fund) =>
        `<li class="funds-item">
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

down.addEventListener('click', downClick);
up.addEventListener('click', upClick);

function downClick(){
    fundsContainer.scrollTo({
        top: fundsContainer.scrollHeight,
        behavior: 'smooth'
    });
}

function upClick(){
    fundsContainer.scrollTo({
        top: fundsContainer.scrollIntoView,
        behavior: 'smooth'
    });
}



