/**
 * Alex Imas — Personal Academic Website (www.aleximas.com)
 * Swiss Tabular Index Controller
 */

(function () {
  const state = {
    activePage: window.location.hash === "#teaching" ? "teaching" : "home",
    categoryFilter: "all",
    searchQuery: "",
    expandAll: false,
    editMode: false,
    editsLog: {}
  };

  function init() {
    if (!window.ALEX_SITE_DATA) return;
    document.documentElement.setAttribute("data-design", "index");
    renderHeader();
    renderControls();
    renderAllSections();
    bindEvents();

    window.addEventListener("hashchange", () => {
      const nextPage = window.location.hash === "#teaching" ? "teaching" : "home";
      if (nextPage !== state.activePage) {
        state.activePage = nextPage;
        renderHeader();
        renderAllSections();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  function buildSiteNavHtml(p) {
    return (p.siteNav || [])
      .map((item) => {
        if (item.type === "external") {
          return `<a href="${item.url}" target="_blank" rel="noopener" class="site-nav-item">${item.label} ↗</a>`;
        }
        const isActive = state.activePage === item.id;
        return `<a href="${item.id === "teaching" ? "#teaching" : "#"}" data-page-nav="${item.id}" class="site-nav-item ${
          isActive ? "active-page" : ""
        }">${item.label}</a>`;
      })
      .join("");
  }

  function renderHeader() {
    const p = window.ALEX_SITE_DATA.profile;
    const introEl = document.getElementById("site-intro");
    if (!introEl || !p) return;

    const siteNavHtml = buildSiteNavHtml(p);

    if (state.activePage === "teaching") {
      introEl.innerHTML = `
        <div class="teaching-page-topbar">
          <h1 class="author-title"><a href="#" data-page-nav="home">${p.name}</a></h1>
          <nav class="site-top-nav" aria-label="Primary Navigation">
            ${siteNavHtml}
          </nav>
        </div>
      `;
      return;
    }

    const ledgerHtml = (p.ledgerRows || [])
      .map(
        (r, i) => `
      <div class="ledger-row ${r.primary ? "ledger-primary" : "ledger-secondary"}" data-editable="true" data-ref="LEDGER-${i + 1}">
        <span class="ledger-inst">${r.institution}</span>
        <span class="ledger-role">${r.role}</span>
      </div>
    `
      )
      .join("");

    const bioHtml = (p.bioParagraphs || [])
      .map((para, i) => `<p data-editable="true" data-ref="BIO-P${i + 1}">${para}</p>`)
      .join("");

    const featuredLinesHtml = (p.featuredLines || [])
      .map((line, i) => `<div class="featured-line-item" data-editable="true" data-ref="LINE-${i + 1}">${line}</div>`)
      .join("");

    const navLinksHtml = window.ALEX_SITE_DATA.sections
      .map(
        (s) => `<a href="#${s.id}"><span class="nav-num">${s.num}</span>${s.shortLabel || s.title}</a>`
      )
      .join("");

    introEl.innerHTML = `
      <div class="profile-grid">
        <img src="${p.portrait}" alt="${p.name}" class="profile-portrait" />
        <div class="profile-meta">
          <div class="name-contact-row">
            <h1 class="author-title" data-editable="true" data-ref="PROFILE-NAME">${p.name}</h1>
            <nav class="site-top-nav" aria-label="Primary Navigation">
              ${siteNavHtml}
            </nav>
          </div>
          <div class="swiss-ledger">${ledgerHtml}</div>
        </div>
      </div>

      <div class="bio-block">
        <div class="bio-prose">${bioHtml}</div>
        ${featuredLinesHtml ? `<div class="featured-lines">${featuredLinesHtml}</div>` : ""}
      </div>

      <nav class="minimal-nav" aria-label="Sections">
        ${navLinksHtml}
      </nav>
    `;
  }

  function renderControls() {
    const barEl = document.getElementById("topic-filter-bar");
    if (!barEl) return;

    const categories = [
      { id: "all", label: "All Sections" },
      ...window.ALEX_SITE_DATA.sections.map((s) => ({
        id: s.id,
        label: s.shortLabel || s.title
      })),
      { id: "teaching", label: "Teaching" }
    ];

    barEl.innerHTML = `
      <span class="topic-filter-label">Filter:</span>
      ${categories
        .map(
          (c) => `
        <button type="button" class="topic-tag filter-category-trigger ${
          state.categoryFilter === c.id ? "active-topic" : ""
        }" data-category="${c.id}">
          ${c.label}
        </button>
      `
        )
        .join("")}
    `;

    const expandBtn = document.getElementById("expand-all-btn");
    if (expandBtn) {
      expandBtn.textContent = state.expandAll ? "Collapse All Abstracts" : "Expand All Abstracts";
    }
  }

  function matchesSearch(item) {
    if (!state.searchQuery) return true;
    const q = state.searchQuery.toLowerCase();
    const haystack = [
      item.title || "",
      item.coauthors || "",
      item.venue || "",
      item.abstract || "",
      ...(item.awards || []),
      ...(item.badges || [])
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  }

  function renderResearchItem(item) {
    const hasAbstract = Boolean(item.abstract);
    const drawerTitle = item.drawerLabel || "Abstract";

    const badgesHtml = (item.badges || [])
      .map((b) => `<span class="item-badge">${b}</span>`)
      .join("");

    const awardsHtml =
      item.awards && item.awards.length
        ? `<div class="award-line" data-editable="true" data-ref="${item.id}-AWARDS">★ ${item.awards.join(" · ")}</div>`
        : "";

    const primaryLinksHtml = (item.links || [])
      .map(
        (l) =>
          `<a href="${l.url}" target="_blank" rel="noopener" class="inline-link" onclick="event.stopPropagation();">${l.label} ↗</a>`
      )
      .join("");

    const mediaLinksHtml =
      item.mediaLinks && item.mediaLinks.length
        ? `<span class="media-links-group" onclick="event.stopPropagation();">Media Summaries: ${item.mediaLinks
            .map((m) => `<a href="${m.url}" target="_blank" rel="noopener">${m.label}</a>`)
            .join(", ")}</span>`
        : "";

    const abstractToggleHtml = hasAbstract
      ? `<button type="button" class="abstract-toggle-btn">[${drawerTitle} ▾]</button>`
      : "";

    const abstractParagraphs = hasAbstract
      ? item.abstract
          .split("\n\n")
          .map((p, idx) => `<p data-editable="true" data-ref="${item.id}-ABS-${idx + 1}">${p}</p>`)
          .join("")
      : "";

    return `
      <article class="writing-row ${state.expandAll && hasAbstract ? "expanded" : ""}" data-row-id="${item.id}">
        <div class="writing-main research-grid ${hasAbstract ? "has-abstract toggle-drawer-trigger" : ""}">
          <div class="writing-title-col">
            <div class="writing-title">
              <span class="ref-code">[${item.id}]</span>
              <span data-editable="true" data-ref="${item.id}-TITLE">${item.title}</span>
              ${badgesHtml}
            </div>
            ${awardsHtml}
            <div class="inline-links-bar">
              ${abstractToggleHtml}
              ${primaryLinksHtml}
              ${mediaLinksHtml}
            </div>
          </div>
          <div class="writing-authors" data-editable="true" data-ref="${item.id}-AUTHORS">${item.coauthors || "—"}</div>
          <div class="writing-venue" data-editable="true" data-ref="${item.id}-VENUE">${item.venue || ""}</div>
        </div>
        ${
          hasAbstract
            ? `<div class="writing-drawer">${abstractParagraphs}</div>`
            : ""
        }
      </article>
    `;
  }

  function renderTeachingRow(c) {
    const linksHtml =
      c.links && c.links.length
        ? c.links
            .map(
              (l) =>
                `<a href="${l.url}" target="_blank" rel="noopener" class="inline-link">${l.label} ↗</a>`
            )
            .join(" &nbsp;·&nbsp; ")
        : `<span style="color:var(--text-muted); font-family:var(--font-mono); font-size:0.7rem;">—</span>`;

    return `
      <article class="writing-row" data-row-id="${c.id}">
        <div class="writing-main teaching-grid">
          <div class="writing-title">
            <span class="ref-code">[${c.id}]</span>
            <span data-editable="true" data-ref="${c.id}-COURSE">${c.course}</span>
          </div>
          <div class="writing-authors" data-editable="true" data-ref="${c.id}-TERM">${c.term}</div>
          <div class="writing-venue">${linksHtml}</div>
        </div>
      </article>
    `;
  }

  function renderAllSections() {
    const container = document.getElementById("sections-container");
    if (!container) return;

    const htmlParts = [];

    if (state.activePage === "teaching") {
      const t = window.ALEX_SITE_DATA.teaching;
      if (t) {
        const curr = t.currentClasses || [];
        const past = t.pastClasses || [];
        htmlParts.push(`
          <section class="minimal-section" id="teaching">
            <div class="section-head">
              <h2 class="section-label">${t.title}</h2>
              <span class="section-meta">${curr.length + past.length} Courses</span>
            </div>
            <div class="writing-table-head teaching-grid">
              <div>Course</div>
              <div>Term</div>
              <div>Syllabus</div>
            </div>
            <div class="teaching-subhead">Current Classes</div>
            <div class="writing-list">
              ${curr.map(renderTeachingRow).join("")}
            </div>
            <div class="teaching-subhead">Past Classes Taught</div>
            <div class="writing-list">
              ${past.map(renderTeachingRow).join("")}
            </div>
            <p class="teaching-note" data-editable="true" data-ref="TEACHING-NOTE">${t.footerNoteHtml}</p>
          </section>
        `);
      }
      container.innerHTML = htmlParts.join("");
      syncEditableAttributes();
      return;
    }

    window.ALEX_SITE_DATA.sections.forEach((sec) => {
      if (state.categoryFilter !== "all" && state.categoryFilter !== sec.id) return;

      const filteredItems = sec.items.filter(matchesSearch);
      if (filteredItems.length === 0 && state.searchQuery) return;

      const countLabel = `${filteredItems.length} ${
        sec.id === "books"
          ? filteredItems.length === 1
            ? "Book"
            : "Books"
          : filteredItems.length === 1
          ? "Item"
          : "Items"
      }`;

      htmlParts.push(`
        <section class="minimal-section" id="${sec.id}">
          <div class="section-head">
            <h2 class="section-label">${sec.num} · ${sec.title}</h2>
            <span class="section-meta">${countLabel}</span>
          </div>
          <div class="writing-table-head research-grid">
            <div>Title &amp; Materials</div>
            <div>Co-Authors</div>
            <div>Publication / Status</div>
          </div>
          <div class="writing-list">
            ${filteredItems.map(renderResearchItem).join("")}
          </div>
        </section>
      `);
    });

    container.innerHTML = htmlParts.join("");
    syncEditableAttributes();
  }

  function syncEditableAttributes() {
    document.body.classList.toggle("edit-mode", state.editMode);
    document.querySelectorAll('[data-editable="true"]').forEach((el) => {
      if (state.editMode) {
        el.setAttribute("contenteditable", "true");
      } else {
        el.removeAttribute("contenteditable");
      }
    });
  }

  function bindEvents() {
    document.body.addEventListener("click", (e) => {
      if (state.editMode && e.target.closest('[data-editable="true"]')) return;

      const pageNavBtn = e.target.closest("[data-page-nav]");
      if (pageNavBtn) {
        e.preventDefault();
        const targetPage = pageNavBtn.getAttribute("data-page-nav");
        state.activePage = targetPage;
        if (targetPage === "teaching") {
          history.pushState(null, "", "#teaching");
        } else {
          history.pushState(null, "", window.location.pathname);
        }
        renderHeader();
        renderAllSections();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const catBtn = e.target.closest(".filter-category-trigger");
      if (catBtn) {
        const cat = catBtn.getAttribute("data-category");
        state.categoryFilter = state.categoryFilter === cat && cat !== "all" ? "all" : cat;
        renderControls();
        renderAllSections();
        return;
      }

      if (e.target.closest("a")) return;

      const drawerTrigger = e.target.closest(".toggle-drawer-trigger");
      if (drawerTrigger) {
        const row = drawerTrigger.closest(".writing-row");
        if (row) row.classList.toggle("expanded");
      }
    });

    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value.trim();
        renderAllSections();
      });
    }

    const expandAllBtn = document.getElementById("expand-all-btn");
    if (expandAllBtn) {
      expandAllBtn.addEventListener("click", () => {
        state.expandAll = !state.expandAll;
        renderControls();
        renderAllSections();
      });
    }

    document.body.addEventListener("input", (e) => {
      const target = e.target.closest("[data-ref]");
      if (target) {
        const ref = target.getAttribute("data-ref");
        state.editsLog[ref] = target.innerText.trim();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
