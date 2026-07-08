// Aggiungi, rimuovi o riordina i link da qui: si aggiornano automaticamente nella pagina.
const LINKS = [
  {
    label: 'Instagram',
    meta: '@piercing.nativi',
    url: 'https://www.instagram.com/piercing.nativi/',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.6"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>'
  },
  {
    label: 'TikTok',
    meta: '@piercing.nativi',
    url: 'https://www.tiktok.com/@piercing.nativi',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16.5 2.5c.4 2.4 2 4 4.5 4.2v3.2c-1.7.1-3.2-.4-4.5-1.3v6.9a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v3.3a2.6 2.6 0 1 0 1.8 2.5V2.5h3.2Z"/></svg>'
  },
  {
    label: 'Lascia una recensione',
    meta: 'Dicci com\u2019\u00e8 andata su Google',
    url: 'https://g.page/r/CScPWb18Ajj8EAE/review',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.1 6.6.7-5 4.5 1.4 6.6L12 16.9l-5.9 3.5L7.5 13.8l-5-4.5 6.6-.7L12 2.5Z"/></svg>',
    highlight: true
  }
];

const linksContainer = document.getElementById('links');

LINKS.forEach((link) => {
  const a = document.createElement('a');
  a.className = 'link-btn' + (link.highlight ? ' link-btn--gold' : '');
  a.href = link.url;
  a.target = '_blank';
  a.rel = 'noopener';

  a.innerHTML = `
    <span class="link-btn__icon">${link.icon}</span>
    <span class="link-btn__text">
      <span class="link-btn__label">${link.label}</span>
      <span class="link-btn__meta">${link.meta}</span>
    </span>
    <span class="link-btn__arrow" aria-hidden="true">&#8594;</span>
  `;

  linksContainer.appendChild(a);
});

document.getElementById('year').textContent = new Date().getFullYear();
