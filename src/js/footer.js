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
  
    instanceEl.innerHTML = `<div class="modal modal-our-team container">
    <section class="our-team">
      <button class="modal-close-btn" type="button" aria-label="close">
        <img class="modal-close-svg" src="${iconClose}" alt="" width="24" height="24"/>
      </button>
       <h2>The best team</h2>
      <ul class="list team-list">
      <li class = "team-item">
      <h3 class = "team-name">Oleh Luzhniak</h3>
      <p class = "team-position">Team leader</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Anna Matsarska</h3>
      <p class = "team-position">Scrum master</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Anna Boichuk</h3>
      <p class = "team-position">Developed dark theme feature, modal 'Our team'</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Bohdana Taraskina</h3>
      <p class = "team-position">position</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Viktoria Lytvyn</h3>
      <p class = "team-position">Developed funds, mobile menu and header</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Vitalii Lisnychenko</h3>
      <p class = "team-position">Developed modal for book preview</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Vlad Kravchenko</h3>
      <p class = "team-position">Developed section All Categories, Scrollbar menu (added dark theme styles)</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">name</h3>
      <p class = "team-position">position</p>
      </li>
      
      
      </ul>
    </section>
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