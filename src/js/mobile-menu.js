// alert("test")

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuButton = document.getElementById('close-menu');
  const body = document.body;

  toggleButton.addEventListener('click', function () {
    mobileMenu.style.right = '0px';
    toggleButton.style.display = 'none';
    closeMenuButton.style.display = 'block';
    body.style.overflow = 'hidden';
  });

  closeMenuButton.addEventListener('click', function () {
    mobileMenu.style.right = '-100%';
    toggleButton.style.display = 'block';
    closeMenuButton.style.display = 'none';
    body.style.overflow = 'auto';
  });
});
