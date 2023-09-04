import * as basicLightbox from 'basiclightbox';
import iconClose from '../images/x-close.png';

const btnHeart = document.querySelector('.btn-footer')

function disableBodyScroll() {
    document.body.style.overflow = 'hidden';
  }
  
  function enableBodyScroll() {
    document.body.style.overflow = 'visible';
  }

  const instance = basicLightbox.create(`<div class="modal-team"></div>`, {
    onShow: () => {
      document.addEventListener('keydown', onEscDown);
      disableBodyScroll();
    },
    onClose: () => {
      document.removeEventListener('keydown', onEscDown);
      enableBodyScroll();
    },
  });

   function markupTeam() {
 
    instance.show();
  
    const instanceEl = document.querySelector('.modal-team');
  
    instanceEl.innerHTML = `<div class="our-team">
      <button class="modal-close-btn" type="button" aria-label="close">
        <img class="modal-close-svg" src="${iconClose}" alt="" width="24" height="24"/>
      </button>
      <div class="modal modal-our-team container">
      <ul class="list team-list">
      <li class = "team-item">
      <h2 class = "team-name">name</h2>
      <p class = "team-position">position</p>
      </li>
      <li class = "team-item">
      <h2 class = "team-name">name</h2>
      <p class = "team-position">position</p>
      </li>
      <li class = "team-item">
      <h2 class = "team-name">name</h2>
      <p class = "team-position">position</p>
      </li>
      <li class = "team-item">
      <h2 class = "team-name">name</h2>
      <p class = "team-position">position</p>
      </li>
      <li class = "team-item">
      <h2 class = "team-name">name</h2>
      <p class = "team-position">position</p>
      </li>
      <li class = "team-item">
      <h2 class = "team-name">name</h2>
      <p class = "team-position">position</p>
      </li>
      <li class = "team-item">
      <h2 class = "team-name">name</h2>
      <p class = "team-position">position</p>
      </li>
      <li class = "team-item">
      <h2 class = "team-name">name</h2>
      <p class = "team-position">position</p>
      </li>
      
      
      </ul>
    </div>
    `;
  
   
    const closeBtn = document.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', onClickbBtn);
  }
  
  function onClickbBtn(event) {
    instance.close();
  }
  
  function onEscDown(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }

  btnHeart.addEventListener('click', markupTeam)