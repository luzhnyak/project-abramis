
const body = document.querySelector('body')

const header = {
 generalHeader: document.querySelector('.header'),
 logo: document.querySelector('.logo'),
 toggle: document.querySelector('.switch'),
 switcher: document.querySelector('.theme')
}

const menuLinks = document.querySelectorAll('.menu-link')

const headerElements = Object.values(header)
 

function onLigth() {
    body.classList.remove('body-dark');

for (const el of headerElements){
  el.classList.remove('dark')
}
for (const link of menuLinks){
  link.classList.remove ('dark')
}

}
  
  function onDark(e){
    if(e.currentTarget.checked){
      body.classList.add('body-dark');
      
for (const el of headerElements){
  el.classList.add('dark')
}
for (const link of menuLinks){
  link.classList.add ('dark')
}


    }

    else{
      onLigth()
    }
   
  }
  
  header.switcher.addEventListener('change', onDark)