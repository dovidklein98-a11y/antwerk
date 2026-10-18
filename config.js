/* ===== Antwerk 2026 – Immo-Spot : site configuration =====
   Edit the values below. After changing PUBLIC_URL run:  python3 make_qr.py   */
window.ANTWERK_CONFIG = {
  // 1) Paste the Google Apps Script Web App URL here (ends with /exec). See README.
  //    While empty, the form shows a clear "not connected yet" message and saves nothing.
  ENDPOINT_URL: "",

  // 2) The public web address visitors will open (used by make_qr.py to build qr.png).
  //    PLACEHOLDER - replace with the real address once hosting is decided.
  PUBLIC_URL: "https://antwerk.example.com/",

  // Event + draw
  EXPO_NAME: "Antwerk",
  EXPO_DATE: { nl: "5 november 2026", en: "5 November 2026" },
  DRAW_DATE: { nl: "6 november 2026", en: "6 November 2026" },
  PRIZE: { nl: "een elektrische step", en: "an electric scooter" },   // example prize - change freely

  // Company
  COMPANY_NAME: "Immo-Spot",
  CONTACT_EMAIL: "info@immo-spot.be",

  // Kiosk / tablet behaviour
  DEFAULT_LANG: "nl",
  THANKYOU_RESET_SECONDS: 20
};
