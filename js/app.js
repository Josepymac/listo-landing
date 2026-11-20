/* ============================ RENDER ============================ */
const C = siteConfig, $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const on = o => o && o.enabled !== false;
const list = a => (Array.isArray(a) ? a : []).filter(on);
const phone = () => String(C.whatsapp.phone || "").replace(/\D/g, "");
const waOn = () => C.whatsapp.enabled && phone().length > 5;
const wa = m => `https://wa.me/${phone()}?text=${encodeURIComponent(m || C.whatsapp.defaultMessage)}`;
const waBtn = (txt, msg, cls = "btn btn-p") => waOn() ? `<a class="${cls}" href="${wa(msg)}" target="_blank" rel="noopener">${esc(txt)}</a>` : "";
const money = n => `${C.pricing.currency} ${Number(n).toLocaleString(C.pricing.locale)}`;
const head = (e, t, s) => `<div class="head">${e ? `<span class="eyebrow">${esc(e)}</span>` : ""}<h2>${esc(t)}</h2>${s ? `<p class="muted">${esc(s)}</p>` : ""}</div>`;
const socials = () => Object.values(C.socialMedia).filter(s => s.enabled && s.url);
const socialHtml = () => { const s = socials(); return s.length ? `<div class="soc">${s.map(x => `<a href="${esc(x.url)}" target="_blank" rel="noopener" aria-label="${esc(x.name)}" title="${esc(x.name)}">${esc(x.short)}</a>`).join("")}</div>` : ""; };

