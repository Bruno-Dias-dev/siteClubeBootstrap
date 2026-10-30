// Small interactions for the recreated landing page.
document.querySelectorAll('.carousel-dots button').forEach((dot) => {
  dot.addEventListener('click', () => {
    document.querySelector('.carousel-dots button.active')?.classList.remove('active');
    dot.classList.add('active');
  });
});

// Close the mobile menu after choosing a section.
document.querySelectorAll('#mainNav .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('#mainNav');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});
