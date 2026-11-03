(() => {
  const G = window.GALLERY || {}, P = window.PROJECTS || [];
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const find = (f, n) => (G[f] || []).find(i => i.name === n);
  const img = (i, alt, size = "thumb") =>
    `<img src="${i[size]}" width="${i.w}" height="${i.h}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
  document.documentElement.classList.add("js");

  // Cards fade in once when scrolled into view (skipped with reduced motion)
  const io = !reduce && "IntersectionObserver" in window
    ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -6% 0px" })
    : null;

  function home() {
    const box = $("#works");
    P.forEach(p => {
      const c = p.cover && find(p.cover.folder, p.cover.name);
      const a = document.createElement("a");
      a.className = "card"; a.href = "project.html?p=" + p.id;
      a.innerHTML = `<figure>${c ? img(c, "") : '<span class="ph" aria-hidden="true">▶</span>'}</figure><h3>${esc(p.title)}</h3><p>${esc(p.category)}</p>`;
      if (c && p.cover.pos) $("img", a).style.objectPosition = p.cover.pos;
      box.append(a);
      io ? io.observe(a) : a.classList.add("in");
    });
  }

  const lb = $("#lb");
  let L = [], n = 0, T = "";
  function show(i) { n = (i + L.length) % L.length; const im = $("img", lb); im.src = L[n].full; im.alt = `${T} ${n + 1}`; $(".cnt", lb).textContent = `${n + 1} / ${L.length}`; }
  function openLb(list, i, t) { L = list; T = t; show(i); lb.showModal(); }

  function detail() {
    const k = P.findIndex(p => p.id === new URLSearchParams(location.search).get("p"));
    const main = $("#project");
    if (k < 0) { main.innerHTML = '<section class="block"><h1>Project not found</h1><p class="lead">Go back to <a href="index.html#work">all work</a>.</p></section>'; return; }
    const p = P[k], nx = P[(k + 1) % P.length];
    document.title = `${p.title} — Ahmad Fadillah`;
    const links = (p.links || []).map(l => `<a class="mail" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("");
    main.innerHTML = `<header class="p-head"><a class="back" href="index.html#work">Back to work</a><p class="cat">${esc(p.category)}</p><h1>${esc(p.title)}</h1><p class="lead">${esc(p.intro || "")}</p>${links}</header>`;
    p.sections.forEach(s => {
      const list = G[s.folder] || [], lay = s.layout || p.layout || "editorial";
      const sec = document.createElement("section"); sec.className = "block sec";
      sec.innerHTML = (s.title ? `<h2>${esc(s.title)}</h2>` : "") + (s.text ? `<p class="lead">${esc(s.text)}</p>` : "");
      const wrap = document.createElement("div"); wrap.className = "g g-" + lay;
      list.forEach((i, x) => {
        const b = document.createElement("button"); b.type = "button"; b.className = "tile";
        b.setAttribute("aria-label", `Open image ${x + 1} of ${list.length}`);
        b.innerHTML = img(i, `${s.title || p.title} ${x + 1}`, lay === "phone" ? "thumb" : "full");
        b.onclick = () => openLb(list, x, s.title || p.title);
        wrap.append(b);
      });
      if (!list.length) wrap.innerHTML = `<p class="empty">No images yet. Add files to <code>images/${esc(s.folder)}</code>.</p>`;
      sec.append(wrap); main.append(sec);
    });
    main.insertAdjacentHTML("beforeend", `<a class="next block" href="project.html?p=${nx.id}"><span>Next project</span><strong>${esc(nx.title)}</strong></a>`);
    $(".x", lb).onclick = () => lb.close();
    $(".pv", lb).onclick = () => show(n - 1);
    $(".nx", lb).onclick = () => show(n + 1);
    lb.addEventListener("keydown", e => { if (e.key === "ArrowLeft") show(n - 1); if (e.key === "ArrowRight") show(n + 1); });
    lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
    let x0 = 0;
    lb.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 50) show(n + (d < 0 ? 1 : -1)); });
  }

  document.body.dataset.page === "home" ? home() : detail();

  // Light on glass surfaces follows the pointer (mouse only)
  if (!reduce && matchMedia("(pointer: fine)").matches) {
    let busy = false;
    addEventListener("pointermove", e => {
      if (busy) return; busy = true;
      requestAnimationFrame(() => {
        document.querySelectorAll(".glass").forEach(g => { const r = g.getBoundingClientRect(); g.style.setProperty("--lx", e.clientX - r.left + "px"); g.style.setProperty("--ly", e.clientY - r.top + "px"); });
        busy = false;
      });
    });
  }
})();
