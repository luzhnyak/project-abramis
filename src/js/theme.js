const STORAGE_KEY = "saved-theme"


const body = document.querySelector('body')

/**
  |============================
  | dark style HEADER
  |============================
*/

const header = {
 generalHeader: document.querySelector('.header'),
 logo: document.querySelector('.logo'),
 toggle: document.querySelector('.switch'),
 switcher: document.querySelector('.theme')
}

const menuLinks = document.querySelectorAll('.menu-link')

const headerElements = Object.values(header)

/**
  |============================
  | dark style SIDEBAR
  |============================
*/

// import { listCategories } from "./categoryes"


// async function sidebar(){
// const categoriesList = await listCategories()
// const categories = document.querySelectorAll('.categorie-btn')
// return categories
// }





/**
  |============================
  | збереження останньої теми
  |============================
*/
currentTheme()

function currentTheme(){
  const item = localStorage.getItem(STORAGE_KEY)
  const parsedItem = JSON.parse(item)
  if (parsedItem === null) {
  }
  else{
    header.switcher.checked = true
    onDark() 
  }

}
function savedTheme(){
const data = {}
if(header.switcher.checked){
  data.theme = 'dark';
} 
localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

/**
  |============================
  | очистка стилів
  |============================
*/

function onLigth() {
    body.classList.remove('body-dark');
for (const el of headerElements){
  el.classList.remove('dark')
}
for (const link of menuLinks){
  link.classList.remove ('dark')
}
}
  
/**
  |============================
  | додавання стилів темної теми
  |============================
*/
  function onDark(e){
    savedTheme()

      body.classList.add('body-dark');
      
for (const el of headerElements){
  el.classList.add('dark')
}
for (const link of menuLinks){
  link.classList.add ('dark')
}
// sidebar()
// .then(categories=>{
//   for(const categorie of categories){
//     categorie.classList.add('dark');
//   };
// })

    }
    

    /**
      |============================
      | слухач
      |============================
    */

 function toggle(){
  if(header.switcher.checked){
    onDark()
  } 
  else{
    localStorage.clear()
    onLigth()
  }
 }

  header.switcher.addEventListener('change', toggle)