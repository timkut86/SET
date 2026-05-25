const btn = document.querySelectorAll('button');
btn.forEach((b) => {
  b.addEventListener('click', () => {
    el.style.cursor = 'pointer';
  });
});