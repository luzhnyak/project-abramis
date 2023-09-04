import * as basicLightbox from 'basiclightbox';

`<div class="modal-uath">
  <button class="modal-uath-cls-btn" type="button" aria-label="close">
    <img
      class="modal-close-svg"
      src="${iconClose}"
      alt=""
      width="24"
      height="24"
    />
  </button>
  <form class="thank-form">
    <div class="contacts-feedback">
      <input
        class="log-name"
        type="text"
        name="name"
        id="name"
        placeholder="Your name..."
        required
      />
      <input
        type="mail"
        class="log-mail"
        name="mail"
        id="mail"
        placeholder="Your mail..."
        required
      />
      <input
        type="password"
        class="log-password"
        name="password"
        id="password"
        placeholder="Your password"
        required
      />
      <button class="sing-btn" type="submit">
        SING UP
      </button>
    </div>
  </form>
</div>`;
