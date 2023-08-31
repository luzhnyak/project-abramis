import { fundsData } from "./funds-data";

const fundsContainer = document.querySelector('.js-funds');
const fundsRender = document.querySelector('.funds-list');


const markup = fundsData
    .map((fund) =>
        `<li class="funds-item">
        <a class="funds-link" href="${fund.url}" target="_blank" rel="noopener noreferrer">
        <img class="funds__image" 
          src="" 
          alt="${fund.title}"
          target="_parent">
         </a>
    </li> 
        `)
    .join("");

 

fundsRender.insertAdjacentHTML("beforeend", markup);