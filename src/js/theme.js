const STORAGE_KEY = "saved-theme"


const body = document.querySelector('body')
const header = {
 switcher: document.querySelector('.theme'),
 switcherMobile: document.querySelector('.theme-mobile')
}

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
    header.switcherMobile.checked = false
    header.switcher.checked = false
  }
  else{
    header.switcher.checked = true
    header.switcherMobile.checked = true
    onDark() 
  }

}
function savedTheme(){
const data = {}
if(header.switcher.checked || header.switcherMobile.checked){
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
      | слухачі
      |============================
    */

 function toggle(){
  if(header.switcher.checked){
    onDark()
    header.switcherMobile.checked = true
  } 
  else{
    localStorage.removeItem("saved-theme")
    onLigth()
    header.switcherMobile.checked = false
  }
 }

 function toggleMobile(){

  if(header.switcherMobile.checked){
    onDark()
    header.switcher.checked = true
  } 
  else{
    localStorage.removeItem("saved-theme")
    onLigth()
    header.switcher.checked = false
    
  }
 }

  header.switcher.addEventListener('change', toggle)
  header.switcherMobile.addEventListener('change', toggleMobile)