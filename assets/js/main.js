(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Theme toggle ---------------- */
  var toggle = document.querySelector(".theme-toggle");
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    return root.dataset.theme || (systemDark.matches ? "dark" : "light");
  }

  function syncToggle() {
    var dark = currentTheme() === "dark";
    toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    toggle.title = dark ? "Light theme" : "Dark theme";
    toggle.innerHTML = '<i class="fa-solid ' + (dark ? "fa-sun" : "fa-moon") + '" aria-hidden="true"></i>';
  }

  toggle.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    syncToggle();
  });
  if (systemDark.addEventListener) systemDark.addEventListener("change", syncToggle);
  syncToggle();

  /* ---------------- Publications ---------------- */
  var ME = "Fei Wu";
  var pubs = window.PUBLICATIONS || [];
  var byId = {};
  pubs.forEach(function (p) { byId[p.id] = p; });

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function venueLabel(p) {
    return p.type === "conference" ? p.badge + " '" + String(p.year).slice(2) : p.badge;
  }

  function authorsHtml(p) {
    var html = p.authors.map(function (a) {
      var star = /\*$/.test(a);
      var name = star ? a.slice(0, -1) : a;
      var out = name === ME ? '<span class="me">' + esc(name) + "</span>" : esc(name);
      return out + (star ? "<sup>*</sup>" : "");
    }).join(", ");
    if (p.alphabetical) html += ' <span class="alpha">(alphabetical order)</span>';
    return html;
  }

  var ICONS = [
    [/^(arxiv|paper)$/i, "fa-regular fa-file-lines"],
    [/^pdf$/i, "fa-regular fa-file-pdf"],
    [/^post/i, "fa-regular fa-comment-dots"],
    [/^blog/i, "fa-solid fa-pen-nib"],
    [/^code$/i, "fa-brands fa-github"],
    [/^dashboard$/i, "fa-solid fa-chart-line"],
    [/^data/i, "fa-solid fa-database"],
    [/^(talk|video)$/i, "fa-solid fa-circle-play"],
    [/^slides$/i, "fa-regular fa-file-powerpoint"],
    [/^poster$/i, "fa-regular fa-image"],
  ];

  function iconFor(label) {
    for (var i = 0; i < ICONS.length; i++) if (ICONS[i][0].test(label)) return ICONS[i][1];
    return "fa-solid fa-link";
  }

  function pubHtml(p, compact) {
    var labels = Object.keys(p.links || {});
    var mainUrl = labels.length ? p.links[labels[0]] : null;
    var title = mainUrl
      ? '<a href="' + esc(mainUrl) + '">' + esc(p.title) + "</a>"
      : esc(p.title);

    var extra = "";
    if (!compact && p.journalOf) {
      var refs = p.journalOf.map(function (id) { return byId[id]; }).filter(Boolean).map(function (q) {
        return '<a href="#pub-' + q.id + '">' + esc(venueLabel(q)) + "</a>";
      });
      if (refs.length) extra += '<div class="pub-note">Journal version of our ' + refs.join(" and ") + " papers.</div>";
    }
    if (!compact && p.nonArchival) {
      extra += '<div class="pub-note">Non-archival: ' + esc(p.nonArchival) + "</div>";
    }

    var links = labels.map(function (label) {
      return '<a href="' + esc(p.links[label]) + '"><i class="' + iconFor(label) + '" aria-hidden="true"></i>' + esc(label) + "</a>";
    }).join("");

    return (
      '<li class="pub"' + (compact ? "" : ' id="pub-' + esc(p.id) + '"') + ">" +
        '<span class="badge badge-' + esc(p.type) + '">' + esc(venueLabel(p)) + "</span>" +
        '<div class="pub-body">' +
          '<div class="pub-title">' + title + "</div>" +
          '<div class="pub-authors">' + authorsHtml(p) + "</div>" +
          (p.venue && p.venue !== p.badge ? '<div class="pub-venue">' + esc(p.venue) + "</div>" : "") +
          extra +
          (links ? '<div class="pub-links">' + links + "</div>" : "") +
        "</div>" +
      "</li>"
    );
  }

  var selectedEl = document.getElementById("selected-pubs");
  if (selectedEl) {
    selectedEl.innerHTML = pubs.filter(function (p) { return p.selected; })
      .map(function (p) { return pubHtml(p, true); }).join("");
  }

  var allEl = document.getElementById("all-pubs");
  if (allEl) {
    var html = "";
    var year = null;
    pubs.forEach(function (p) {
      if (p.year !== year) {
        if (year !== null) html += "</ul>";
        year = p.year;
        html += '<h3 class="year-head">' + esc(year) + '</h3><ul class="pubs">';
      }
      html += pubHtml(p, false);
    });
    if (year !== null) html += "</ul>";
    allEl.innerHTML = html;
  }

  /* ---------------- Tabs (hash routing) ---------------- */
  var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tabs a[data-tab]"));
  var main = document.querySelector(".main");
  var ALIASES = { home: "about", publications: "research", papers: "research", services: "service" };

  function route(hash, scroll) {
    var id = decodeURIComponent((hash || "").replace(/^#/, ""));
    id = ALIASES[id] || id;
    var target = id ? document.getElementById(id) : null;
    var panel = target && (target.classList.contains("panel") ? target : target.closest(".panel"));
    if (!panel) { panel = panels[0]; target = null; }

    panels.forEach(function (p) { p.classList.toggle("is-active", p === panel); });
    tabs.forEach(function (t) {
      if (t.dataset.tab === panel.id) t.setAttribute("aria-current", "page");
      else t.removeAttribute("aria-current");
    });

    if (!scroll) return;
    if (target && target !== panel) {
      requestAnimationFrame(function () {
        target.scrollIntoView({ block: "center", behavior: reduceMotion ? "auto" : "smooth" });
        target.classList.remove("flash");
        void target.offsetWidth;
        target.classList.add("flash");
      });
    } else {
      requestAnimationFrame(function () {
        if (window.scrollY > main.offsetTop) window.scrollTo(0, main.offsetTop);
      });
    }
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var hash = a.getAttribute("href");
    if (hash.length < 2 || hash === "#content") return;
    e.preventDefault();
    if (location.hash !== hash) history.pushState(null, "", hash);
    route(hash, true);
  });

  window.addEventListener("popstate", function () { route(location.hash, true); });

  var initialIsPanel = panels.some(function (p) { return "#" + p.id === location.hash; });
  route(location.hash, Boolean(location.hash) && !initialIsPanel);
})();
