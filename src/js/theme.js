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

}
  
/**
  |============================
  | додавання стилів темної теми
  |============================
*/
  function onDark(e){
    savedTheme()

      body.classList.add('body-dark');
      
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