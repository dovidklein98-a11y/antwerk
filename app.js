/* Antwerk 2026 – Immo-Spot visitor registration. Plain JS, no dependencies. */
(function () {
  "use strict";
  var C = window.ANTWERK_CONFIG || {};
  var params = new URLSearchParams(location.search);
  var DEMO = params.get("demo") === "1";

  /* ---------- texts ---------- */
  var T = {
    nl: {
      expoLine: "Antwerk · 5 november 2026",
      homeTitle: "Welkom bij Immo-Spot",
      homeLead: "Makelaardij, verhuur en beheer van vastgoed in Antwerpen.",
      prizeFree: "Gratis deelname, geen aankoop nodig. Prijstrekking op {draw}.",
      prizeLine: "Maak kans op {prize}!",
      pathATitle: "Ik heb een pand / ik ben geïnteresseerd in jullie diensten",
      pathASub: "Verkopen, kopen, verhuren of beheer: laat uw gegevens achter.",
      pathBTitle: "Ik ben hier gewoon voor de fun",
      pathBSub: "Speel onze quiz van 3 vragen en doe mee aan de prijstrekking.",
      back: "Terug",
      aTitle: "Waarmee kunnen we u helpen?",
      servicesLabel: "Ik ben geïnteresseerd in (kies één of meer) *",
      svc_sell: "Verkopen", svc_buy: "Kopen", svc_rent: "Verhuren", svc_manage: "Laten beheren",
      name: "Naam *", email: "E-mailadres *", phone: "Telefoon", optional: "(optioneel)",
      propType: "Type pand", propLoc: "Ligging van het pand",
      propLocPh: "Gemeente of straat, bv. Antwerpen of Belgielei",
      propLocHint: "Het pand waarover het gaat, niet uw thuisadres.",
      price: "Prijsklasse (aankoop of verkoop)",
      priceHint: "Koopt of verkoopt u? Kies de prijsklasse die bij u past.",
      message: "Uw bericht of vraag",
      typeDefault: "Maak een keuze…", priceDefault: "Maak een keuze…",
      type_apartment: "Appartement", type_house: "Huis", type_studio: "Studio of kamer",
      type_building: "Gebouw met meerdere eenheden", type_commercial: "Handelspand of kantoor",
      type_land: "Bouwgrond", type_other: "Andere",
      price_lt150: "Minder dan € 150.000", price_150_250: "€ 150.000 – € 250.000",
      price_250_350: "€ 250.000 – € 350.000", price_350_500: "€ 350.000 – € 500.000",
      price_500_750: "€ 500.000 – € 750.000", price_750_1m: "€ 750.000 – € 1.000.000",
      price_gt1m: "Meer dan € 1.000.000", price_na: "Weet ik nog niet / niet van toepassing",
      consentData: "Ik ga akkoord dat Immo-Spot mijn gegevens verwerkt voor mijn inschrijving en de gratis prijstrekking, zoals beschreven in de <a href=\"{privacy}\" target=\"_blank\" rel=\"noopener\">privacyverklaring</a> en het <a href=\"{rules}\" target=\"_blank\" rel=\"noopener\">reglement van de prijstrekking</a>. *",
      consentContact: "Ja, Immo-Spot mag mij contacteren over hun diensten. (optioneel)",
      submit: "Verzenden en meedoen",
      quizTitle: "Quiz", bTitle: "Bijna klaar: laat uw gegevens achter voor de prijstrekking",
      quizNote: "Elk antwoord telt mee voor de lol. Ook bij een fout antwoord doet u mee.",
      quizProgress: "Vraag {n} van {total}",
      scoreText: "Goed gespeeld! Nog één stap om mee te doen met de gratis prijstrekking.",
      submitB: "Doe mee aan de prijstrekking",
      errName: "Vul uw naam in.", errEmail: "Vul een geldig e-mailadres in.",
      errServices: "Kies minstens één dienst.", errConsent: "U moet akkoord gaan om deel te nemen.",
      sending: "Bezig met verzenden…",
      errNoEndpoint: "Dit formulier is nog niet gekoppeld aan de opslag. Er is niets verzonden of bewaard. Meld dit aan het team aan de stand.",
      errNetwork: "Verzenden is niet gelukt. Controleer uw internetverbinding en probeer opnieuw. Uw gegevens blijven in het formulier staan.",
      errServer: "Er ging iets mis bij het opslaan. Probeer het opnieuw of spreek iemand van het team aan.",
      thTitle: "Bedankt{name}!",
      thEntry: "Uw deelname aan de gratis prijstrekking is bevestigd (nr. {n}). De trekking is op {draw}.",
      thMail: "We hebben een bevestiging gestuurd naar {email}.",
      thMailFail: "Uw deelname is geregistreerd, maar de bevestigingsmail kon niet worden verstuurd.",
      thContact: "Immo-Spot neemt binnenkort contact met u op.",
      thDup: "Dit e-mailadres had al een deelname. Er geldt één deelname per persoon. Uw gegevens zijn wel genoteerd.",
      again: "Volgende deelnemer ({s}s)", againNow: "Volgende deelnemer",
      privacy: "Privacyverklaring (concept)", rules: "Reglement prijstrekking (concept)",
      demo: "DEMO-MODUS: er wordt niets opgeslagen of verstuurd.",
      q1: "Welke diensten biedt Immo-Spot aan?",
      q1a: "Makelaardij, verhuur en beheer", q1b: "Enkel reisbureau en autoverhuur", q1c: "Enkel schilderwerken", q1d: "Enkel bakkerij en catering",
      q2: "In welke stad is Immo-Spot gevestigd?",
      q2a: "Antwerpen", q2b: "Gent", q2c: "Brugge", q2d: "Hasselt",
      q3: "Hoe heet de beurs waar u nu bent en wanneer is ze?",
      q3a: "Antwerk, 5 november 2026", q3b: "Antwerk, 1 januari 2027", q3c: "Antwerp Fair, 12 oktober 2026", q3d: "Antwerk, 5 maart 2026"
    },
    en: {
      expoLine: "Antwerk · 5 November 2026",
      homeTitle: "Welcome to Immo-Spot",
      homeLead: "Brokerage, rental and property management in Antwerp.",
      prizeFree: "Free to enter, no purchase necessary. Prize draw on {draw}.",
      prizeLine: "Win {prize}!",
      pathATitle: "I have a property / I'm interested in your services",
      pathASub: "Sell, buy, rent out or hand over management: leave your details.",
      pathBTitle: "I'm just here for the fun",
      pathBSub: "Play our 3-question quiz and join the prize draw.",
      back: "Back",
      aTitle: "How can we help you?",
      servicesLabel: "I'm interested in (choose one or more) *",
      svc_sell: "Sell", svc_buy: "Buy", svc_rent: "Rent out", svc_manage: "Hand over for management",
      name: "Name *", email: "Email address *", phone: "Phone", optional: "(optional)",
      propType: "Type of property", propLoc: "Location of the property",
      propLocPh: "Town or street, e.g. Antwerp or Belgielei",
      propLocHint: "The property in question, not your home address.",
      price: "Price range (to buy or to sell)",
      priceHint: "Buying or selling? Pick the price range that fits.",
      message: "Your message or question",
      typeDefault: "Choose…", priceDefault: "Choose…",
      type_apartment: "Apartment", type_house: "House", type_studio: "Studio or room",
      type_building: "Building with several units", type_commercial: "Commercial property or office",
      type_land: "Building land", type_other: "Other",
      price_lt150: "Under € 150,000", price_150_250: "€ 150,000 – € 250,000",
      price_250_350: "€ 250,000 – € 350,000", price_350_500: "€ 350,000 – € 500,000",
      price_500_750: "€ 500,000 – € 750,000", price_750_1m: "€ 750,000 – € 1,000,000",
      price_gt1m: "Over € 1,000,000", price_na: "Not sure yet / not applicable",
      consentData: "I agree that Immo-Spot processes my data for my registration and the free prize draw, as described in the <a href=\"{privacy}\" target=\"_blank\" rel=\"noopener\">privacy notice</a> and the <a href=\"{rules}\" target=\"_blank\" rel=\"noopener\">prize draw rules</a>. *",
      consentContact: "Yes, Immo-Spot may contact me about their services. (optional)",
      submit: "Submit and enter the draw",
      quizTitle: "Quiz", bTitle: "Almost done: leave your details for the prize draw",
      quizNote: "Every answer counts just for fun. A wrong answer still gets you into the draw.",
      quizProgress: "Question {n} of {total}",
      scoreText: "Well played! One more step to join the free prize draw.",
      submitB: "Join the prize draw",
      errName: "Please enter your name.", errEmail: "Please enter a valid email address.",
      errServices: "Please choose at least one service.", errConsent: "You must agree in order to take part.",
      sending: "Sending…",
      errNoEndpoint: "This form is not connected to storage yet. Nothing was sent or saved. Please tell the team at the stand.",
      errNetwork: "Sending failed. Please check your internet connection and try again. Your details are still in the form.",
      errServer: "Something went wrong while saving. Please try again or speak to someone on the team.",
      thTitle: "Thank you{name}!",
      thEntry: "Your entry in the free prize draw is confirmed (no. {n}). The draw takes place on {draw}.",
      thMail: "We sent a confirmation to {email}.",
      thMailFail: "Your entry is registered, but the confirmation email could not be sent.",
      thContact: "Immo-Spot will contact you soon.",
      thDup: "This email address already had an entry. There is one entry per person. Your details were noted.",
      again: "Next participant ({s}s)", againNow: "Next participant",
      privacy: "Privacy notice (draft)", rules: "Prize draw rules (draft)",
      demo: "DEMO MODE: nothing is saved or sent.",
      q1: "Which services does Immo-Spot offer?",
      q1a: "Brokerage, renting out and management", q1b: "Only travel agency and car rental", q1c: "Only painting work", q1d: "Only bakery and catering",
      q2: "In which city is Immo-Spot based?",
      q2a: "Antwerp", q2b: "Ghent", q2c: "Bruges", q2d: "Hasselt",
      q3: "What is the name of the expo you're at, and when is it?",
      q3a: "Antwerk, 5 November 2026", q3b: "Antwerk, 1 January 2027", q3c: "Antwerp Fair, 12 October 2026", q3d: "Antwerk, 5 March 2026"
    }
  };

  var SERVICES = ["sell", "buy", "rent", "manage"];
  var TYPES = ["apartment", "house", "studio", "building", "commercial", "land", "other"];
  var PRICES = ["lt150", "150_250", "250_350", "350_500", "500_750", "750_1m", "gt1m", "na"];
  var QUIZ = [{ q: "q1", a: ["q1a", "q1b", "q1c", "q1d"] }, { q: "q2", a: ["q2a", "q2b", "q2c", "q2d"] }, { q: "q3", a: ["q3a", "q3b", "q3c", "q3d"] }];
  // The first answer of each question is the correct one (order is shuffled when shown).

  /* ---------- state ---------- */
  var lang = (C.DEFAULT_LANG === "en") ? "en" : "nl";
  if (params.get("lang") === "en" || params.get("lang") === "nl") lang = params.get("lang");
  var screen = "home", path = null, quiz = { i: 0, score: 0, order: [] };
  var timer = null, tick = null, busy = false;

  function $(id) { return document.getElementById(id); }
  function t(k, v) {
    var s = (T[lang][k] != null) ? T[lang][k] : k;
    if (v) Object.keys(v).forEach(function (n) { s = s.split("{" + n + "}").join(v[n]); });
    return s;
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function cfg(o) { return (o && o[lang]) || ""; }
  function legalUrl(p) { return p + "?lang=" + lang; }

  /* ---------- rendering ---------- */
  function show(name) {
    screen = name;
    ["home", "a", "quiz", "b", "thanks"].forEach(function (n) { $("s-" + n).hidden = (n !== name); });
    window.scrollTo(0, 0);
  }

  function fillSelect(sel, keys, prefix, defKey) {
    var cur = sel.value;
    sel.innerHTML = "";
    var o = document.createElement("option"); o.value = ""; o.textContent = t(defKey); sel.appendChild(o);
    keys.forEach(function (k) { var e = document.createElement("option"); e.value = k; e.textContent = t(prefix + k); sel.appendChild(e); });
    sel.value = cur;
  }

  function renderServices() {
    var box = $("serviceChips");
    var checked = {};
    box.querySelectorAll("input:checked").forEach(function (i) { checked[i.value] = true; });
    box.innerHTML = "";
    SERVICES.forEach(function (k) {
      var l = document.createElement("label"); l.className = "chip";
      l.innerHTML = '<input type="checkbox" name="services" value="' + k + '"' + (checked[k] ? " checked" : "") + '><span>' + esc(t("svc_" + k)) + "</span>";
      box.appendChild(l);
    });
  }

  function consentHtml(prefix, withContact) {
    var h = '<div class="check-row"><input type="checkbox" id="' + prefix + 'ConsentData" name="consentData"><label for="' + prefix + 'ConsentData">' +
      t("consentData", { privacy: legalUrl("privacy.html"), rules: legalUrl("rules.html") }) + '</label></div>' +
      '<p class="err" data-err="consent" hidden></p>' +
      '<div class="check-row"><input type="checkbox" id="' + prefix + 'ConsentContact" name="consentContact"><label for="' + prefix + 'ConsentContact">' + esc(t("consentContact")) + "</label></div>";
    return h;
  }
  function renderConsents() {
    [["consentsA", "a"], ["consentsB", "b"]].forEach(function (p) {
      var box = $(p[0]);
      var d = box.querySelector('input[name=consentData]'), c = box.querySelector('input[name=consentContact]');
      var dv = d && d.checked, cv = c && c.checked;
      box.innerHTML = consentHtml(p[1]);
      box.querySelector('input[name=consentData]').checked = !!dv;
      box.querySelector('input[name=consentContact]').checked = !!cv;
    });
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    document.querySelectorAll(".lang").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false"); });
    $("prizeLine").textContent = t("prizeLine", { prize: cfg(C.PRIZE) });
    document.querySelector('[data-i18n="prizeFree"]').textContent = t("prizeFree", { draw: cfg(C.DRAW_DATE) });
    document.querySelector('[data-i18n="expoLine"]').textContent = (C.EXPO_NAME || "Antwerk") + " · " + cfg(C.EXPO_DATE);
    fillSelect($("aType"), TYPES, "type_", "typeDefault");
    fillSelect($("aPrice"), PRICES, "price_", "priceDefault");
    renderServices(); renderConsents();
    $("lnkPrivacy").href = legalUrl("privacy.html"); $("lnkRules").href = legalUrl("rules.html");
    document.title = "Antwerk 2026 · Immo-Spot";
    $("demoBanner").hidden = !DEMO; $("demoBanner").textContent = t("demo");
    if (screen === "quiz") renderQuestion();
    if (screen === "b") renderScore();
    clearErrors();
  }

  /* ---------- quiz ---------- */
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function startQuiz() {
    quiz = { i: 0, score: 0, order: QUIZ.map(function (q) { return shuffle([0, 1, 2, 3]); }) };
    show("quiz"); renderQuestion();
  }
  function renderQuestion() {
    var q = QUIZ[quiz.i];
    $("quizProgress").textContent = t("quizProgress", { n: quiz.i + 1, total: QUIZ.length });
    $("quizQ").textContent = t(q.q);
    var box = $("quizAnswers"); box.innerHTML = ""; box.classList.remove("locked");
    quiz.order[quiz.i].forEach(function (idx) {
      var b = document.createElement("button"); b.type = "button"; b.className = "ans"; b.textContent = t(q.a[idx]);
      b.setAttribute("data-correct", idx === 0 ? "1" : "0");
      b.addEventListener("click", function () { answer(b, idx === 0); });
      box.appendChild(b);
    });
  }
  function answer(btn, correct) {
    var box = $("quizAnswers"); box.classList.add("locked");
    if (correct) quiz.score++;
    btn.classList.add(correct ? "right" : "wrong");
    if (!correct) box.querySelectorAll('[data-correct="1"]').forEach(function (b) { b.classList.add("right"); });
    setTimeout(function () {
      quiz.i++;
      if (quiz.i < QUIZ.length) renderQuestion(); else { show("b"); renderScore(); }
    }, 1100);
  }
  function renderScore() { $("scoreN").textContent = quiz.score + "/" + QUIZ.length; $("scoreText").textContent = t("scoreText"); }

  /* ---------- validation ---------- */
  function clearErrors() {
    document.querySelectorAll("[data-err]").forEach(function (e) { e.hidden = true; e.textContent = ""; });
    document.querySelectorAll(".invalid").forEach(function (e) { e.classList.remove("invalid"); });
    $("errA").hidden = true; $("errB").hidden = true;
  }
  function setErr(form, key, msg, input) {
    var e = form.querySelector('[data-err="' + key + '"]'); if (e) { e.textContent = msg; e.hidden = false; }
    if (input) input.classList.add("invalid");
  }
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function validate(form, isA) {
    clearErrors();
    var first = null, ok = true;
    function bad(key, msg, input) { ok = false; setErr(form, key, msg, input); if (!first) first = input || form.querySelector('[data-err="' + key + '"]'); }
    if (isA && !form.querySelector('input[name=services]:checked')) bad("services", t("errServices"), null);
    var name = form.elements.name.value.trim(), email = form.elements.email.value.trim();
    if (name.length < 2) bad("name", t("errName"), form.elements.name);
    if (!EMAIL_RE.test(email)) bad("email", t("errEmail"), form.elements.email);
    if (!form.elements.consentData.checked) bad("consent", t("errConsent"), form.elements.consentData);
    if (first && first.scrollIntoView) first.scrollIntoView({ block: "center", behavior: "smooth" });
    return ok;
  }

  /* ---------- submit ---------- */
  function uuid() { return "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10); }
  function buildPayload(form, isA) {
    var p = {
      submissionId: uuid(),
      path: isA ? "A" : "B",
      language: lang,
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      consentData: form.elements.consentData.checked,
      consentContact: form.elements.consentContact.checked,
      website: form.elements.website.value   // honeypot, must stay empty
    };
    if (isA) {
      p.services = Array.prototype.map.call(form.querySelectorAll("input[name=services]:checked"), function (i) { return i.value; });
      p.phone = form.elements.phone.value.trim();
      p.propertyType = form.elements.propertyType.value;
      p.propertyLocation = form.elements.propertyLocation.value.trim();
      p.priceRange = form.elements.priceRange.value;
      p.message = form.elements.message.value.trim();
    } else {
      p.quizScore = quiz.score + "/" + QUIZ.length;
    }
    return p;
  }

  function send(payload) {
    if (DEMO) return new Promise(function (r) { setTimeout(function () { r({ ok: true, entry: 0, duplicate: false, emailSent: true, demo: true }); }, 600); });
    if (!C.ENDPOINT_URL) return Promise.reject(new Error("NO_ENDPOINT"));
    var ctrl = ("AbortController" in window) ? new AbortController() : null;
    var to = setTimeout(function () { if (ctrl) ctrl.abort(); }, 25000);
    // text/plain avoids a CORS preflight, which Apps Script web apps cannot answer.
    return fetch(C.ENDPOINT_URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload), redirect: "follow", signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { clearTimeout(to); return r.json(); })
      .catch(function (e) { clearTimeout(to); throw (e && e.message === "NO_ENDPOINT") ? e : new Error("NETWORK"); });
  }

  function submit(form, isA) {
    if (busy) return;
    if (!validate(form, isA)) return;
    var btn = $(isA ? "submitA" : "submitB"), errBox = $(isA ? "errA" : "errB");
    var payload = buildPayload(form, isA);
    busy = true; btn.disabled = true; var lab = btn.querySelector(".big-t"); var old = lab.textContent; lab.textContent = t("sending");
    errBox.hidden = true;
    send(payload).then(function (res) {
      if (!res || res.ok !== true) throw new Error("SERVER");
      showThanks(payload, res);
      form.reset(); renderServices(); renderConsents();
    }).catch(function (e) {
      var m = e.message === "NO_ENDPOINT" ? t("errNoEndpoint") : e.message === "SERVER" ? t("errServer") : t("errNetwork");
      errBox.textContent = m; errBox.hidden = false; errBox.scrollIntoView({ block: "center", behavior: "smooth" });
    }).then(function () { busy = false; btn.disabled = false; lab.textContent = old; });
  }

  /* ---------- thank you + auto reset ---------- */
  function showThanks(p, res) {
    var first = p.name.split(/\s+/)[0];
    $("thTitle").textContent = t("thTitle", { name: first ? " " + first : "" });
    $("thEntry").textContent = t("thEntry", { n: res.demo ? "DEMO" : res.entry, draw: cfg(C.DRAW_DATE) });
    $("thMail").textContent = (res.emailSent === false) ? t("thMailFail") : t("thMail", { email: p.email });
    $("thContact").textContent = t("thContact"); $("thContact").hidden = !p.consentContact;
    $("thDup").textContent = t("thDup"); $("thDup").hidden = !res.duplicate;
    show("thanks");
    var secs = C.THANKYOU_RESET_SECONDS || 20, left = secs, started = Date.now();
    function paint() { $("againT").textContent = t("again", { s: Math.max(0, left) }); $("barFill").style.transform = "scaleX(" + Math.max(0, left / secs) + ")"; }
    paint(); stopTimers();
    tick = setInterval(function () { left = secs - Math.round((Date.now() - started) / 1000); paint(); if (left <= 0) resetAll(); }, 250);
  }
  function stopTimers() { if (tick) clearInterval(tick); tick = null; }
  function resetAll() {
    stopTimers(); path = null;
    lang = (C.DEFAULT_LANG === "en") ? "en" : "nl";
    ["formA", "formB"].forEach(function (id) { $(id).reset(); });
    applyLang(); show("home");
  }

  /* ---------- wiring ---------- */
  document.querySelectorAll(".lang").forEach(function (b) { b.addEventListener("click", function () { lang = b.getAttribute("data-lang"); applyLang(); }); });
  $("goA").addEventListener("click", function () { path = "A"; clearErrors(); show("a"); });
  $("goB").addEventListener("click", function () { path = "B"; startQuiz(); });
  document.querySelectorAll("[data-back]").forEach(function (b) { b.addEventListener("click", function () { clearErrors(); show("home"); }); });
  $("formA").addEventListener("submit", function (e) { e.preventDefault(); submit($("formA"), true); });
  $("formB").addEventListener("submit", function (e) { e.preventDefault(); submit($("formB"), false); });
  $("again").addEventListener("click", resetAll);

  applyLang(); show("home");
  window.__antwerk = { get lang() { return lang; }, get screen() { return screen; } };  // for automated tests
})();
