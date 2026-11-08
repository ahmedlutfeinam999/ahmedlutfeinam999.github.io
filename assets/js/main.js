(function () {
  var root = document.documentElement;
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  document.getElementById('theme').addEventListener('click', function () {
    var cur = root.getAttribute('data-theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  var menu = document.getElementById('menu'), nav = document.getElementById('nav');
  menu.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { nav.classList.remove('open'); menu.setAttribute('aria-expanded', false); } });

  var lb = document.getElementById('lb'), lbi = lb.querySelector('img'), lbp = lb.querySelector('p');
  function close() { lb.hidden = true; }
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (t.matches && t.matches('img[data-zoom]')) { lbi.src = t.src; lbi.alt = t.alt; lbp.textContent = t.alt; lb.hidden = false; }
    else if (!lb.hidden && (t === lb || t.className === 'lb-x')) close();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
