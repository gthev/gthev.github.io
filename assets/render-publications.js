// Construit le HTML des publications a partir de PUBLICATIONS
// (assets/publications-data.js) dans l'element #pub-list.
// options.limit : nombre max d'entrees (omettre pour tout afficher).
function renderPublications(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const sorted = [...PUBLICATIONS].sort((a, b) => b.year - a.year);
  const items = options.limit ? sorted.slice(0, options.limit) : sorted;

  let html = "";

  items.forEach(pub => {
    const links = Object.entries(pub.links || {})
      .map(([label, url]) => `<a href="${url}">${label}</a>`)
      .join(" ");

    html += `
      <article class="pub-entry">
        <p class="pub-year">${pub.year}</p>
        <img class="thumb" src="${pub.thumb}" alt="">
        <div>
          <span class="venue">${pub.venue}</span>
          <h3>${pub.title}</h3>
          <p class="authors">${pub.authors}</p>
          <p class="summary">${pub.summary}</p>
          <p class="links">
            ${links}
            <button class="bibtex-btn" data-bibtex="${pub.bibtex.replace(/"/g, '&quot;')}">BibTeX</button>
          </p>
        </div>
      </article>`;
  });

  container.innerHTML = html;

  container.querySelectorAll(".bibtex-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(btn.dataset.bibtex);
      const old = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = old), 1200);
    });
  });
}