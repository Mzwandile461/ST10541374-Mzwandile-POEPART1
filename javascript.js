/* Mzwandile Mobile - ALL JavaScript in one file. Load AFTER jQuery:
   <script src="vendor/jquery/jquery-3.6.1.min.js" defer></script>
   <script src="js/script.js" defer></script>  (Leaflet must load before it on the contact page) */

/* ===================== products-data.js ===================== */
/**
 * Mzwandile Mobile - product catalogue (single source of truth).
 * Used by: product listing + search, quick-view modal, gallery lightbox,
 * home page featured products and the enquiry form (model/storage/quote).
 *
 * prices.used = "From" price shown in Part 2 (Certified Pre-Owned)
 * prices.new  = brand-new price (only where a new unit is sold)
 * storageUplift = extra rand amount for each storage tier above the base tier
 * stock = units currently on the shelf, per condition
 */
window.MM = window.MM || {};

MM.CONFIG = {
  storeEmail: "sales@mzwandilemobile.co.za",
  storePhone: "+27 000 000 0000",
  storeName: "Mzwandile Mobile",
  // Durban, KwaZulu-Natal (city centre) - used by the interactive map
  storeLat: -29.8587,
  storeLng: 31.0218,
  sameDayRadiusKm: 30,
  deliveryFees: { collect: 0, durban: 80, nationwide: 150 }
};

MM.PRODUCTS = [
  {
    id: "iphone-xr", name: "iPhone XR", series: "Standard", year: 2018,
    img: "iphone-xr-blue-back-view", alt: "Blue iPhone XR shown from the back with a single rear camera",
    colors: ["Blue", "Black", "White"], storage: ["64GB", "128GB"],
    conditions: ["used"], prices: { used: 4500 }, storageUplift: [0, 700],
    stock: { used: 8 },
    summary: "The budget-friendly entry point into iPhone with a large LCD screen and all-day battery.",
    features: ["A12 Bionic chip", "6.1-inch Liquid Retina display", "Face ID", "Battery health 85%+"]
  },
  {
    id: "iphone-11", name: "iPhone 11", series: "Standard", year: 2019,
    img: "iphone-11-green-back-view", alt: "Green iPhone 11 shown from the back with a dual camera module",
    colors: ["Green", "Black", "White"], storage: ["64GB", "128GB"],
    conditions: ["new", "used"], prices: { used: 5500, new: 6900 }, storageUplift: [0, 700],
    stock: { new: 4, used: 9 },
    summary: "A proven all-rounder with a dual 12MP camera system and excellent battery life.",
    features: ["A13 Bionic chip", "Dual 12MP cameras with Night mode", "Face ID", "Water resistant"]
  },
  {
    id: "iphone-12", name: "iPhone 12", series: "Standard", year: 2020,
    img: "iphone-12-blue-back-view", alt: "Blue iPhone 12 shown from the back with a dual camera module",
    colors: ["Blue", "Black", "White"], storage: ["64GB", "128GB", "256GB"],
    conditions: ["new", "used"], prices: { used: 6500, new: 8200 }, storageUplift: [0, 700, 2200],
    stock: { new: 3, used: 7 },
    summary: "The first 5G iPhone with a bright OLED display and flat-edge design.",
    features: ["A14 Bionic chip", "5G supported", "Super Retina XDR OLED display", "MagSafe compatible"]
  },
  {
    id: "iphone-13", name: "iPhone 13", series: "Standard", year: 2021,
    img: "iphone-13-pink-back-view", alt: "Pink iPhone 13 shown from the back with a diagonal dual camera",
    colors: ["Pink", "Blue", "Black"], storage: ["128GB", "256GB"],
    conditions: ["new", "used"], prices: { used: 8000, new: 9900 }, storageUplift: [0, 800],
    stock: { new: 5, used: 6 },
    summary: "Longer battery life and a brighter display make the iPhone 13 a popular upgrade.",
    features: ["A15 Bionic chip", "Cinematic mode video", "Smaller notch", "5G supported"]
  },
  {
    id: "iphone-14", name: "iPhone 14", series: "Standard", year: 2022,
    img: "iphone-14-yellow-back-view", alt: "Yellow iPhone 14 shown from the back on a light background",
    colors: ["Yellow", "Blue", "Black"], storage: ["128GB", "256GB"],
    conditions: ["new", "used"], prices: { used: 10000, new: 12500 }, storageUplift: [0, 900],
    stock: { new: 2, used: 5 },
    summary: "Improved main camera and Crash Detection in a familiar, durable design.",
    features: ["A15 Bionic chip", "Crash Detection and Emergency SOS", "Improved low-light camera", "12 months warranty (new)"]
  },
  {
    id: "iphone-15", name: "iPhone 15", series: "Standard", year: 2023,
    img: "iphone-15-pink-back-view", alt: "Pink iPhone 15 shown from the back with a dual camera",
    colors: ["Pink", "Black"], storage: ["128GB", "256GB"],
    conditions: ["new", "used"], prices: { used: 14000, new: 16500 }, storageUplift: [0, 1000],
    stock: { new: 6, used: 3 },
    summary: "USB-C charging and the Dynamic Island arrive on the standard iPhone.",
    features: ["A16 Bionic chip", "USB-C connector", "Dynamic Island", "48MP main camera"]
  },
  {
    id: "iphone-15-pro-max", name: "iPhone 15 Pro Max", series: "Pro Max", year: 2023,
    img: "iphone-15-pro-max-natural-titanium", alt: "iPhone 15 Pro Max in natural titanium shown from the back with a triple camera",
    colors: ["Natural Titanium", "Blue Titanium"], storage: ["256GB", "512GB"],
    conditions: ["new", "used"], prices: { used: 16500, new: 19500 }, storageUplift: [0, 2500],
    stock: { new: 1, used: 4 },
    summary: "Lightweight titanium build with a 5x telephoto camera and the A17 Pro chip.",
    features: ["A17 Pro chip", "Triple camera with 5x optical zoom", "Titanium frame", "USB-C (USB 3 speeds)"]
  },
  {
    id: "iphone-16-pro", name: "iPhone 16 Pro", series: "Pro", year: 2024,
    img: "iphone-16-pro-natural-titanium", alt: "iPhone 16 Pro in natural titanium shown from the back with a triple camera",
    colors: ["Natural Titanium", "Black Titanium"], storage: ["128GB", "256GB"],
    conditions: ["new", "used"], prices: { used: 18000, new: 21500 }, storageUplift: [0, 1500],
    stock: { new: 4, used: 2 },
    summary: "Pro performance in a pocket-friendly size, powered by the A18 Pro chip.",
    features: ["A18 Pro chip", "Triple camera system", "Camera Control button", "Natural Titanium finish"]
  },
  {
    id: "iphone-16-pro-max", name: "iPhone 16 Pro Max", series: "Pro Max", year: 2024,
    img: "iphone-16-pro-max-black-titanium", alt: "iPhone 16 Pro Max in black titanium shown from a three-quarter back view",
    colors: ["Black Titanium", "Natural Titanium"], storage: ["256GB", "512GB", "1TB"],
    conditions: ["new", "used"], prices: { used: 20000, new: 24000 }, storageUplift: [0, 2500, 6000],
    stock: { new: 3, used: 0 },
    summary: "The biggest iPhone display of its generation with outstanding battery endurance.",
    features: ["A18 Pro chip", "Largest battery", "Triple camera with 5x zoom", "Black Titanium finish"]
  },
  {
    id: "iphone-17-pro-max", name: "iPhone 17 Pro Max", series: "Pro Max", year: 2025, isNew: true,
    img: "iphone-17-pro-max-dark-blue", alt: "iPhone 17 Pro Max in dark blue shown from the back with a wide triple camera bar",
    colors: ["Dark Blue", "Cosmic Orange"], storage: ["256GB", "512GB", "1TB"],
    conditions: ["new"], prices: { new: 25000 }, storageUplift: [0, 3000, 7000],
    stock: { new: 0 },
    summary: "Our newest arrival: the latest design, 8x zoom and the biggest iPhone battery ever.",
    features: ["Latest design", "8x zoom camera", "Biggest battery ever", "Dark Blue and Cosmic Orange"]
  }
];

