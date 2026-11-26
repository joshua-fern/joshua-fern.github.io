/* =====================================================================
   NØLL SETTINGS — SITE B (Entrepreneur / founder).  THIS IS THE ONLY NØLL FILE YOU NEED TO EDIT.
   Keep this file when you upload new versions of the site (it holds your Web App URL).
   ===================================================================== */
window.NOLL_SETTINGS = {
  SITE_MODE: "founder",                                   // leave as is for this site
  WEB_APP_URL: "https://script.google.com/macros/s/AKfycbz3etRoO5MbEuZ33Rxej08x6NcHwjXPQEsYkd8ypHPA9C0bc-Yvin2684MwvQR4_TG-/exec",           // <-- 1. paste your FOUNDER Apps Script Web App URL (ends in /exec)

  HEADER_TITLE: "Entrepreneurial Assistant",              // <-- title in the chat window header (next to the Ø)
  GREETING: "Questions or need help? Ask NØLL",           // <-- bubble that pops up on every page
  WELCOME: "Hi, I'm NØLL. Ask me anything about Joshua's ventures, or tick the documents you'd like emailed.",   // first chat message

  CONTACT: {                                              // <-- 2. shown by the "Contact Joshua" chip
    email: "joshua.srfdo@gmail.com",          //     FOUNDER EMAIL (different from the engineering one)
    linkedin: ""                                          //     optional
  },

  /* CHIPS = the buttons in the chat window.  label = the NAME visitors read (EDIT FREELY).
     For instant:true chips, id must match a key in Code.gs -> DOCS.founder:
       moses_report  |  solar_systems_deck  |  magnetite_tower_deck                                   */
  CHIPS: [
    { id: "moses_report",         label: "M.O.S.E.S. Design Report (Instant PDF)", instant: true },
    { id: "solar_systems_deck",   label: "Thermo System Deck: Solar Systems (Instant PDF)", instant: true },
    { id: "magnetite_tower_deck", label: "Thermo System Deck: Magnetite Tower (Instant PDF)", instant: true },
    { id: "custom_brief",         label: "Custom Brief Request" },
    { id: "live",                 label: "Talk to Joshua Live" },
    { id: "contact",              label: "Contact Joshua", info: true }
  ],
  CERTS: {}
};
