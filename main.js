/*smooth scrolling of navbar elements - excludes last 3 items as they as links to different sites or files*/
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link, index) => {
  if (index < navLinks.length - 3) {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const targetOffsetTop = targetSection.offsetTop;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: 'smooth'
      });
    });
  }
});