/** Helpers shared by several pages */
MM.fmtRand = function (n) {
  return "R" + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
MM.byId = function (id) {
  return MM.PRODUCTS.find(function (p) { return p.id === id; });
};
MM.fromPrice = function (p) {
  return Math.min.apply(null, Object.keys(p.prices).map(function (k) { return p.prices[k]; }));
};
MM.stockInfo = function (p, cond) {
  var n = (p.stock && p.stock[cond]) || 0;
  if (n === 0) return { level: "order", text: "On order - 3 to 5 working days", units: 0 };
  if (n <= 3) return { level: "low", text: "Low stock - only " + n + " left", units: n };
  return { level: "in", text: "In stock - ready for collection or delivery", units: n };
};
MM.condLabel = function (c) { return c === "new" ? "New" : "Certified Pre-Owned"; };
MM.warrantyFor = function (c) { return c === "new" ? "12 months" : "6 months"; };

/* ===================== main.js ===================== */
/**
 * Mzwandile Mobile - shared UI behaviour (jQuery 3).
 *  - Mobile navigation, dark/light theme, back-to-top
 *  - Scroll-reveal + animated counters (IntersectionObserver)
 *  - Saved-phones store (localStorage, wrapped in try/catch)
 *  - Reusable widgets: tabs, accordion, modal (focus-trapped)
 * All content from users is inserted with .text()/textContent - never as HTML - to
 * prevent cross-site scripting (XSS).
 */
(function ($) {
  "use strict";
  window.MM = window.MM || {};

  /* ---------- tiny safe storage wrapper ---------- */
  MM.store = {
    get: function (k, fallback) {
      try { var v = localStorage.getItem(k); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };

  /* ---------- saved (wishlist) phones ---------- */
  MM.saved = {
    list: function () { return MM.store.get("mm_saved", []); },
    has: function (id) { return this.list().indexOf(id) !== -1; },
    toggle: function (id) {
      var l = this.list(), i = l.indexOf(id);
      if (i === -1) l.push(id); else l.splice(i, 1);
      MM.store.set("mm_saved", l);
      MM.updateSavedBadge();
      return i === -1;
    }
  };
  MM.updateSavedBadge = function () {
    $(".js-saved-count").text(MM.saved.list().length);
  };

  /* ---------- theme ---------- */
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    $(".js-theme-toggle").attr("aria-pressed", t === "dark").find(".js-theme-icon").text(t === "dark" ? "☀" : "☾");
  }
  function initTheme() {
    var saved = MM.store.get("mm_theme", null);
    var prefers = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefers ? "dark" : "light"));
    $(".js-theme-toggle").on("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      MM.store.set("mm_theme", next);
      applyTheme(next);
    });
  }

  /* ---------- mobile nav ---------- */
  function initNav() {
    var $nav = $("#site-nav"), $btn = $(".nav-toggle");
    $btn.on("click", function () {
      var open = !$nav.hasClass("is-open");
      $nav.toggleClass("is-open", open);
      $btn.attr("aria-expanded", open);
    });
    $(document).on("keydown", function (e) {
      if (e.key === "Escape" && $nav.hasClass("is-open")) { $nav.removeClass("is-open"); $btn.attr("aria-expanded", false).trigger("focus"); }
    });
  }

  /* ---------- back to top ---------- */
  function initBackToTop() {
    var $b = $(".back-to-top");
    $(window).on("scroll", function () { $b.toggleClass("is-visible", window.scrollY > 500); });
    $b.on("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  /* ---------- scroll reveal + counters ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var start = null, dur = 1400;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = target + suffix; return; }
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function initReveal() {
    var els = document.querySelectorAll(".reveal, [data-count]");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("is-visible"); if (e.hasAttribute("data-count")) animateCount(e); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-visible");
        if (en.target.hasAttribute("data-count")) animateCount(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0.15 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ======================================================================
     Widget: Tabs  -  <div data-tabs> with .tabs__tab buttons + .tabs__panel
     Keyboard: Left/Right/Home/End. ARIA: tablist / tab / tabpanel.
     ====================================================================== */
  $.fn.mmTabs = function () {
    return this.each(function () {
      var $root = $(this), $tabs = $root.find(".tabs__tab"), $panels = $root.find(".tabs__panel");
      function activate($tab, focus) {
        $tabs.attr({ "aria-selected": "false", tabindex: "-1" });
        $panels.attr("hidden", true);
        $tab.attr({ "aria-selected": "true", tabindex: "0" });
        $("#" + $tab.attr("aria-controls")).removeAttr("hidden");
        if (focus) $tab.trigger("focus");
      }
      $tabs.on("click", function () { activate($(this)); });
      $tabs.on("keydown", function (e) {
        var i = $tabs.index(this), n = $tabs.length, t = null;
        if (e.key === "ArrowRight") t = (i + 1) % n;
        else if (e.key === "ArrowLeft") t = (i - 1 + n) % n;
        else if (e.key === "Home") t = 0;
        else if (e.key === "End") t = n - 1;
        if (t !== null) { e.preventDefault(); activate($tabs.eq(t), true); }
      });
      // open the tab named in the URL hash (e.g. about.html#warranty), also when the hash changes later
      function fromHash() {
        var hash = window.location.hash.replace("#", "");
        var $m = hash ? $tabs.filter('[aria-controls="' + hash + '"]') : $();
        if ($m.length) activate($m);
      }
      activate($tabs.first()); fromHash();
      $(window).on("hashchange", fromHash);
    });
  };

  /* ======================================================================
     Widget: Accordion  -  .accordion__trigger toggles its sibling panel
     Options: single (only one open), animated with jQuery slide.
     ====================================================================== */
  $.fn.mmAccordion = function (opts) {
    var o = $.extend({ single: true }, opts);
    return this.each(function () {
      var $root = $(this);
      $root.on("click", ".accordion__trigger", function () {
        var $t = $(this), $p = $("#" + $t.attr("aria-controls")), open = $t.attr("aria-expanded") === "true";
        if (o.single && !open) {
          $root.find('.accordion__trigger[aria-expanded="true"]').each(function () { MM.accordionSet($(this), false); });
        }
        MM.accordionSet($t, !open);
      });
    });
  };
  MM.accordionSet = function ($t, open) {
    var $p = $("#" + $t.attr("aria-controls"));
    $t.attr("aria-expanded", open);
    if (open) { $p.removeAttr("hidden").hide().slideDown(220); } else { $p.slideUp(180, function () { $p.attr("hidden", true); }); }
  };

  /* ======================================================================
     Widget: Modal  -  MM.modal.open($modal, triggerEl) / close()
     Focus is trapped inside while open and restored on close.
     ====================================================================== */
  MM.modal = (function () {
    var $current = null, lastFocus = null;
    var focusable = 'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';
    function open($m, trigger) {
      lastFocus = trigger || document.activeElement;
      $current = $m.addClass("is-open").attr("aria-hidden", "false");
      $("body").css("overflow", "hidden");
      setTimeout(function () { $m.find(focusable).filter(":visible").first().trigger("focus"); }, 30);
    }
    function close() {
      if (!$current) return;
      $current.removeClass("is-open").attr("aria-hidden", "true");
      $("body").css("overflow", "");
      var $c = $current; $current = null;
      $c.trigger("mm:closed");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    $(document).on("keydown", function (e) {
      if (!$current) return;
      if (e.key === "Escape") { close(); return; }
      if (e.key === "Tab") {
        var $f = $current.find(focusable).filter(":visible");
        if (!$f.length) return;
        var first = $f[0], last = $f[$f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    $(document).on("click", ".modal", function (e) { if (e.target === this) close(); });
    $(document).on("click", "[data-modal-close]", close);
    return { open: open, close: close };
  })();

  /* ---------- small helpers used by other scripts ---------- */
  MM.escapeRegExp = function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); };
  /** Appends text to a node, wrapping query matches in <mark> (DOM nodes, no innerHTML). */
  MM.highlight = function (node, text, query) {
    node.textContent = "";
    if (!query) { node.textContent = text; return; }
    var re = new RegExp("(" + MM.escapeRegExp(query) + ")", "ig"), parts = text.split(re);
    parts.forEach(function (part) {
      if (!part) return;
      if (part.toLowerCase() === query.toLowerCase()) {
        var m = document.createElement("mark"); m.textContent = part; node.appendChild(m);
      } else { node.appendChild(document.createTextNode(part)); }
    });
  };
  MM.debounce = function (fn, ms) {
    var t; return function () { var a = arguments, c = this; clearTimeout(t); t = setTimeout(function () { fn.apply(c, a); }, ms); };
  };
  MM.el = function (tag, attrs, children) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") e.textContent = attrs[k];
      else if (k === "class") e.className = attrs[k];
      else e.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return e;
  };
  /** Builds a <picture> (WebP + JPG fallback) for a product image. */
  MM.picture = function (p, size, opts) {
    opts = opts || {};
    var suffix = size === 400 ? "-400" : "";
    var pic = document.createElement("picture");
    var s = document.createElement("source");
    s.type = "image/webp"; s.srcset = "img/" + p.img + suffix + ".webp";
    var img = document.createElement("img");
    img.src = "img/" + p.img + suffix + ".jpg"; img.alt = p.alt; img.width = size; img.height = size;
    if (opts.eager) img.fetchPriority = "high"; else img.loading = "lazy";
    img.decoding = "async";
    pic.appendChild(s); pic.appendChild(img);
    return pic;
  };

  $(function () {
    initTheme(); initNav(); initBackToTop(); initReveal();
    MM.updateSavedBadge();
    $("[data-tabs]").mmTabs();
    $("[data-accordion]").mmAccordion({ single: true });
    $(".js-year").text(new Date().getFullYear());
  });
})(jQuery);

/* ===================== products.js ===================== */
/**
 * Dynamic product listing, live search, filter + sort, quick-view modal.
 * Cards are created with DOM methods from MM.PRODUCTS (products-data.js), so the
 * page content is generated by JavaScript instead of being hard-coded in HTML.
 */
(function ($) {
  "use strict";
  var $grid = $("#product-grid");
  var $featured = $("#featured-grid");

  /* ---------- card builder (shared by products + home) ---------- */
  function buildCard(p, query, idx) {
    var from = MM.fromPrice(p);
    var title = MM.el("h3");
    MM.highlight(title, p.name, query);

    var media = MM.el("button", { type: "button", class: "product-card__media", "data-open": p.id, "aria-label": "Quick view: " + p.name });
    media.appendChild(MM.picture(p, 400));
    if (p.isNew) media.appendChild(MM.el("span", { class: "pill pill--new product-card__tag", text: "NEW ARRIVAL" }));

    var save = MM.el("button", { type: "button", class: "product-card__save", "data-save": p.id });
    setSaveState(save, MM.saved.has(p.id), p.name);

    var cond = p.conditions.map(MM.condLabel).join(" / ");
    var body = MM.el("div", { class: "product-card__body" }, [
      title,
      MM.el("div", { class: "price" }, [MM.el("small", { text: "From " }), MM.fromText(from)]),
      MM.el("div", {}, [MM.el("span", { class: "chip", text: p.series }), " ", MM.el("span", { class: "chip", text: p.storage.join(" / ") })]),
      MM.el("p", { class: "hint", text: cond + " · " + p.colors.join(", ") }),
      MM.el("div", { class: "product-card__actions" }, [
        MM.el("button", { type: "button", class: "btn btn--sm", "data-open": p.id, text: "Quick view" }),
        MM.el("a", { class: "btn btn--sm btn--ghost", href: "enquiry.html?model=" + encodeURIComponent(p.id), text: "Enquire" })
      ])
    ]);
    var art = MM.el("article", { class: "product-card", "data-id": p.id });
    art.style.animationDelay = Math.min(idx || 0, 12) * 40 + "ms";
    var mediaWrap = MM.el("div", { class: "product-card__mediawrap" }, [media, save]);
    art.appendChild(mediaWrap); art.appendChild(body);
    return art;
  }
  MM.fromText = function (n) { return document.createTextNode(MM.fmtRand(n)); };
  function setSaveState(btn, on, name) {
    btn.textContent = on ? "♥" : "♡";
    btn.setAttribute("aria-pressed", on);
    btn.setAttribute("aria-label", (on ? "Remove from saved: " : "Save: ") + name);
  }

  /* ---------- home page: featured phones ---------- */
  if ($featured.length) {
    var ids = ["iphone-13", "iphone-15", "iphone-16-pro-max", "iphone-17-pro-max"];
    ids.forEach(function (id, i) { $featured.append(buildCard(MM.byId(id), "", i)); });
  }
  if (!$grid.length && !$featured.length) return;

  /* ---------- state + filtering ---------- */
  var state = { q: "", series: "All", cond: "all", max: 30000, sort: "price-asc", savedOnly: false };

  function matches(p) {
    if (state.series !== "All" && p.series !== state.series) return false;
    if (state.cond !== "all" && p.conditions.indexOf(state.cond) === -1) return false;
    if (MM.fromPrice(p) > state.max) return false;
    if (state.savedOnly && !MM.saved.has(p.id)) return false;
    if (state.q) {
      var hay = " " + [p.name, p.series, p.year, p.colors.join(" "), p.storage.join(" "), p.features.join(" "),
        p.conditions.map(MM.condLabel).join(" ")].join(" ").toLowerCase().replace(/[^a-z0-9 ]+/g, " ");
      // every word typed must match the START of a word (AND search): "pro" finds Pro/Pro Max, not "improved"
      return state.q.toLowerCase().split(/\s+/).every(function (w) { return hay.indexOf(" " + w.replace(/[^a-z0-9]+/g, "")) !== -1; });
    }
    return true;
  }
  function sorter(a, b) {
    switch (state.sort) {
      case "price-desc": return MM.fromPrice(b) - MM.fromPrice(a);
      case "name": return a.name.localeCompare(b.name, undefined, { numeric: true });
      case "newest": return b.year - a.year || MM.fromPrice(b) - MM.fromPrice(a);
      default: return MM.fromPrice(a) - MM.fromPrice(b);
    }
  }
  function render() {
    var list = MM.PRODUCTS.filter(matches).sort(sorter);
    $grid.empty().attr("aria-busy", "false");
    list.forEach(function (p, i) { $grid.append(buildCard(p, state.q, i)); });
    var $empty = $("#no-results");
    $empty.prop("hidden", list.length !== 0);
    $("#results-info").text(list.length === 0 ? "No phones match your search."
      : "Showing " + list.length + " of " + MM.PRODUCTS.length + " iPhones" + (state.q ? " for “" + state.q + "”" : "") + ".");
  }

  if ($grid.length) {
    // datalist suggestions
    var $dl = $("#model-suggestions");
    MM.PRODUCTS.forEach(function (p) { $dl.append(MM.el("option", { value: p.name })); });

    $("#q").on("input", MM.debounce(function () { state.q = $.trim(this.value); render(); }, 150));
    $("#search-form").on("submit", function (e) { e.preventDefault(); });
    $("#filter-cond").on("change", function () { state.cond = this.value; render(); });
    $("#sort").on("change", function () { state.sort = this.value; render(); });
    $("#filter-price").on("input", function () {
      state.max = parseInt(this.value, 10);
      $("#price-out").text("Up to " + MM.fmtRand(state.max));
      render();
    });
    $("#series-chips").on("click", ".chip-btn", function () {
      $("#series-chips .chip-btn").attr("aria-pressed", "false");
      $(this).attr("aria-pressed", "true");
      state.series = $(this).data("series"); render();
    });
    $("#saved-only").on("change", function () { state.savedOnly = this.checked; render(); });
    $(document).on("click", "#reset-inline", function () { $("#reset-filters").trigger("click"); });
    if (window.location.hash === "#saved") { state.savedOnly = true; $("#saved-only").prop("checked", true); }
    $("#reset-filters").on("click", function () {
      state = { q: "", series: "All", cond: "all", max: 30000, sort: "price-asc", savedOnly: false };
      $("#q").val(""); $("#filter-cond").val("all"); $("#sort").val("price-asc"); $("#filter-price").val(30000);
      $("#price-out").text("Up to R30,000"); $("#saved-only").prop("checked", false);
      $("#series-chips .chip-btn").attr("aria-pressed", "false").first().attr("aria-pressed", "true");
      render();
    });
    // preset from URL, e.g. products.html?q=pro
    var qs = new URLSearchParams(window.location.search);
    if (qs.get("q")) { state.q = qs.get("q").slice(0, 60); $("#q").val(state.q); }
    render();
  }

  /* ---------- event delegation: quick view + save ---------- */
  $(document).on("click", "[data-open]", function () { openQuickView($(this).attr("data-open"), this); });
  $(document).on("click", "[data-save]", function () {
    var id = $(this).attr("data-save"), p = MM.byId(id);
    var on = MM.saved.toggle(id);
    setSaveState(this, on, p.name);
    if (state.savedOnly) render();
  });

  /* ---------- quick-view modal ---------- */
  function openQuickView(id, trigger) {
    var p = MM.byId(id); if (!p) return;
    var $m = $("#product-modal");
    var cond = p.conditions[0];
    $m.find(".js-m-media").empty().append(MM.picture(p, 900, { eager: true }));
    $m.find(".js-m-title").text(p.name);
    $m.find(".js-m-summary").text(p.summary);
    var $feat = $m.find(".js-m-features").empty();
    p.features.forEach(function (f) { $feat.append($("<li>").text(f)); });

    var $rows = $m.find(".js-m-specs").empty();
    function row(k, v) { $rows.append($("<tr>").append($("<th>").text(k), $("<td>").text(v))); }
    row("Storage", p.storage.join(" / "));
    row("Colours", p.colors.join(", "));
    p.conditions.forEach(function (c) {
      var si = MM.stockInfo(p, c);
      row(MM.condLabel(c), MM.fmtRand(p.prices[c]) + " · " + MM.warrantyFor(c) + " warranty · " + si.text);
    });
    row("Released", String(p.year));

    $m.find(".js-m-enquire").attr("href", "enquiry.html?model=" + encodeURIComponent(p.id));
    var url = window.location.origin + window.location.pathname.replace(/[^/]*$/, "") + "products.html?q=" + encodeURIComponent(p.name);
    var text = encodeURIComponent(p.name + " at Mzwandile Mobile, Durban - from " + MM.fmtRand(MM.fromPrice(p)));
    $m.find(".js-share-wa").attr("href", "https://wa.me/?text=" + text + "%20" + encodeURIComponent(url));
    $m.find(".js-share-fb").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url));
    $m.find(".js-share-x").attr("href", "https://twitter.com/intent/tweet?text=" + text + "&url=" + encodeURIComponent(url));
    MM.modal.open($m, trigger);
  }
})(jQuery);

/* ===================== gallery.js ===================== */
/**
 * Image gallery + lightbox.
 *  - Gallery grid is generated from MM.PRODUCTS and can be filtered by series.
 *  - Lightbox: click/Enter opens a large view; Prev/Next buttons, arrow keys,
 *    swipe on touch screens, Esc/backdrop to close, image counter, caption,
 *    neighbour preloading, focus trap and focus restore (accessible).
 */
(function ($) {
  "use strict";
  var $gallery = $("#gallery");
  if (!$gallery.length) return;

  var visible = [];      // products currently shown in the grid
  var index = 0;         // current lightbox image
  var lastTrigger = null;
  var $lb = $("#lightbox"), $img = $("#lb-img"), $cap = $("#lb-caption"), $count = $("#lb-count");

  /* ----- build grid ----- */
  function buildGrid(series) {
    visible = MM.PRODUCTS.filter(function (p) { return series === "All" || p.series === series; });
    $gallery.empty();
    visible.forEach(function (p, i) {
      var btn = MM.el("button", { type: "button", class: "gallery__item", "data-index": i, "aria-label": "Open large image of " + p.name }, [
        MM.picture(p, 400),
        MM.el("span", { class: "gallery__cap", text: p.name })
      ]);
      btn.style.animationDelay = i * 40 + "ms";
      $gallery.append(btn);
    });
    $("#gallery-count").text(visible.length + " photos");
  }
  $("#gallery-filters").on("click", ".chip-btn", function () {
    $("#gallery-filters .chip-btn").attr("aria-pressed", "false");
    $(this).attr("aria-pressed", "true");
    buildGrid($(this).data("series"));
  });
  buildGrid("All");

  /* ----- lightbox ----- */
  function show(i) {
    index = (i + visible.length) % visible.length;
    var p = visible[index];
    $img.addClass("is-loading");
    var big = new Image();
    big.onload = function () {
      $img.attr({ src: big.src, alt: p.alt }).removeClass("is-loading");
    };
    big.onerror = function () { $img.removeClass("is-loading").attr("alt", "Image could not be loaded"); };
    big.src = "img/" + p.img + ".jpg";
    $cap.empty().append(document.createTextNode(p.name), $("<small>").text(p.summary)[0]);
    $count.text((index + 1) + " / " + visible.length);
    // preload neighbours for instant navigation
    [index + 1, index - 1].forEach(function (n) {
      var q = visible[(n + visible.length) % visible.length], pre = new Image(); pre.src = "img/" + q.img + ".jpg";
    });
  }
  function openLb(i, trigger) {
    lastTrigger = trigger;
    show(i);
    $lb.addClass("is-open").attr("aria-hidden", "false");
    $("body").css("overflow", "hidden");
    $lb.find(".lightbox__close").trigger("focus");
  }
  function closeLb() {
    $lb.removeClass("is-open").attr("aria-hidden", "true");
    $("body").css("overflow", "");
    if (lastTrigger) lastTrigger.focus();
  }
  $gallery.on("click", ".gallery__item", function () { openLb(parseInt($(this).attr("data-index"), 10), this); });
  $lb.on("click", ".lightbox__prev", function () { show(index - 1); });
  $lb.on("click", ".lightbox__next", function () { show(index + 1); });
  $lb.on("click", ".lightbox__close", closeLb);
  $lb.on("click", function (e) { if (e.target === this) closeLb(); });

  $(document).on("keydown", function (e) {
    if (!$lb.hasClass("is-open")) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowRight") show(index + 1);
    else if (e.key === "ArrowLeft") show(index - 1);
    else if (e.key === "Tab") {           // keep focus inside the lightbox
      var $f = $lb.find("button"), first = $f[0], last = $f[$f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ----- touch swipe ----- */
  var startX = null;
  $lb.on("touchstart", function (e) { startX = e.originalEvent.touches[0].clientX; });
  $lb.on("touchend", function (e) {
    if (startX === null) return;
    var dx = e.originalEvent.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    startX = null;
  });
})(jQuery);

/* ===================== posts.js ===================== */
/**
 * Dynamic content: "Latest from the store" posts are loaded asynchronously from
 * data/posts.json with fetch(), shown 3 at a time ("Load more"), and can be
 * filtered by a live search box. Includes loading skeletons and an error state.
 */
(function ($) {
  "use strict";
  var $list = $("#posts");
  if (!$list.length) return;

  var posts = [], shown = 0, PAGE = 3, query = "";
  var $more = $("#posts-more"), $status = $("#posts-status");

  function fmtDate(iso) {
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });
  }
  function skeletons() {
    $list.empty().attr("aria-busy", "true");
    for (var i = 0; i < PAGE; i++) $list.append(MM.el("div", { class: "skeleton", "aria-hidden": "true" }));
  }
  function card(p, idx) {
    var title = MM.el("h3"); MM.highlight(title, p.title, query);
    var body = MM.el("p", { class: "post__body", id: "post-body-" + p.id, hidden: "", text: p.body });
    var toggle = MM.el("button", { type: "button", class: "btn btn--sm btn--ghost", "aria-expanded": "false", "aria-controls": body.id, text: "Read more" });
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.textContent = open ? "Read more" : "Show less";
      if (open) body.setAttribute("hidden", ""); else body.removeAttribute("hidden");
    });
    var a = MM.el("article", { class: "card post reveal is-visible" }, [
      MM.el("div", { class: "post__meta" }, [MM.el("span", { class: "chip", text: p.tag }), MM.el("time", { datetime: p.date, text: fmtDate(p.date) })]),
      title, MM.el("p", { text: p.excerpt }), body, MM.el("div", {}, [toggle])
    ]);
    a.style.animation = "fadeUp .45s ease both";
    a.style.animationDelay = (idx % PAGE) * 80 + "ms";
    return a;
  }
  function filtered() {
    var q = query.toLowerCase();
    return posts.filter(function (p) { return !q || (p.title + " " + p.excerpt + " " + p.tag + " " + p.body).toLowerCase().indexOf(q) !== -1; });
  }
  function render(reset) {
    var list = filtered();
    if (reset) { shown = 0; $list.empty(); }
    var next = list.slice(shown, shown + PAGE);
    next.forEach(function (p, i) { $list.append(card(p, i)); });
    shown += next.length;
    $list.attr("aria-busy", "false");
    $more.prop("hidden", shown >= list.length);
    $status.text(list.length === 0 ? "No posts match “" + query + "”." : "Showing " + shown + " of " + list.length + " posts.");
  }
  function load() {
    skeletons(); $status.text("Loading posts…");
    fetch("data/posts.json", { headers: { Accept: "application/json" } })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (data) {
        posts = data.sort(function (a, b) { return b.date.localeCompare(a.date); });
        render(true);
      })
      .catch(function () {
        $list.empty().attr("aria-busy", "false");
        var retry = MM.el("button", { type: "button", class: "btn btn--sm", text: "Try again" });
        retry.addEventListener("click", load);
        $list.append(MM.el("div", { class: "alert alert--warn" }, [
          "We couldn’t load the latest posts. Check your connection (or open the site through a web server) and ", retry
        ]));
        $status.text("");
      });
  }
  $more.on("click", function () { render(false); });
  $("#post-search").on("input", MM.debounce(function () { query = $.trim(this.value); if (posts.length) render(true); }, 150));
  load();
})(jQuery);

/* ===================== faq.js ===================== */
/**
 * FAQ page: expand/collapse all + live search that hides non-matching questions,
 * highlights matches and opens a result automatically when only one remains.
 */
(function ($) {
  "use strict";
  var $acc = $("#faq-accordion");
  if (!$acc.length) return;
  var $items = $acc.find(".accordion__item");

  // keep original text so highlighting can be undone
  $items.each(function () {
    var $t = $(this).find(".accordion__label");
    $(this).data("q", $t.text());
  });

  $("#faq-expand").on("click", function () {
    $acc.find(".accordion__trigger").each(function () { if ($(this).attr("aria-expanded") !== "true") MM.accordionSet($(this), true); });
  });
  $("#faq-collapse").on("click", function () {
    $acc.find(".accordion__trigger").each(function () { if ($(this).attr("aria-expanded") === "true") MM.accordionSet($(this), false); });
  });

  $("#faq-search").on("input", MM.debounce(function () {
    var q = $.trim(this.value), low = q.toLowerCase(), n = 0, $last = null;
    $items.each(function () {
      var $i = $(this), question = $i.data("q"), answer = $i.find(".accordion__panel").text();
      var hit = !q || (question + " " + answer).toLowerCase().indexOf(low) !== -1;
      $i.prop("hidden", !hit);
      MM.highlight($i.find(".accordion__label")[0], question, q);
      if (hit) { n++; $last = $i; }
    });
    $("#faq-status").text(q ? (n + " question" + (n === 1 ? "" : "s") + " found") : "");
    $("#faq-empty").prop("hidden", n !== 0);
    if (q && n === 1) { var $t = $last.find(".accordion__trigger"); if ($t.attr("aria-expanded") !== "true") MM.accordionSet($t, true); }
  }, 150));
})(jQuery);

/* ===================== map.js ===================== */
/**
 * Interactive store map (Leaflet + OpenStreetMap tiles).
 * Features: store marker + popup, same-day delivery zone (toggle), "How far am I?"
 * geolocation with Haversine distance, route line, reset view and directions links.
 * If Leaflet cannot load (offline / blocked) a text fallback with map links is shown.
 */
window.addEventListener("load", function () {   // wait so Leaflet (loaded from the CDN) is ready
  "use strict";
  var box = document.getElementById("store-map");
  if (!box) return;

  var C = MM.CONFIG;
  var status = document.getElementById("map-status");
  var fallback = document.getElementById("map-fallback");

  function say(msg) { if (status) status.textContent = msg; }

  if (typeof L === "undefined") {          // library failed to load
    box.hidden = true;
    if (fallback) fallback.hidden = false;
    document.querySelectorAll(".js-map-tool").forEach(function (b) { b.disabled = true; });
    say("The interactive map could not be loaded. Use the links to open the location in your map app.");
    return;
  }

  var center = [C.storeLat, C.storeLng];
  var map = L.map(box, { scrollWheelZoom: false, tap: true }).setView(center, 11);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
  }).addTo(map);

  // let people scroll the page past the map; enable zoom-by-wheel only after a click
  map.on("click focus", function () { map.scrollWheelZoom.enable(); });
  map.on("mouseout blur", function () { map.scrollWheelZoom.disable(); });

  /* ----- store marker with a popup built from DOM nodes (no innerHTML) ----- */
  var pinIcon = L.divIcon({ className: "", html: '<div class="pin"></div>', iconSize: [38, 38], iconAnchor: [10, 38], popupAnchor: [9, -36] });
  var meIcon = L.divIcon({ className: "", html: '<div class="pin pin--me"></div>', iconSize: [38, 38], iconAnchor: [10, 38] });

  var pop = document.createElement("div");
  var h = document.createElement("strong"); h.textContent = C.storeName + " - iPhone Store";
  var p1 = document.createElement("p"); p1.textContent = "Durban, KwaZulu-Natal. Exact address shared on WhatsApp.";
  var p2 = document.createElement("p"); p2.textContent = "Mon-Sat 9AM-6PM · Sun 10AM-3PM";
  var dir = document.createElement("a");
  dir.href = "https://www.google.com/maps/dir/?api=1&destination=" + C.storeLat + "," + C.storeLng;
  dir.target = "_blank"; dir.rel = "noopener noreferrer"; dir.textContent = "Get directions";
  [h, p1, p2, dir].forEach(function (n) { pop.appendChild(n); });

  var store = L.marker(center, { icon: pinIcon, title: C.storeName, alt: C.storeName + " location marker" }).addTo(map);
  store.bindPopup(pop).openPopup();

  /* ----- same-day delivery zone ----- */
  var zone = L.circle(center, { radius: C.sameDayRadiusKm * 1000, color: "#e4570f", weight: 2, fillOpacity: 0.08 });
  var zoneOn = false;
  function toggleZone(force) {
    zoneOn = typeof force === "boolean" ? force : !zoneOn;
    if (zoneOn) { zone.addTo(map); map.fitBounds(zone.getBounds(), { padding: [20, 20] }); say("Orange area = same-day delivery zone (" + C.sameDayRadiusKm + " km from the store)."); }
    else { map.removeLayer(zone); say("Delivery zone hidden."); }
    var b = document.getElementById("map-zone"); if (b) b.setAttribute("aria-pressed", String(zoneOn));
  }

  /* ----- distance from the visitor ----- */
  function haversine(a, b) {
    var R = 6371, rad = Math.PI / 180;
    var dLat = (b[0] - a[0]) * rad, dLng = (b[1] - a[1]) * rad;
    var x = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.sqrt(x));
  }
  var meMarker = null, line = null;
  function locate() {
    if (!navigator.geolocation) { say("Your browser does not support location. Use the directions link instead."); return; }
    say("Finding your location…");
    navigator.geolocation.getCurrentPosition(function (pos) {
      var me = [pos.coords.latitude, pos.coords.longitude];
      var km = haversine(me, center);
      if (meMarker) map.removeLayer(meMarker); if (line) map.removeLayer(line);
      meMarker = L.marker(me, { icon: meIcon, title: "You are here", alt: "Your location" }).addTo(map);
      line = L.polyline([me, center], { color: "#1a73e8", weight: 3, dashArray: "6 8" }).addTo(map);
      map.fitBounds(L.latLngBounds([me, center]), { padding: [40, 40] });
      var inZone = km <= C.sameDayRadiusKm;
      say("You are about " + km.toFixed(1) + " km (straight line) from the store. " +
        (inZone ? "You are inside our same-day delivery zone." : "You are outside the same-day zone - nationwide courier takes 1-3 days."));
    }, function (err) {
      say(err.code === 1 ? "Location permission was denied. You can still use the directions link." : "We could not find your location. Please try again.");
    }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 });
  }

  function reset() {
    if (zoneOn) toggleZone(false);
    if (meMarker) { map.removeLayer(meMarker); meMarker = null; }
    if (line) { map.removeLayer(line); line = null; }
    map.setView(center, 11); store.openPopup(); say("Map reset to the store location.");
  }

  var z = document.getElementById("map-zone"), l = document.getElementById("map-locate"), r = document.getElementById("map-reset");
  if (z) z.addEventListener("click", function () { toggleZone(); });
  if (l) l.addEventListener("click", locate);
  if (r) r.addEventListener("click", reset);
  // Leaflet needs a size recalculation if the container was hidden/resized on load
  map.invalidateSize();
});

