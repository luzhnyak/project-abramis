document.addEventListener('DOMContentLoaded', function () {
  let scrollToTopBtn = document.querySelector('.scroll-to-top');

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  }

  scrollToTopBtn.addEventListener('click', function () {
    smoothScrollToTop();
  });

  function smoothScrollToTop() {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScrollToTop);
      window.scrollTo(0, currentScroll - currentScroll / 15);
    }
  }
});