const S = {};
S.header = () => {
  const n = C.navigation; if (!on(n)) return "";
  const items = list(n.items).map(i => `<a href="${esc(i.href)}">${esc(i.label)}</a>`).join("");
  const cb = n.contactButton;
  return `<header><div class="wrap nav"><a class="logo" href="#top">${C.brand.logo ? `<img src="${esc(C.brand.logo)}" alt="${esc(C.brand.name)}">` : ""}${C.brand.logo ? "" : esc(C.brand.name)}</a>
  <button class="burger" aria-label="Abrir menú" aria-expanded="false">☰</button>
  <nav class="menu" aria-label="Principal">${items}${on(cb) ? waBtn(cb.label, cb.message, "btn btn-p") : ""}</nav></div></header>`;
};
S.hero = () => {
  const h = C.hero; if (!on(h)) return "";
  const ctas = [h.ctaHire, h.ctaBuy].filter(on).sort((a, b) => (a.order || 9) - (b.order || 9))
    .map(c => waBtn(c.text, c.message, c.style === "outline" ? "btn btn-o" : "btn btn-p")).join("");
  const fl = (h.floating || []).filter(on).slice(0, 3).map((f, i) => `<div class="fc fc${i + 1}"><span class="fi">${esc(f.icon)}</span><div><small>${esc(f.label)}</small><b>${esc(f.value)}</b></div></div>`).join("");
  const pr = h.proof, proof = pr && pr.text ? `<div class="proof">${(pr.avatars || []).map(x => `<img src="${esc(x)}" alt="">`).join("")}<span>${esc(pr.text)}</span></div>` : "";
  const stage = `<div class="stage">${h.image ? `<div class="mock main"><img src="${esc(h.image)}" alt="${esc(C.brand.name)}" fetchpriority="high"></div>` : ""}${h.phoneImage ? `<img class="phone" src="${esc(h.phoneImage)}" alt="">` : ""}${fl}</div>`;
  const sg = h.segments || [], seg = sg.length ? `<div class="strip" aria-label="Rubros"><div class="track">${[...sg, ...sg].map(s => `<span>${esc(s)}</span>`).join("")}</div></div>` : "";
  return `<section class="hero" id="top"><div class="blob b1"></div><div class="blob b2"></div><div class="wrap"><div class="hl">${h.eyebrow ? `<span class="eyebrow">${esc(h.eyebrow)}</span>` : ""}<h1>${esc(h.title)}</h1><p class="sub">${esc(h.subtitle)}</p>${h.extra ? `<p class="xt">${esc(h.extra)}</p>` : ""}
  <div class="ctas">${ctas}</div><div class="trust">${(h.badges || []).map(b => `<span>${esc(b)}</span>`).join("")}</div>${proof}</div>${stage}</div>${seg}</section>`;
};
S.trustBadges = () => {
  const t = C.trustBadges; if (!on(t)) return "";
  const l = list(t.logos).filter(x => x.image), lb = (t.labels || []).filter(Boolean);
  if (!l.length && !lb.length) return "";
  const logos = l.length ? `<div class="logos">${l.map(x => `<img src="${esc(x.image)}" alt="${esc(x.name)}" loading="lazy">`).join("")}</div>` : "";
  const chips = lb.length ? `<ul class="tbl">${lb.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
  return `<section class="tb"><div class="wrap"><p class="tbt">${esc(t.title)}</p>${logos}${chips}</div></section>`;
};
S.features = () => {
  const f = C.features; if (!on(f)) return "";
  const rows = list(f.items).map(i => `<div class="feat"><div class="ft"><h3 style="font-size:1.5rem">${esc(i.title)}</h3><p class="muted">${esc(i.description)}</p>${(i.benefits || []).length ? `<ul class="ck">${i.benefits.map(b => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}</div>
    ${i.image ? `<img src="${esc(i.image)}" alt="${esc(i.title)}" loading="lazy">` : `<div class="ph" aria-hidden="true">Imagen demostrativa</div>`}</div>`).join("");
  return `<section id="features"><div class="wrap">${head(f.eyebrow, f.title, f.subtitle)}${rows}</div></section>`;
};
S.statistics = () => {
  const s = C.statistics, i = list(s.items); if (!on(s) || !i.length) return "";
  return `<section class="alt" id="stats"><div class="wrap">${head(s.eyebrow, s.title, "")}<div class="grid">${i.map(x => `<div class="card" style="text-align:center"><div class="num" data-v="${Number(x.value) || 0}" data-p="${esc(x.prefix || "")}" data-s="${esc(x.suffix || "")}">${esc(x.prefix || "")}${Number(x.value) || 0}${esc(x.suffix || "")}</div><h3 style="margin-top:8px">${esc(x.title)}</h3><p class="muted pd">${esc(x.description || "")}</p></div>`).join("")}</div></div></section>`;
};
S.testimonials = () => {
  const t = C.testimonials; if (!on(t)) return "";
  const ini = n => String(n || "").trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
  const meta = x => [x.company, x.segment || x.role, x.city].filter(Boolean).join(" · ");
  const who = x => `<figcaption class="who">${x.photo ? `<img src="${esc(x.photo)}" alt="${esc(x.name)}" loading="lazy">` : `<span class="ini" aria-hidden="true">${esc(ini(x.name))}</span>`}<div><strong>${esc(x.name)}</strong><div class="muted" style="font-size:.88rem">${esc(meta(x))}</div></div></figcaption>`;
  const stars = x => x.rating ? `<div class="stars" aria-label="${x.rating} estrellas">${"★".repeat(Math.max(0, Math.min(5, x.rating)))}</div>` : "";
  const fcard = x => `<figure class="card tcs"><span class="qm" aria-hidden="true">“</span>${stars(x)}<blockquote>${esc(x.text)}</blockquote>${who(x)}</figure>`;
  const ccard = (x, dup) => `<figure class="card tc"${dup ? ' aria-hidden="true"' : ""}><span class="qm sm" aria-hidden="true">“</span>${stars(x)}<blockquote>${esc(x.text)}</blockquote>${who(x)}</figure>`;
  const fe = t.featured || {}, fi = on(fe) ? list(fe.items).slice(0, 2) : [];
  const ca = t.carousel || {}, ci = on(ca) ? list(ca.items) : [];
  if (!fi.length && !ci.length) return "";
  const rep = Math.max(1, Math.ceil(6 / (ci.length || 1)));
  const half = dup => Array.from({ length: rep }, (_, k) => ci.map(x => ccard(x, dup || k > 0)).join("")).join("");
  const feat = fi.length ? `<div class="wrap"><div class="tstatic">${fi.map(fcard).join("")}</div></div>` : "";
  const car = ci.length ? `<div class="car" style="--dur:${+ca.seconds || 50}s" tabindex="0" aria-label="Más testimonios"><div class="ctrack">${half(false)}${half(true)}</div></div>` : "";
  return `<section id="testimonials"><div class="wrap">${head(t.eyebrow, t.title, t.subtitle)}</div>${feat}${car}</section>`;
};
S.pricing = () => {
  const p = C.pricing; if (!on(p)) return "";
  let plans = list(p.plans), pop = plans.findIndex(x => x.popular);
  const cards = plans.map((x, i) => {
    const isPop = i === pop;
    return `<article class="plan${isPop ? " pop" : ""}">${isPop ? `<span class="badge">${esc(x.badge || "MÁS VENDIDO")}</span>` : `<span class="badge ghost" aria-hidden="true">·</span>`}
    ${x.subtitle ? `<span class="eyebrow">${esc(x.subtitle)}</span>` : ""}<h3>${esc(x.name)}</h3><p class="muted pd">${esc(x.description || "")}</p>
    ${x.oldPrice ? `<div class="old">${money(x.oldPrice)}</div>` : ""}<div class="price">${money(x.price)} <small>${esc(x.period || "")}</small></div><p class="muted pn" style="font-size:.88rem;margin-top:6px">${esc(x.note || "")}</p>
    <ul>${(x.features || []).filter(f => f && f.text).map(f => `<li class="${f.included === false ? "no" : ""}"><span class="sr" style="position:absolute;left:-9999px">${f.included === false ? "No incluido: " : "Incluido: "}</span>${esc(f.text)}</li>`).join("")}</ul>
    ${waBtn(x.buttonText || "Contratar", x.message || `¡Hola! Me interesa el ${x.name}.`, isPop ? "btn btn-p" : "btn btn-o")}</article>`;
  }).join("");
  return `<section class="alt" id="pricing"><div class="wrap">${head(p.eyebrow, p.title, p.subtitle)}<div class="pricing">${cards}</div></div></section>`;
};
S.faq = () => {
  const f = C.faq, i = list(f.items); if (!on(f)) return "";
  return `<section id="faq"><div class="wrap" style="max-width:780px">${head("FAQ", f.title, f.subtitle)}${i.map(x => `<details><summary>${esc(x.q)}</summary><p>${esc(x.a)}</p></details>`).join("")}
  <div style="text-align:center;margin-top:28px"><p class="muted">${esc(f.whatsappText)}</p>${waBtn("Hablar por WhatsApp", f.whatsappMessage)}</div></div></section>`;
};
S.about = () => {
  const a = C.about; if (!on(a)) return "";
  const b = a.button;
  return `<section class="alt" id="about"><div class="wrap feat" style="margin:0 auto"><div class="ft">${a.eyebrow ? `<span class="eyebrow">${esc(a.eyebrow)}</span>` : ""}<h2>${esc(a.title)}</h2><p class="muted">${esc(a.description)}</p>${a.mission ? `<p><strong>${esc(a.mission)}</strong></p>` : ""}
  <div style="display:grid;gap:12px;margin:18px 0 24px">${list(a.highlights).map(h => `<div class="card" style="padding:16px 20px"><strong>${esc(h.title)}</strong><div class="muted">${esc(h.text)}</div></div>`).join("")}</div>${on(b) ? waBtn(b.text, b.message) : ""}</div>
  ${a.image ? `<img src="${esc(a.image)}" alt="${esc(a.title)}" loading="lazy">` : `<div class="ph" aria-hidden="true">Imagen institucional</div>`}</div></section>`;
};
S.security = () => {
  const s = C.security, i = list(s.items); if (!on(s) || !i.length) return "";
  return `<section id="security"><div class="wrap">${head(s.eyebrow, s.title, s.subtitle)}<div class="grid">${i.map(x => `<div class="card"><h3>${esc(x.title)}</h3><p class="muted">${esc(x.text)}</p></div>`).join("")}</div></div></section>`;
};
S.finalCta = () => {
  const f = C.finalCta; if (!on(f)) return "";
  const sec = f.secondary;
  return `<section><div class="wrap"><div class="cta"><h2>${esc(f.title)}</h2><p>${esc(f.text)}</p><div class="btns">${on(f.primary) ? waBtn(f.primary.text, f.primary.message, "btn btn-w") : ""}${on(sec) ? `<a class="btn btn-o" href="${esc(sec.href)}">${esc(sec.text)}</a>` : ""}</div></div></div></section>`;
};
S.footer = () => {
  const f = C.footer; if (!on(f)) return "";
  const nav = f.showNav ? list(C.navigation.items).map(i => `<a href="${esc(i.href)}">${esc(i.label)}</a>`).join("") : "";
  const ct = f.showContact ? [waOn() ? `<a href="${wa()}" target="_blank" rel="noopener">WhatsApp</a>` : "", C.contact.email ? `<a href="mailto:${esc(C.contact.email)}">${esc(C.contact.email)}</a>` : "", C.contact.address ? `<span class="muted">${esc(C.contact.address)}</span>` : ""].join("") : "";
  return `<footer><div class="wrap"><div class="fg"><div>${C.brand.logo ? `<img class="flogo" src="${esc(C.brand.logo)}" alt="${esc(C.brand.name)}">` : `<strong style="font-size:1.1rem">${esc(C.brand.name)}</strong>`}<p class="muted">${esc(f.description)}</p>${f.showSocial ? socialHtml() : ""}</div>
  ${nav ? `<div><strong>Navegación</strong>${nav}</div>` : "<div></div>"}${ct ? `<div><strong>Contacto</strong>${ct}</div>` : "<div></div>"}</div>
  <div class="copy"><span>© ${new Date().getFullYear()} ${esc(C.brand.name)}. ${esc(f.copyright)}</span><span>${list(f.legal).map(l => `<a href="${esc(l.href)}" target="_blank" rel="noopener" style="margin-left:14px">${esc(l.label)}</a>`).join("")}</span></div></div></footer>`;
};

