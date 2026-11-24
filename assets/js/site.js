/* Renders Site B from content.js. You normally never edit this file. */
(function () {
  const $ = (s) => document.querySelector(s), base = document.body.dataset.base || "";
  const href = (p) => `${base}projects/${p.slug}/`;
  const stats = (a) => a.map(s => `<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join("");
  const rows = (arr) => arr.map((p, i) => `<a class="row" href="${href(p)}" style="--acc:${p.accent}"><i>0${i + 1}</i><div><h2>${p.name}</h2><em class="full">${p.full}</em><p>${p.line}</p></div><div class="m"><b>${p.metric[0]}</b><span>${p.metric[1]}</span></div><u>&rarr;</u></a>`).join("");
  const f = $("#foot-link"); if (f) { f.href = SITE.ENGINEERING_PORTFOLIO; f.textContent = SITE.ENGINEERING_LABEL; }
  if ($("#home-title")) {                                    // ---------- HOME ----------
    $("#home-eyebrow").textContent = HOME.eyebrow; $("#home-title").textContent = HOME.title; $("#home-intro").textContent = HOME.intro;
    $("#home-btn").textContent = HOME.button + " \u2192"; $("#home-btn").href = base + "projects/"; $("#list-title").textContent = HOME.listTitle; $("#list").innerHTML = rows(PROJECTS);
  } else if ($("#list")) {                                   // ---------- /projects/ ----------
    $("#pp-title").textContent = PROJECTS_PAGE.title; $("#pp-intro").textContent = PROJECTS_PAGE.intro; $("#list").innerHTML = rows(PROJECTS);
  } else {                                                   // ---------- PROJECT PAGE ----------
    const p = PROJECTS.find(x => x.slug === document.body.dataset.slug); if (!p) return;
    document.title = p.name + " \u2014 " + SITE.NAME; document.body.style.setProperty("--acc", p.accent);
    $("#p-status").textContent = p.status; $("#p-name").textContent = p.name; $("#p-full").textContent = p.full; $("#p-line").textContent = p.line;
    const v = $("#p-viewer");
    v.innerHTML = `<div class="vbar"><b>${p.docs.length > 1 ? "Documents" : p.docs[0][0]}</b>${p.docs.length > 1 ? p.docs.map((d, i) => `<button class="tab ${i ? "" : "on"}" data-i="${i}">${d[0]}</button>`).join("") : ""}<a id="vopen" target="_blank" rel="noopener">Open in new tab &#8599;</a></div><iframe id="vframe" title="${p.name} document"></iframe><p class="vhint">Scroll inside the viewer. On a phone, use &ldquo;Open in new tab&rdquo;.</p>`;
    const show = (i) => { const u = base + p.docs[i][1]; $("#vframe").src = /\.pdf$/i.test(u) ? u + "#view=FitH" : u; $("#vopen").href = u; v.querySelectorAll(".tab").forEach(t => t.classList.toggle("on", +t.dataset.i === i)); };
    v.querySelectorAll(".tab").forEach(t => t.onclick = () => show(+t.dataset.i)); show(0);
    $("#p-stats").innerHTML = stats(p.stats);
    $("#p-explain").innerHTML = p.explain.map((e, i) => `<div class="step"><i>${i + 1}</i><h3>${e[0]}</h3><p>${e[1]}</p></div>`).join("");
    $("#p-problem").innerHTML = `<h3>${p.problem[0]}</h3><p>${p.problem[1]}</p>`;
    $("#p-break").innerHTML = p.breakthrough.map(b => `<div class="item"><h3>${b[0]}</h3><p>${b[1]}</p></div>`).join("");
    $("#p-specs").innerHTML = `<table>${p.specs.map(s => `<tr><th>${s[0]}</th><td>${s[1]}</td></tr>`).join("")}</table><div class="figs">` + p.figures.map(x => `<figure><img src="${base}assets/img/${x[0]}" alt="${x[1]}" loading="lazy"><figcaption>${x[1]}</figcaption></figure>`).join("") + `</div>`;
    $("#p-road").innerHTML = `<ul>${p.roadmap.map(r => `<li>${r}</li>`).join("")}</ul>`;
    $("#copy").onclick = function () { navigator.clipboard && navigator.clipboard.writeText(location.href.split("#")[0]); this.textContent = "Link copied"; };
    $("#ask-deck").onclick = () => NOLL.open({ preselect: ["project_deck"] });
    $("#nav-more").innerHTML = PROJECTS.filter(x => x.slug !== p.slug).map(x => `<a href="${href(x)}">${x.name}</a>`).join("");
  }
})();
