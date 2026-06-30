(function () {
  const data = window.SITE_CONTENT;
  if (!data) {
    document.body.innerHTML =
      "<p style='padding:40px;font-family:monospace'>content.js não encontrado ou inválido.</p>";
    return;
  }

  const toHexAddr = (i) => "0x" + i.toString(16).padStart(2, "0").toUpperCase();

  // ---- Hero ----
  document.getElementById("profile-name").textContent = data.profile.name;
  document.getElementById("profile-role").textContent = data.profile.role;
  document.getElementById("profile-tagline").textContent = data.profile.tagline;
  document.getElementById("profile-location").textContent = data.profile.location || "";
  document.title = `${data.profile.name} — ${data.profile.role}`;

  const linksEl = document.getElementById("profile-links");
  (data.links || [])
    .filter((l) => l.url)
    .forEach((l) => {
      const a = document.createElement("a");
      a.href = l.url;
      a.textContent = l.label;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      linksEl.appendChild(a);
    });

  // ---- Articles (datasheet) ----
  const table = document.getElementById("articles-table");
  const header = document.createElement("div");
  header.className = "ds-header-row";
  header.innerHTML = `<span>addr</span><span>tag</span><span>conteúdo</span><span>data</span>`;
  table.appendChild(header);

  (data.articles || []).forEach((art, i) => {
    const hasExternalLink = !!art.url;
    const hasLangs = art.langs && (art.langs.pt || art.langs.en);
    const isClickable = hasExternalLink && !hasLangs;

    const row = document.createElement(isClickable ? "a" : "div");
    row.className = "ds-row";
    row.setAttribute("data-link", isClickable);
    if (isClickable) {
      row.href = art.url;
      row.target = "_blank";
      row.rel = "noopener noreferrer";
    }

    let langBadges = "";
    if (hasLangs) {
      if (art.langs.pt) {
        langBadges += `<a class="lang-badge" href="artigo.html?src=${encodeURIComponent(
          art.langs.pt
        )}&lang=pt">PT</a>`;
      }
      if (art.langs.en) {
        langBadges += `<a class="lang-badge" href="artigo.html?src=${encodeURIComponent(
          art.langs.en
        )}&lang=en">EN</a>`;
      }
    }

    row.innerHTML = `
      <span class="ds-addr">${toHexAddr(i)}</span>
      <span class="ds-tag">${art.tag || "—"}</span>
      <span class="ds-content">
        <div class="ds-title">${art.title}</div>
        <div class="ds-summary">${art.summary || ""}</div>
        ${langBadges ? `<div class="ds-langs">${langBadges}</div>` : ""}
      </span>
      <span class="ds-date">${art.date || ""}</span>
    `;
    table.appendChild(row);
  });

  // ---- Projects ----
  const grid = document.getElementById("projects-grid");
  (data.projects || []).forEach((p) => {
    const card = document.createElement(p.url ? "a" : "div");
    card.className = "project-card";
    if (p.url) {
      card.href = p.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }
    card.innerHTML = `
      <div class="p-name">${p.name}</div>
      <div class="p-desc">${p.description || ""}</div>
    `;
    grid.appendChild(card);
  });

  // ---- Footer ----
  document.getElementById("footer-text").textContent = data.footer?.text || "";
})();
