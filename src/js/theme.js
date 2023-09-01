
const body = document.querySelector('body')
const switcher = document.querySelector('.theme')

function onLigth() {
    body.classList.remove('body-dark');
}
  
  function onDark(e){
    if(e.currentTarget.checked){
      body.classList.add("body-dark");
    }

    else{
      onLigth()
    }
    // body.className = "";
   
  }
  
  switcher.addEventListener('change', onDark)