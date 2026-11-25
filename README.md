# SITE B — Entrepreneur Portfolio  (repo: joshua-fern.github.io)

Pages: `/` home  ·  `/projects/`  ·  `/projects/moses/`  ·  `/projects/magnetite-tower/`  ·  `/projects/restyoume/` (+ `/projects/restyoume/demo/`).  Old short links (`/moses/`) redirect.

## HOW TO APPLY THIS UPDATE (do this once)
1. In GitHub open the repo -> **Add file -> Upload files** and drag in EVERYTHING from this folder except `Code.gs` and the README.
2. Open `assets/js/noll-settings.js`: re-enter **WEB_APP_URL** and set **CONTACT -> email** to your founder email. Never overwrite this file afterwards.
3. Backend: script.google.com -> your FOUNDER project -> replace `Code.gs` with the new one -> re-enter `GEMINI_KEY`, `OWNER_EMAIL` (founder email) and the 3 Drive IDs -> Deploy -> Manage deployments -> pencil -> **New version**.
4. Hard-refresh (Ctrl+Shift+R).

## WHERE TO EDIT EVERYTHING
| Change this                                         | File                       | Section / setting |
|-----------------------------------------------------|----------------------------|-------------------|
| Top-left name, Instagram link, link to engineering  | assets/js/content.js       | SECTION 0: SITE (BRAND, INSTAGRAM, ENGINEERING_PORTFOLIO) |
| Home headline + small writing + button              | assets/js/content.js       | SECTION 1: HOME |
| /projects/ page text                                | assets/js/content.js       | SECTION 2 |
| Project text, colour, "how it works" steps, reports | assets/js/content.js       | SECTION 3: PROJECTS (`accent` = colour, `status`, `docs`, `explain`, `stats`...) |
| Word next to the blue Ø / destination               | assets/js/content.js       | PORTAL (bottom) |
| **NØLL document names (chips)**                     | assets/js/noll-settings.js | CHIPS -> `label` (what visitors read) |
| NØLL header title, greeting, welcome                | assets/js/noll-settings.js | HEADER_TITLE, GREETING, WELCOME |
| **Founder email shown by NØLL's Contact chip**      | assets/js/noll-settings.js | CONTACT -> email |
| **Founder email that receives requests**            | Code.gs                    | OWNER_EMAIL |
| File names visitors receive + Drive IDs             | Code.gs                    | DOCS.founder -> `moses_report`, `solar_systems_deck`, `magnetite_tower_deck` |
| AI model names                                      | Code.gs                    | GEMINI_MODEL, GEMINI_FALLBACK_MODELS |

The three NØLL documents: **M.O.S.E.S. Design Report**, **Thermo System Deck: Solar Systems**, **Thermo System Deck: Magnetite Tower**. To rename one: change its `label` in noll-settings.js (and `name` in Code.gs for the attachment's file name). Keep the `id` the same on both sides.

## DOCUMENTS ON THE PAGES
`assets/docs/MOSES-Design-Report.pdf` and `assets/docs/Solar-Thermo-Tank-Spec.pdf` are shown at the top of each project page. Replace the file (same name) to update. The Solar Thermo spec is marked "Confidential": delete it and its `docs` entry if you do not want it public.

## THE BLUE Ø "ENGINEERING" PORTAL
Footer blue Ø + tiny "engineering": click -> screen turns blue, Ø in the middle with a loader -> the engineering site opens -> the Ø drops into its black footer icon.
Instagram icon (centre of footer): content.js -> SITE.INSTAGRAM (currently https://instagram.com/joshfz).

## NØLL SETUP RECAP
Separate Apps Script deployment from Site A. Gemini key from https://aistudio.google.com/apikey. Drive IDs: right-click file -> Share -> Copy link -> ID between `/d/` and `/view`.
Chat not answering? Apps Script -> run `testGemini` -> View -> Logs.
