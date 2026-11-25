/* ======================================================================
   SITE B  (joshua-fern.github.io)  —  ALL EDITABLE TEXT AND LINKS LIVE HERE
   Edit only the text between quotes. Each block below is one section of the site.
   There are NO contact details on the pages: visitors use the "Contact Joshua" button inside NØLL.
   (Founder email is set in noll-settings.js -> CONTACT, and in Code.gs -> OWNER_EMAIL.)
   ====================================================================== */

/* ===== SECTION 0: SITE SETTINGS ===== */
const SITE = {
  NAME: "Joshua Fernando",
  BRAND: "Joshua Fernando Entrepreneur Portfolio",             // <-- top-left of every page
  ENGINEERING_PORTFOLIO: "https://joshua-srf.github.io/",      // <-- opened by the blue Ø icon in the footer (with the blue transition)
  INSTAGRAM: "https://instagram.com/joshfz"                    // <-- Instagram icon in the footer centre
};

/* ===== SECTION 1: HOME PAGE ("this is where I pursue projects") ===== */
const HOME = {
  eyebrow: "Joshua Fernando",                                                          // small line above the headline
  title: "This is where I pursue Entrepreneurial projects.",                           // big headline
  intro: "R&D ventures are each modelled in full before anything is built, and the working documents are published here so they can be read, checked and shared.",   // small writing under it
  button: "See the projects",                                                          // button to /projects/
  listTitle: "Currently pursuing"                                                      // heading above the short list
};

/* ===== SECTION 2: /projects/ PAGE ===== */
const PROJECTS_PAGE = { title: "Projects", intro: "Each project has its own page you can link to directly, with the full document at the top. Read it, scroll it, or open it in a new tab." };

/* ===== SECTION 3: PROJECTS =====
   Page address = /projects/<slug>/       accent = the colour used on that project's page
   full   = spelled-out name shown under the title       docs = [label, file]  (shown at the top; PDFs go in assets/docs/, or a page path)
   explain= "How it works" steps [title, text]          stats = [big, small]
   problem= [heading, paragraph]    breakthrough = [heading, paragraph]    specs = [label, value]    figures = [file in assets/img/, caption]    roadmap = lines */
