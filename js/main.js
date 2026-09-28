/* ==========================================================
   Zee Fashion Palace — shared behaviour
   ========================================================== */
(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const waLink = (text) =>
    `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

  const formatPrice = (p) =>
    p === "" || p == null
      ? "Price on request"
      : `${SITE.currency}${Number(p).toLocaleString()}`;

  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* ---------- Reveal on scroll ---------- */
  const io =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) =>
            entries.forEach((en) => {
              if (en.isIntersecting) {
                en.target.classList.add("visible");
                io.unobserve(en.target);
              }
            }),
          { threshold: 0.12 }
        )
      : null;
  function observeReveals(root = document) {
    $$(".reveal:not(.visible)", root).forEach((el) => (io ? io.observe(el) : el.classList.add("visible")));
  }
  /* ---------- Icons ---------- */
  const ICONS = {
    whatsapp:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.9.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.23-4.25 9.46-9.47 9.46zm8.06-17.52A11.32 11.32 0 0 0 12.04.65C5.76.65.65 5.76.65 12.04c0 2 .52 3.97 1.52 5.7L.55 23.65l6.04-1.58a11.37 11.37 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.33-8.05z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M7 2.9h10A4.1 4.1 0 0 1 21.1 7v10a4.1 4.1 0 0 1-4.1 4.1H7A4.1 4.1 0 0 1 2.9 17V7A4.1 4.1 0 0 1 7 2.9z"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/></svg>',
    tiktok:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.6 2h-3.3v13.2a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9a6.3 6.3 0 1 0 5.3 6.2V8.6a7.9 7.9 0 0 0 4.4 1.4V6.6A4.5 4.5 0 0 1 16.6 2z"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.4 21.9v-8.2h2.8l.4-3.2h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V4a23 23 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.2v3.2H10v8.2h3.4z"/></svg>',
  };

  const LOGO = `
    <svg class="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 26 L20 14 L26 22 L32 10 L38 22 L44 14 L52 26" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="20" cy="13" r="1.8" fill="currentColor"/><circle cx="32" cy="9" r="1.8" fill="currentColor"/><circle cx="44" cy="13" r="1.8" fill="currentColor"/>
      <path d="M10 60 V36 A22 12 0 0 1 54 36 V60" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="32" y="52" text-anchor="middle" font-family="Playfair Display, serif" font-size="14" font-weight="700" fill="currentColor" letter-spacing="1">ZFP</text>
    </svg>`;

  /* ---------- Header & footer ---------- */
  const NAV = [
    ["index.html", "Home"],
    ["collections.html", "Collections"],
    ["custom-order.html", "Custom Order"],
    ["about.html", "About"],
    ["contact.html", "Contact"],
  ];
  const page = location.pathname.split("/").pop() || "index.html";

  const socialLinks = () =>
    Object.entries(SITE.socials)
      .filter(([, url]) => url)
      .map(
        ([name, url]) =>
          `<a href="${url}" target="_blank" rel="noopener" aria-label="${name}">${ICONS[name] || name}</a>`
      )
      .join("");

  const header = $("#site-header");
  if (header) {
    header.innerHTML = `
      <div class="container nav-wrap">
        <a href="index.html" class="logo" aria-label="${SITE.brand} home">
          ${LOGO}
          <span class="logo-text">Zee<small>Fashion Palace</small></span>
        </a>
        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="main-nav">
          <span></span><span></span><span></span>
        </button>
        <nav id="main-nav" class="main-nav">
          ${NAV.map(
            ([href, label]) =>
              `<a href="${href}"${href === page ? ' aria-current="page"' : ""}>${label}</a>`
          ).join("")}
          <a href="${waLink(`Hello ${SITE.brand}, I'd like to make an enquiry.`)}" target="_blank" rel="noopener" class="btn btn-gold btn-sm nav-cta">Chat with us</a>
        </nav>
      </div>`;

    const toggle = $(".nav-toggle", header);
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("no-scroll", open);
    });

    const onScroll = () => header.classList.toggle("scrolled", scrollY > 20);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const footer = $("#site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="container footer-grid">
        <div>
          <a href="index.html" class="logo logo-light">${LOGO}<span class="logo-text">Zee<small>Fashion Palace</small></span></a>
          <p class="footer-note">Bespoke fashion, handmade with love. Every stitch tells your story.</p>
          <div class="socials">${socialLinks()}</div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Visit the Atelier</h4>
          <ul>
            <li>${escapeHtml(SITE.address)}</li>
            <li><a href="tel:${SITE.phone.replace(/\s/g, "")}">${escapeHtml(SITE.phone)}</a></li>
            <li><a href="mailto:${SITE.email}">${escapeHtml(SITE.email)}</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© ${new Date().getFullYear()} ${SITE.brand}. All rights reserved.</span>
      </div>`;
  }

  // Floating WhatsApp button
  const fab = document.createElement("a");
  fab.className = "wa-fab";
  fab.href = waLink(`Hello ${SITE.brand}, I'd like to make an enquiry.`);
  fab.target = "_blank";
  fab.rel = "noopener";
  fab.setAttribute("aria-label", "Chat on WhatsApp");
  fab.innerHTML = ICONS.whatsapp;
  document.body.appendChild(fab);

  /* ---------- Fill contact details: <span data-site="phone"> ---------- */
  $$("[data-site]").forEach((el) => {
    const key = el.dataset.site;
    if (key === "hours") {
      el.innerHTML = SITE.hours
        .map(([d, t]) => `<li><span>${escapeHtml(d)}</span><span>${escapeHtml(t)}</span></li>`)
        .join("");
    } else if (key === "socials") {
      el.innerHTML = socialLinks();
    } else if (key === "map") {
      el.src = SITE.mapEmbed;
    } else if (SITE[key] != null) {
      el.textContent = SITE[key];
      if (el.tagName === "A") {
        if (key === "phone") el.href = `tel:${SITE.phone.replace(/\s/g, "")}`;
        if (key === "email") el.href = `mailto:${SITE.email}`;
      }
    }
  });

  /* ---------- WhatsApp links: <a data-wa="message"> ---------- */
  $$("[data-wa]").forEach((el) => {
    el.href = waLink(el.dataset.wa || `Hello ${SITE.brand}!`);
    el.target = "_blank";
    el.rel = "noopener";
  });

  /* ---------- Product grid ---------- */
  const categoryLabel = (key) => (CATEGORIES.find(([k]) => k === key) || [, key])[1];

  const card = (p) => `
    <article class="product-card reveal" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${escapeHtml(p.name)}">
      <div class="product-img"><img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy"></div>
      <div class="product-info">
        <span class="eyebrow">${categoryLabel(p.category)}</span>
        <h3>${escapeHtml(p.name)}</h3>
        <p class="price">${formatPrice(p.price)}</p>
      </div>
    </article>`;

  const grids = $$("[data-products]");
  const renderGrid = (grid, filter) => {
    const mode = grid.dataset.products;
    let items = mode === "featured" ? PRODUCTS.filter((p) => p.featured).slice(0, 6) : PRODUCTS;
    if (filter && filter !== "all") items = items.filter((p) => p.category === filter);
    grid.innerHTML = items.length
      ? items.map(card).join("")
      : `<p class="empty">New pieces coming soon — <a data-wa>ask us about a custom design</a>.</p>`;
    $$("[data-wa]", grid).forEach((a) => {
      a.href = waLink(`Hello ${SITE.brand}, I'd like a custom design.`);
      a.target = "_blank";
    });
    observeReveals(grid);
  };

  /* ---------- Filters ---------- */
  const filterBar = $("[data-filters]");
  if (filterBar) {
    const initial = new URLSearchParams(location.search).get("category") || "all";
    filterBar.innerHTML = CATEGORIES.map(
      ([key, label]) =>
        `<button class="chip" data-filter="${key}" aria-pressed="${key === initial}">${label}</button>`
    ).join("");
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-filter]");
      if (!btn) return;
      $$(".chip", filterBar).forEach((c) => c.setAttribute("aria-pressed", c === btn));
      grids.forEach((g) => renderGrid(g, btn.dataset.filter));
      const url = new URL(location);
      btn.dataset.filter === "all"
        ? url.searchParams.delete("category")
        : url.searchParams.set("category", btn.dataset.filter);
      history.replaceState(null, "", url);
    });
    grids.forEach((g) => renderGrid(g, initial));
  } else {
    grids.forEach((g) => renderGrid(g));
  }

  /* ---------- Product modal ---------- */
  let modal, lastFocus;
  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.classList.remove("no-scroll");
    lastFocus && lastFocus.focus();
  };
  const openModal = (p) => {
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "modal";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      document.body.appendChild(modal);
      modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.closest(".modal-close")) closeModal();
      });
    }
    lastFocus = document.activeElement;
    modal.setAttribute("aria-label", p.name);
    modal.innerHTML = `
      <div class="modal-box">
        <button class="modal-close" aria-label="Close">&times;</button>
        <div class="modal-img"><img src="${p.image.replace("w=800&h=1040", "w=1000&h=1300")}" alt="${escapeHtml(p.name)}"></div>
        <div class="modal-body">
          <span class="eyebrow">${categoryLabel(p.category)}</span>
          <h2>${escapeHtml(p.name)}</h2>
          <p class="price">${formatPrice(p.price)}</p>
          <div class="divider"></div>
          <p>${escapeHtml(p.description)}</p>
          <p class="small muted">Every piece is made to your measurements. Colours and fabrics can be customised.</p>
          <div class="modal-actions">
            <a class="btn btn-whatsapp" target="_blank" rel="noopener"
               href="${waLink(`Hello ${SITE.brand}! I'm interested in the "${p.name}" (${formatPrice(p.price)}). Is it available?`)}">
              ${ICONS.whatsapp} Order on WhatsApp</a>
            <a class="btn btn-outline" href="custom-order.html?style=${encodeURIComponent(p.name)}">Customise this look</a>
          </div>
        </div>
      </div>`;
    requestAnimationFrame(() => modal.classList.add("open"));
    document.body.classList.add("no-scroll");
    $(".modal-close", modal).focus();
  };

  document.addEventListener("click", (e) => {
    const c = e.target.closest(".product-card");
    if (!c) return;
    const p = PRODUCTS.find((x) => x.id === c.dataset.id);
    if (p) openModal(p);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      if (header && header.classList.contains("nav-open")) $(".nav-toggle", header).click();
    }
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("product-card")) {
      e.preventDefault();
      e.target.click();
    }
  });

  /* ---------- Custom order form ---------- */
  const form = $("#custom-order-form");
  if (form) {
    const style = new URLSearchParams(location.search).get("style");
    if (style && form.elements.notes) form.elements.notes.value = `I love the "${style}" — `;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const get = (k) => (data.get(k) || "").toString().trim();

      const lines = [`*New Custom Order Request — ${SITE.brand}*`, ""];
      const add = (label, val) => val && lines.push(`*${label}:* ${val}`);
      add("Name", get("name"));
      add("Phone", get("phone"));
      add("Outfit", get("outfit"));
      add("Occasion", get("occasion"));
      add("Needed by", get("date"));
      add("Budget", get("budget"));

      const measures = $$("[data-measure]", form)
        .map((i) => (i.value.trim() ? `${i.dataset.measure}: ${i.value.trim()}` : ""))
        .filter(Boolean);
      if (measures.length) {
        const unit = get("unit");
        lines.push("", `*Measurements (${unit}):*`, ...measures.map((m) => `• ${m}`));
      } else {
        lines.push("", "_I'd like to book a measurement session._");
      }
      if (get("fabric") || get("notes")) lines.push("");
      add("Fabric/colour", get("fabric"));
      add("Notes", get("notes"));

      window.open(waLink(lines.join("\n")), "_blank", "noopener");
      $(".form-success", form.parentElement)?.removeAttribute("hidden");
    });
  }

  /* ---------- Testimonials slider ---------- */
  const slider = $("[data-slider]");
  if (slider) {
    const slides = $$(".testimonial", slider);
    const dots = $(".slider-dots", slider);
    let i = 0, timer;
    dots.innerHTML = slides
      .map((_, n) => `<button aria-label="Show testimonial ${n + 1}"></button>`)
      .join("");
    const show = (n) => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("active", k === i));
      $$("button", dots).forEach((d, k) => d.setAttribute("aria-current", k === i));
    };
    const start = () => (timer = setInterval(() => show(i + 1), 6000));
    dots.addEventListener("click", (e) => {
      const idx = $$("button", dots).indexOf(e.target);
      if (idx > -1) { clearInterval(timer); show(idx); start(); }
    });
    show(0);
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) start();
  }

  observeReveals();
})();
