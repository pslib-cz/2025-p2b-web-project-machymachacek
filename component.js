(function () {
  const page = document.body.dataset.page || '';

  const navLinks = [
    { href: 'index.html',   label: 'Domov',   id: 'domov' },
    { href: 'burgery.html', label: 'Burgery', id: 'burgery' },
    { href: 'cenik.html',   label: 'Ceník',   id: 'cenik' },
    { href: 'o-nas.html',   label: 'O nás & Termíny', id: 'o-nas' },
    { href: 'kontakt.html', label: 'Kontakt', id: 'kontakt' },
  ];

  const liItems = navLinks.map(l =>
    `<li><a href="${l.href}" class="${page === l.id ? 'active' : ''}">${l.label}</a></li>`
  ).join('');

  const navHTML = `
<nav>
  <a href="index.html" class="nav-logo">Burger <span>Bistro</span> Liberec</a>
  <button class="nav-toggle" id="navToggle" aria-label="Otevřít menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    ${liItems}
    <li><a href="#" class="btn-rezervace">Rezervace</a></li>
  </ul>
</nav>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
})();