const PROJECTS = [
{ slug: "moses", name: "M.O.S.E.S.", full: "Moisture Obtaining Solar Energy System", accent: "#0e7490",
  line: "Solar-powered atmospheric water generation with adaptive compression.",
  metric: ["142 L/day", "F-500 field unit, modelled"], status: "Design report",
  docs: [["M.O.S.E.S. Design Report", "assets/docs/MOSES-Design-Report.pdf"]],
  stats: [["28 L/day", "P-100 pilot unit"], ["142 L/day", "F-500 field unit"], ["0.44 kWh/L", "specific energy, eco mode"], ["$0.26 / L", "F-500 ten-year cost of water"]],
  explain: [["Air in", "Fans pull air through a cyclone and F7/H13 filters. Compression is bypassed by default."], ["Pre-cool", "A recuperator (\u03b5 \u2248 0.5) cools the incoming air using the cold air leaving the unit."], ["Condense", "A 316L mesh held at +5 \u00b0C (R-1234yf refrigerant) drops the air below its dew point and water forms."], ["Collect", "Condensate drains by gravity into a sump and on to a UV-black storage tank."], ["Use", "Raw water for crops, or passive filters (sediment, carbon, silver-ceramic) plus UV-C at the tap for drinking."]],
  problem: ["Water is the constraint, and the grid usually is too.",
    "About 2 billion people lack safely managed drinking water, and arid farmland faces the same limit. Air holds a vast, widely spread reserve of vapour, but existing atmospheric water generators are mostly grid-powered and designed for factory-controlled conditions. M.O.S.E.S. targets the opposite case: remote farmland and communities with strong sun and no dependable grid."],
  breakthrough: [
    ["Recuperated cycle, designed around the cheapest litre", "A recuperated vapour-compression cycle condenses water at about 0.44 kWh/L, running around the clock on PV and a LiFePO4 battery. Output is 28 L/day for the 100 m\u00b3/h pilot and 142 L/day for the 500 m\u00b3/h field unit at the reference climate (32 \u00b0C, 65% RH)."],
    ["Adaptive compression, used only where it earns its place", "An optional oil-free scroll module (CR 1.0\u20132.5, 3.0 in arid mode) lowers the humidity floor from about 12% to 4% RH at 40 \u00b0C. It costs 3\u20138\u00d7 more energy per litre, so the controller engages it only when the air is too dry for the baseline cycle or when solar power would otherwise be wasted."],
    ["A finding that changes the design", "Across 12 regions, spending surplus solar energy on extra airflow recovers +12 to +105 L/day, while spending it on compression recovers only +0.0 to +4.0 L/day. Airflow capacity, not compression, is the better use of spare sun."],
    ["Honest positioning", "In the literature reviewed, large vapour-compression units are grid-powered, solar units are small and sorbent-based, and inlet-air compression is not described. The report therefore calls this an uncommon configuration, not a proven advantage."]],
  specs: [["P-100 pilot", "1.8 \u00d7 1.0 \u00d7 1.8 m skid, \u2248 750 kg with PV; 4.05 kWp PV; 10.24 kWh battery"], ["F-500 field unit", "20 ft container, \u2248 5.7 t with PV; 17.55 kWp PV; 51.2 kWh battery"],
    ["Fully loaded CapEx (eco)", "P-100 $20,357 \u00b7 F-500 $88,410 (budgetary, \u00b125%)"], ["With compression module", "P-100 $26,431 \u00b7 F-500 $120,717"],
    ["Regional output, F-500", "9\u2013146 L/day across 12 modelled regions"], ["Controls & safety", "Raspberry Pi / PLC, 4G telemetry, A2L leak detection and isolation, ventilated refrigerant bay"],
    ["Grid option", "Hybrid inverter-charger and firmware only; process equipment unchanged"]],
  figures: [["moses-architecture.jpg", "System architecture: power, water generation and tiered water use."], ["moses-humidity-floor.jpg", "Minimum humidity for condensation, with and without compression."], ["moses-p100-layout.jpg", "P-100 skid general arrangement (mm)."], ["moses-cost-of-water.jpg", "Levelised cost of water at the reference climate."]],
  roadmap: ["ANSYS Fluent conjugate heat-transfer CFD of the condensation mesh (expected contact factor 0.85\u20130.90).", "90-day pilot of one P-100 at a humid and an arid-hot site: yield, kWh/L, dust loading, microbial quality.", "UV-C reactor biodosimetry and an A2L refrigerant safety review before any health or compliance claim.", "Post-pilot: scroll-expander recovery from the compressed exhaust (1,274\u20131,453 W per module, modelled) and regenerative pasteurisation.", "All figures are model estimates until prototype testing confirms them."] },

{ slug: "magnetite-tower", name: "Solar Thermo Tank & Tower", full: "Passive solar water heating with a magnetite thermal store", accent: "#d97706",
  line: "Passive solar water heating that keeps delivering hot water long after sunset.",
  metric: ["53 h", "hot water after sunset, modelled"], status: "Design specification",
  docs: [["Thermo System Specification", "assets/docs/Solar-Thermo-Tank-Spec.pdf"]],
  stats: [["64.8 \u00b0C", "continuous outlet, Tower"], ["53 h", "night hold above 60 \u00b0C"], ["107.4 L/h", "continuous flow, no pump"], ["0 kWh", "backup electricity (Systems 3\u20136)"]],
  explain: [["Sun in", "An aerogel-polycarbonate shell lets about 80% of sunlight through and traps outgoing infrared."], ["Charge", "An 872 kg bed of magnetite heats to about 80 \u00b0C; its high conductivity spreads heat evenly."], ["Heat water", "Cold mains water (28 \u00b0C) rises through 19 copper pipes buried in the hot bed."], ["Deliver", "Water leaves at 64.8 \u00b0C at 107.4 L/h by thermosiphon: no pump, no electric backup."], ["Night", "The bed keeps the outlet above 60 \u00b0C for about 53 hours after sunset."]],
  problem: ["Solar hot water runs out at night.", "Conventional flat-plate and evacuated-tube collectors lose their heat within hours of sunset, so households either wake to cold water or pay for electric backup every morning. In equatorial regions, heating water is a major share of household electricity use."],
  breakthrough: [
    ["A magnetite thermal store", "An 872 kg packed bed of magnetite (Fe\u2083O\u2084) charges to about 80 \u00b0C. Its thermal conductivity (k = 5.0 W/m\u00b7K, 16.7\u00d7 sand) spreads heat through the whole bed."],
    ["Optimised heat exchange", "Nineteen copper pipes through the bed are sized for NTU \u2248 1.23, giving 64.8 \u00b0C outlet water at 107.4 L/h with no pump."],
    ["Seven documented iterations", "Sand tank \u2192 sand + copper rings \u2192 magnetite + rings \u2192 magnetite tower \u2192 Fresnel-enhanced tank (82 \u00b0C peak) and tower (70.5 \u00b0C) \u2192 combined system. All fit a standard 580 \u00d7 1400 mm footprint, a drop-in for a 150 L home tank."]],
  specs: [["System 3  Magnetite + Cu rings", "60 \u00b0C \u00b7 44 h above 50 \u00b0C \u00b7 0 kWh backup"], ["System 4  Magnetite Tower", "64.8 \u00b0C \u00b7 53 h above 60 \u00b0C \u00b7 0 kWh backup"], ["System 5A  Fresnel Tank", "82 \u00b0C \u00b7 58 h above 60 \u00b0C \u00b7 0 kWh backup"], ["System 5B  Fresnel Tower", "70.5 \u00b0C \u00b7 53 h above 60 \u00b0C \u00b7 0 kWh backup"], ["Design basis", "Equatorial 0\u201310\u00b0 latitude, 25 \u00b0C ambient, DNI 950 W/m\u00b2"], ["Design life", "25\u201335 years"]],
  figures: [],
  roadmap: ["Build and test pilot units over a full year, including humid and cold-climate variants.", "Certification and testing: ISO 9806 collector test, CE, BIS, SNI, and pressure/temperature safety validation.", "Pilot deployments with solar NGO and distributor partners in equatorial markets.", "All performance values are calculated design values, not yet measured on a prototype."] },

{ slug: "restyoume", name: "REStyoU M\u00c9", full: "AI-assisted hiring: CV parsing, match scoring and auto-apply", accent: "#7c3aed",
  line: "A hiring platform that matches candidates and roles, applies automatically above a threshold, and lets recruiters message in bulk.",
  metric: ["Live demo", "working prototype"], status: "Working prototype",
  docs: [["Live demo", "projects/restyoume/demo/"]],
  stats: [["2", "sides: candidates and recruiters"], ["Auto-apply", "at a match threshold you set"], ["Bulk AI", "recruiter messaging"], ["Chat", "real-time messaging"]],
  explain: [["Upload", "A candidate adds a CV and it is parsed into skills and experience."], ["Match", "Each open role gets a match score against that profile."], ["Auto-apply", "Set a threshold; roles above it receive an application automatically."], ["Recruiter match", "Recruiters see the top-matching candidates for a role."], ["Message", "Bulk AI-assisted messages and real-time chat connect both sides."]],
  problem: ["Applying and screening both cost too much time.", "Candidates repeat the same applications by hand; recruiters read far more CVs than they can answer. REStyoU M\u00c9 puts matching and messaging on both sides of the same platform."],
  breakthrough: [["Candidate side", "Parse a CV, score it against open roles and set a match threshold. Auto-apply then submits to roles above that threshold."], ["Recruiter side", "Auto-match top candidates to a role and message them in bulk with AI assistance."], ["Shared messaging", "Both sides get direct messaging and real-time chat in one place."]],
  specs: [["Stack", "Single-file front-end prototype (HTML / JS)"], ["Try it", "Use the Demo Candidate or Demo Recruiter login in the viewer above"]],
  figures: [],
  roadmap: ["EDIT ME: replace demo data with a real backend and persistent accounts.", "EDIT ME: validate match scoring against real recruiter outcomes.", "EDIT ME: run a small pilot with candidates and recruiters."] }
];

/* ===== PORTAL (blue Ø icon in the footer: opens the engineering site with a blue screen transition) ===== */
window.PORTAL = { url: SITE.ENGINEERING_PORTFOLIO, label: "engineering", iconColor: "#0b5fff", leave: "blue" };