/* ===================== forms.js ===================== */
/**
 * Forms: client-side validation, error handling, AJAX submission.
 *   enquiry.html -> validated, then processed into an instant quote
 *                   (price, discounts, trade-in, delivery, stock availability).
 *   contact.html -> validated, then compiled into an email the visitor can send
 *                   to the store (mailto) and posted via AJAX (fetch).
 * Validation uses the HTML5 attributes for structure (required, type, min/max)
 * and JavaScript for formats (SA phone numbers, dates, lengths, conditions).
 */
(function ($) {
  "use strict";
  var C = MM.CONFIG;

  /* =====================================================================
     1. Shared validation engine
     ===================================================================== */
  var NAME_RE = /^[A-Za-zÀ-ɏ][A-Za-zÀ-ɏ' .-]{1,59}$/;
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var SA_PHONE_RE = /^(?:\+27|0027|0)[1-9]\d{8}$/;      // e.g. 031 123 4567, 082 123 4567, +27 82 123 4567

  var rules = {
    fullName: function (v) {
      if (!v) return "Please enter your full name.";
      if (v.length < 2) return "Your name must be at least 2 characters.";
      if (!NAME_RE.test(v)) return "Use letters, spaces, apostrophes or hyphens only (max 60 characters).";
    },
    email: function (v) {
      if (!v) return "Please enter your email address.";
      if (v.length > 100) return "Email address is too long (max 100 characters).";
      if (!EMAIL_RE.test(v)) return "Enter a valid email address, e.g. name@example.com.";
    },
    phone: function (v, $f) {
      var optional = $f.find("input").attr("data-optional") === "true";
      if (!v) return optional ? "" : "Please enter your phone number.";
      var digits = v.replace(/[\s\-()]/g, "");
      if (!/^[+\d]+$/.test(digits)) return "Phone numbers may only contain digits, spaces, + and dashes.";
      if (!SA_PHONE_RE.test(digits)) return "Enter a valid South African number, e.g. 082 123 4567 or +27 82 123 4567.";
    },
    enquiryType: function (v) { if (!v) return "Please choose what your enquiry is about."; },
    subject: function (v) { if (!v) return "Please choose the type of message."; },
    model: function (v) { if (!v) return "Please select an iPhone model."; },
    storage: function (v) { if (!v) return "Please choose a storage size."; },
    colour: function (v) { if (!v) return "Please choose a colour."; },
    condition: function (v) { if (!v) return "Please choose New or Certified Pre-Owned."; },
    delivery: function (v) { if (!v) return "Please choose collection or delivery."; },
    quantity: function (v) {
      if (v === "") return "Please enter a quantity.";
      var n = Number(v);
      if (!Number.isInteger(n)) return "Quantity must be a whole number.";
      if (n < 1 || n > 10) return "Quantity must be between 1 and 10 (contact us for bulk orders).";
    },
    tradeDevice: function (v, $f) {
      if ($("#tradeIn").is(":checked") && !v) return "Select the device you want to trade in.";
    },
    callbackDate: function (v) {
      if (!v) return "";
      var d = new Date(v + "T00:00:00"), today = new Date(); today.setHours(0, 0, 0, 0);
      var max = new Date(today); max.setDate(max.getDate() + 60);
      if (isNaN(d.getTime())) return "Enter a valid date.";
      if (d < today) return "The date cannot be in the past.";
      if (d > max) return "Please choose a date within the next 60 days.";
      if (d.getDay() === 0) return "";   // Sunday is open 10AM-3PM, so it is allowed
    },
    message: function (v, $f) {
      var $t = $f.find("textarea"), min = parseInt($t.attr("data-min") || "0", 10), max = parseInt($t.attr("maxlength") || "1000", 10);
      if (min && !v) return "Please type your message.";
      if (min && v.length < min) return "Your message is too short - please write at least " + min + " characters (" + v.length + " so far).";
      if (v.length > max) return "Your message is too long (max " + max + " characters).";
    },
    contactMethod: function (v) { if (!v) return "Please choose how we should reply."; },
    consent: function (v, $f) { if (!$f.find("input").is(":checked")) return "You must agree before we can process your details."; }
  };

  /** Reads the current value of a .field (works for inputs, selects, radio groups, checkboxes). */
  function getValue($field) {
    var $i = $field.find("input, select, textarea").not(":disabled");
    if (!$i.length) return "";
    var t = $i.first().attr("type");
    if (t === "radio") return $i.filter(":checked").val() || "";
    if (t === "checkbox") return $i.first().is(":checked") ? "yes" : "";
    return $.trim($i.first().val());
  }
  /** Validates one field wrapper; updates classes, message and ARIA state. Returns error text or "". */
  function validateField($field) {
    if ($field.prop("hidden") || $field.closest("[hidden]").length) return "";
    var key = $field.attr("data-rule");
    if (!key || !rules[key]) return "";
    var err = rules[key](getValue($field), $field) || "";
    var $msg = $field.find(".error-msg");
    $field.toggleClass("is-invalid", !!err).toggleClass("is-valid", !err && !!getValue($field) && key !== "consent");
    $field.find("input, select, textarea").attr("aria-invalid", err ? "true" : "false");
    $msg.text(err);
    return err;
  }
  function validateForm($form) {
    var errors = [];
    $form.find(".field[data-rule]").each(function () {
      var e = validateField($(this));
      if (e) errors.push({ $field: $(this), msg: e });
    });
    return errors;
  }
  function showSummary($form, errors) {
    var $s = $form.find(".error-summary").empty();
    if (!errors.length) { $s.prop("hidden", true); return; }
    $s.append($("<strong>").text("Please fix " + errors.length + " problem" + (errors.length > 1 ? "s" : "") + " before submitting:"));
    var $ul = $("<ul>").appendTo($s);
    errors.forEach(function (e) {
      var label = e.$field.find("label, legend").first().clone().children().remove().end().text().replace("*", "").trim();
      var $a = $("<a href='#'>").text(label + ": " + e.msg).on("click", function (ev) {
        ev.preventDefault(); e.$field.find("input, select, textarea").first().trigger("focus");
      });
      $ul.append($("<li>").append($a));
    });
    $s.prop("hidden", false).attr("tabindex", "-1").trigger("focus");
  }
  /** Live feedback: validate a field when it loses focus, then on every change. */
  function liveValidation($form) {
    $form.on("blur", "input, select, textarea", function () {
      var $f = $(this).closest(".field[data-rule]"); if ($f.length) { $f.data("touched", true); validateField($f); }
    });
    $form.on("input change", "input, select, textarea", function () {
      var $f = $(this).closest(".field[data-rule]");
      if ($f.length && ($f.data("touched") || $f.hasClass("is-invalid") || $(this).is("select, [type=radio], [type=checkbox]"))) {
        $f.data("touched", true); validateField($f);
      }
    });
  }
  /** Character counters for textareas */
  function counters($form) {
    $form.find("textarea[maxlength]").each(function () {
      var $t = $(this), max = parseInt($t.attr("maxlength"), 10), $c = $("#" + $t.attr("data-counter"));
      function upd() { var n = $t.val().length; $c.text(n + " / " + max).toggleClass("is-over", n >= max); }
      $t.on("input", upd); upd();
    });
  }
  /** AJAX POST (works with Netlify Forms; fails gracefully on other hosts). */
  function ajaxPost($form, extra) {
    var fd = new FormData($form[0]);
    var params = new URLSearchParams();
    fd.forEach(function (v, k) { params.append(k, v); });
    Object.keys(extra || {}).forEach(function (k) { params.set(k, extra[k]); });
    return fetch($form.attr("action") || "/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString()
    }).then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return true; });
  }
  function setBusy($btn, busy, label) {
    $btn.prop("disabled", busy);
    if (busy) { $btn.data("label", $btn.text()).empty().append($("<span class='spinner' aria-hidden='true'>"), " Sending…"); }
    else { $btn.text(label || $btn.data("label") || "Submit"); }
  }
  function todayISO() { var d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); }
  function addWorkingDays(date, n) {
    var d = new Date(date), added = 0;
    while (added < n) { d.setDate(d.getDate() + 1); if (d.getDay() !== 0 && d.getDay() !== 6) added++; }
    return d;
  }
  function fmtDate(d) { return d.toLocaleDateString("en-ZA", { weekday: "short", day: "numeric", month: "short" }); }

  /* =====================================================================
     2. ENQUIRY FORM  ->  instant quote
     ===================================================================== */
  var $enq = $("#enquiry-form");
  if ($enq.length) {
    liveValidation($enq); counters($enq);
    $("#callbackDate").attr("min", todayISO());

    var TRADE_VALUES = { android: 800, "ios-old": 1500, "ios-mid": 2500, "ios-new": 4500 };
    var TRADE_LABELS = { android: "Android phone", "ios-old": "iPhone XR or older", "ios-mid": "iPhone 11 / 12", "ios-new": "iPhone 13 or newer" };

    // fill model list
    var $model = $("#model");
    MM.PRODUCTS.forEach(function (p) { $model.append($("<option>").val(p.id).text(p.name + " - from " + MM.fmtRand(MM.fromPrice(p)))); });

    function refreshModelOptions() {
      var p = MM.byId($model.val());
      var $st = $("#storage").empty().append($("<option value=''>").text(p ? "Choose storage" : "Select a model first"));
      var $co = $("#colour").empty().append($("<option value=''>").text(p ? "Choose colour" : "Select a model first"));
      $st.prop("disabled", !p); $co.prop("disabled", !p);
      var $cond = $("#condition-group input");
      $cond.each(function () {
        var ok = p && p.conditions.indexOf(this.value) !== -1;
        $(this).prop("disabled", !ok).prop("checked", ok && p.conditions.length === 1);
        $(this).closest("label").css("opacity", ok || !p ? 1 : 0.45);
      });
      if (p) {
        p.storage.forEach(function (s, i) { $st.append($("<option>").val(s).text(s + (p.storageUplift[i] ? " (+" + MM.fmtRand(p.storageUplift[i]) + ")" : ""))); });
        p.colors.forEach(function (c) { $co.append($("<option>").val(c).text(c)); });
        $("#model-hint").text(p.summary);
      } else { $("#model-hint").text(""); }
    }
    $model.on("change", refreshModelOptions);

    // show trade-in device select only when ticked
    $("#tradeIn").on("change", function () {
      $("#trade-field").prop("hidden", !this.checked);
      if (!this.checked) { $("#tradeDevice").val(""); validateField($("#trade-field")); }
    });
    // enquiry type "Trade-in" ticks the box automatically
    $("#enquiryType").on("change", function () {
      if (this.value === "trade-in") { $("#tradeIn").prop("checked", true).trigger("change"); }
    });

    // pre-select model from ?model=iphone-15
    var qm = new URLSearchParams(window.location.search).get("model");
    if (qm && MM.byId(qm)) { $model.val(qm); }
    refreshModelOptions();

    /* ----- the quote calculation ----- */
    function computeQuote(d) {
      var p = MM.byId(d.model), cond = d.condition;
      var si = p.storage.indexOf(d.storage);
      var base = p.prices[cond];
      var uplift = p.storageUplift[si] || 0;
      var unit = base + uplift, qty = parseInt(d.quantity, 10);
      var subtotal = unit * qty;
      var discount = qty >= 3 ? Math.round(subtotal * 0.05) : 0;
      var trade = d.tradeIn ? TRADE_VALUES[d.tradeDevice] || 0 : 0;
      var delivery = C.deliveryFees[d.delivery] || 0;
      var freeDel = (subtotal - discount) >= 20000 && delivery > 0;
      if (freeDel) delivery = 0;
      var total = Math.max(subtotal - discount - trade + delivery, 0);
      var stock = MM.stockInfo(p, cond), inStock = Math.min(stock.units, qty);
      var back = qty - inStock;

      // delivery estimate
      var now = new Date(), ready;
      var transit = d.delivery === "collect" ? 0 : d.delivery === "durban" ? 0 : 3;
      if (stock.units === 0) ready = addWorkingDays(now, 5 + transit);
      else if (back > 0) ready = addWorkingDays(now, 5 + transit);
      else ready = d.delivery === "nationwide" ? addWorkingDays(now, 3) : now;
      var readyMin = stock.units === 0 || back > 0 ? addWorkingDays(now, 3 + transit) : (d.delivery === "nationwide" ? addWorkingDays(now, 1) : now);

      var availability;
      if (stock.units === 0) availability = { level: "order", text: "Currently on order. Expected within 3 to 5 working days." };
      else if (back > 0) availability = { level: "low", text: inStock + " of " + qty + " in stock now; the other " + back + " can be ordered (3 to 5 working days)." };
      else if (stock.level === "low") availability = { level: "low", text: "Available - low stock (" + stock.units + " left). Reserve soon." };
      else availability = { level: "in", text: "In stock and ready." };

      return { p: p, cond: cond, base: base, uplift: uplift, unit: unit, qty: qty, subtotal: subtotal, discount: discount,
        trade: trade, tradeLabel: d.tradeIn ? TRADE_LABELS[d.tradeDevice] : "", delivery: delivery, freeDel: freeDel, total: total,
        availability: availability, readyMin: readyMin, ready: ready, warranty: MM.warrantyFor(cond) };
    }

    function renderQuote(d, q, ref, sent) {
      var $out = $("#quote-output").empty().prop("hidden", false);
      $("#enquiry-form-wrap").prop("hidden", true);
      var $card = $("<section class='quote' aria-labelledby='quote-title' tabindex='-1'>").appendTo($out);
      $card.append($("<p class='eyebrow'>").text("Reference " + ref));
      $card.append($("<h2 id='quote-title'>").text("Your instant quote, " + d.fullName.split(" ")[0]));
      $card.append($("<p>").append(
        $("<strong>").text(q.p.name + " " + d.storage + " - " + d.colour), " · " + MM.condLabel(q.cond) + " · " + q.warranty + " warranty"));

      var $t = $("<table>").appendTo($card);
      function row(label, val, cls) { $t.append($("<tr>").addClass(cls || "").append($("<td>").text(label), $("<td>").text(val))); }
      row(MM.condLabel(q.cond) + " base price", MM.fmtRand(q.base));
      if (q.uplift) row("Storage upgrade (" + d.storage + ")", "+ " + MM.fmtRand(q.uplift));
      row("Price per phone × " + q.qty, MM.fmtRand(q.subtotal));
      if (q.discount) row("Multi-buy discount (5% for 3+ phones)", "- " + MM.fmtRand(q.discount));
      if (q.trade) row("Estimated trade-in: " + q.tradeLabel, "- " + MM.fmtRand(q.trade));
      row("Delivery: " + $("#delivery option:selected").text().split(" - ")[0], q.freeDel ? "FREE (order over R20,000)" : q.delivery ? "+ " + MM.fmtRand(q.delivery) : "Free");
      row("Estimated total (incl. VAT)", MM.fmtRand(q.total), "total");

      var $av = $("<div class='alert'>").addClass(q.availability.level === "in" ? "alert--ok" : q.availability.level === "low" ? "alert--warn" : "alert--bad")
        .append($("<strong>").text("Availability: "), q.availability.text);
      $card.append($av.css("margin-top", "1rem"));
      var when = q.availability.level === "in" && d.delivery !== "nationwide" ? "today" : fmtDate(q.readyMin) + (q.ready > q.readyMin ? " to " + fmtDate(q.ready) : "");
      $card.append($("<p>").append($("<strong>").text(d.delivery === "collect" ? "Ready for collection: " : "Estimated delivery: "), when + "."));
      if (q.trade) $card.append($("<p class='hint'>").text("Trade-in values are estimates and are confirmed after an in-store inspection of the device."));
      $card.append($("<p class='hint'>").text("This quote is valid for 7 days and is subject to stock. It is not a tax invoice."));

      $card.append($("<div class='alert'>").addClass(sent ? "alert--ok" : "alert--warn").text(
        sent ? "Your enquiry has also been sent to our team. We will reply to " + d.email + "."
             : "We could not reach our server, so your enquiry was not sent automatically. Use the button below to email it to us."));

      var subject = "Quote " + ref + " - " + q.p.name + " " + d.storage;
      var lines = ["Hello Mzwandile Mobile,", "", "Please reserve / confirm this quote:", "Reference: " + ref, "Phone: " + q.p.name + " " + d.storage + ", " + d.colour + ", " + MM.condLabel(q.cond),
        "Quantity: " + q.qty, "Estimated total: " + MM.fmtRand(q.total), "Delivery: " + $("#delivery option:selected").text(),
        "", "Name: " + d.fullName, "Email: " + d.email, "Phone: " + d.phone];
      var $actions = $("<div class='form-actions'>").appendTo($card);
      $actions.append($("<a class='btn'>").attr("href", "mailto:" + C.storeEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"))).text("Email this quote to the store"));
      $actions.append($("<button type='button' class='btn btn--ghost'>").text("Print quote").on("click", function () { window.print(); }));
      $actions.append($("<button type='button' class='btn btn--ghost'>").text("Start a new enquiry").on("click", function () {
        $out.empty().prop("hidden", true); $enq[0].reset(); refreshModelOptions(); $("#trade-field").prop("hidden", true);
        $enq.find(".field").removeClass("is-valid is-invalid"); $enq.find(".error-msg").text(""); $("#enquiry-form-wrap").prop("hidden", false);
        $("html, body").animate({ scrollTop: $enq.offset().top - 90 }, 300);
      }));
      $card.trigger("focus");
      $("html, body").animate({ scrollTop: $card.offset().top - 90 }, 350);
    }

    $enq.on("submit", function (e) {
      e.preventDefault();
      if ($.trim($("#bot-field").val())) return;                 // honeypot: bots fill hidden fields
      var errors = validateForm($enq);
      showSummary($enq, errors);
      if (errors.length) { errors[0].$field.find("input, select, textarea").first().trigger("focus"); return; }

      var d = {
        fullName: getValue($("[data-rule=fullName]")), email: getValue($("[data-rule=email]")), phone: getValue($("[data-rule=phone]")),
        model: $model.val(), storage: $("#storage").val(), colour: $("#colour").val(), condition: $("#condition-group input:checked").val(),
        quantity: $("#quantity").val(), delivery: $("#delivery").val(), tradeIn: $("#tradeIn").is(":checked"), tradeDevice: $("#tradeDevice").val()
      };
      var q = computeQuote(d);
      var ref = "MM-" + todayISO().replace(/-/g, "").slice(2) + "-" + Math.floor(1000 + Math.random() * 9000);
      var $btn = $enq.find("button[type=submit]"); setBusy($btn, true);

      ajaxPost($enq, { reference: ref, quoteTotal: MM.fmtRand(q.total), availability: q.availability.text })
        .then(function () { return true; }, function () { return false; })
        .then(function (sent) { setBusy($btn, false, "Get my quote"); renderQuote(d, q, ref, sent); });
    });
    $enq.on("reset", function () { setTimeout(function () { refreshModelOptions(); $enq.find(".error-summary").prop("hidden", true); }, 0); });
  }

  /* =====================================================================
     3. CONTACT FORM  ->  compiled email
     ===================================================================== */
  var $con = $("#contact-form");
  if ($con.length) {
    liveValidation($con); counters($con);

    $con.on("submit", function (e) {
      e.preventDefault();
      if ($.trim($("#bot-field").val())) return;
      var errors = validateForm($con);
      showSummary($con, errors);
      if (errors.length) { errors[0].$field.find("input, select, textarea").first().trigger("focus"); return; }

      var d = {
        name: getValue($("[data-rule=fullName]")), email: getValue($("[data-rule=email]")), phone: getValue($("[data-rule=phone]")),
        subject: $("#subject option:selected").text(), method: $("#contact-method input:checked").val(), message: $.trim($("#message").val())
      };
      var subject = "[Website message] " + d.subject + " - " + d.name;
      var body = ["Hello Mzwandile Mobile,", "", d.message, "", "--", "Name: " + d.name, "Email: " + d.email,
        "Phone: " + (d.phone || "not provided"), "Preferred reply: " + d.method, "Sent from the Mzwandile Mobile contact form on " + new Date().toLocaleString("en-ZA")].join("\n");
      var mailto = "mailto:" + C.storeEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      var $btn = $con.find("button[type=submit]"); setBusy($btn, true);
      ajaxPost($con, { subject: subject })
        .then(function () { return true; }, function () { return false; })
        .then(function (sent) {
          setBusy($btn, false, "Send message");
          var $o = $("#email-output").empty().prop("hidden", false);
          var $card = $("<section class='card' aria-labelledby='email-title' tabindex='-1'>").appendTo($o);
          $card.append($("<h2 id='email-title'>").text("Your email is ready"));
          $card.append($("<div class='alert'>").addClass(sent ? "alert--ok" : "alert--warn").text(
            sent ? "Thank you, " + d.name.split(" ")[0] + "! Your message was submitted to our team. A copy of the email is below if you also want to send it from your own email app."
                 : "Thank you, " + d.name.split(" ")[0] + ". Your message has been compiled into an email below. Press “Send email” to send it from your email app."));
          $card.append($("<p>").append($("<strong>").text("To: "), C.storeEmail, $("<br>"), $("<strong>").text("Subject: "), subject));
          $card.append($("<pre class='email-preview' tabindex='0' aria-label='Email preview'>").text(body));
          var $a = $("<div class='form-actions'>").appendTo($card);
          $a.append($("<a class='btn'>").attr("href", mailto).text("Send email"));
          $a.append($("<button type='button' class='btn btn--ghost'>").text("Copy email text").on("click", function () {
            var b = $(this);
            (navigator.clipboard ? navigator.clipboard.writeText(body) : Promise.reject()).then(function () { b.text("Copied ✓"); }, function () { b.text("Copy not supported"); });
          }));
          $a.append($("<button type='button' class='btn btn--ghost'>").text("Write another message").on("click", function () {
            $o.empty().prop("hidden", true); $con[0].reset(); $con.find(".field").removeClass("is-valid is-invalid"); $con.find(".error-msg").text("");
            $con.find("textarea").trigger("input"); $("html, body").animate({ scrollTop: $con.offset().top - 90 }, 300);
          }));
          $card.trigger("focus");
          $("html, body").animate({ scrollTop: $card.offset().top - 90 }, 350);
        });
    });
  }
})(jQuery);