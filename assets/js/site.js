/* Renders Site B from content.js. Normally no edits needed. */
(function () {
  const $ = (s) => document.querySelector(s), base = document.body.dataset.base || "";
  const stats = (a) => a.map(s => `<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join("");
  $("#foot-link").href = SITE.ENGINEERING_PORTFOLIO;
  if ($("#home-title")) {                                  // ---------- HOME ----------
    $("#home-eyebrow").textContent = HOME.eyebrow; $("#home-title").textContent = HOME.title; $("#home-intro").textContent = HOME.intro;
    $("#list").innerHTML = PROJECTS.map((p, i) => `<a class="row" href="${p.slug}/"><i>0${i + 1}</i><div><h2>${p.name}</h2><p>${p.line}</p></div><div class="m"><b>${p.metric[0]}</b><span>${p.metric[1]}</span></div><em>&rarr;</em></a>`).join("");
  } else {                                                 // ---------- PROJECT ----------
    const p = PROJECTS.find(x => x.slug === document.body.dataset.slug); if (!p) return;
    document.title = p.name + " \u2014 " + SITE.NAME;
    $("#p-status").textContent = p.status; $("#p-name").textContent = p.name; $("#p-line").textContent = p.line; $("#p-stats").innerHTML = stats(p.stats);
    $("#p-problem").innerHTML = `<h3>${p.problem[0]}</h3><p>${p.problem[1]}</p>`;
    $("#p-break").innerHTML = p.breakthrough.map(b => `<div class="item"><h3>${b[0]}</h3><p>${b[1]}</p></div>`).join("");
    $("#p-specs").innerHTML = `<table>${p.specs.map(s => `<tr><th>${s[0]}</th><td>${s[1]}</td></tr>`).join("")}</table>` +
      p.figures.map(f => `<figure><img src="${base}assets/img/${f[0]}" alt="${f[1]}" loading="lazy"><figcaption>${f[1]}</figcaption></figure>`).join("") +
      (p.link ? `<p><a class="btn" href="${p.link[1]}">${p.link[0]} &rarr;</a></p>` : "");
    $("#p-road").innerHTML = `<ul>${p.roadmap.map(r => `<li>${r}</li>`).join("")}</ul>`;
    $("#copy").onclick = function () { navigator.clipboard && navigator.clipboard.writeText(location.href.split("#")[0]); this.textContent = "Link copied"; };
    $("#ask-deck").onclick = () => NOLL.open({ preselect: ["project_deck"] });
    $("#nav-more").innerHTML = PROJECTS.filter(x => x.slug !== p.slug).map(x => `<a href="${base}${x.slug}/">${x.name}</a>`).join("");
  }
})();