function init() {
  document.title = C.seo.title || C.brand.name;
  let m = document.querySelector('meta[name="description"]'); if (m) m.content = C.seo.description || "";
  document.documentElement.style.setProperty("--primary", C.theme.primary);
  document.documentElement.style.setProperty("--accent", C.theme.accent);
  $("#app").innerHTML = ["header","hero","features","statistics","testimonials","pricing","faq","trustBadges","about","security","finalCta","footer"].map(k => S[k]()).join("") +
    (waOn() && C.whatsapp.floatingButton ? `<a class="fab" href="${wa()}" target="_blank" rel="noopener" aria-label="WhatsApp">WA</a>` : "");
  const b = $(".burger"), mn = $(".menu");
  if (b) { b.onclick = () => { const o = mn.classList.toggle("open"); b.setAttribute("aria-expanded", o); }; mn.onclick = e => { if (e.target.tagName === "A") mn.classList.remove("open"); }; }
  const rvs = [...document.querySelectorAll(".card:not(.tc),.feat,details")];
  if ("IntersectionObserver" in window) {
    const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); o.unobserve(e.target); } }), { threshold: .1 });
    rvs.forEach(n => { if (n.getBoundingClientRect().top > innerHeight) { n.classList.add("rv"); o.observe(n); } });
    setTimeout(() => rvs.forEach(n => n.classList.add("in")), 4000);
  }
  if (C.statistics.animate) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; io.unobserve(e.target);
      const t = +e.target.dataset.v, p = e.target.dataset.p, s = e.target.dataset.s, t0 = performance.now();
      const tick = n => { const k = Math.min(1, (n - t0) / 1200); e.target.textContent = p + Math.round(t * k).toLocaleString(C.pricing.locale) + s; if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick); }), { threshold: .4 });
    document.querySelectorAll(".num").forEach(n => io.observe(n));
  }
}
init();
