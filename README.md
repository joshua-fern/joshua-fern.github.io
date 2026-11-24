# SITE B — Founder & R&D  (repo: joshua-fern.github.io)

Pages: `/` home ("This is where I pursue projects")  ·  `/projects/` list  ·  `/projects/moses/`  `/projects/magnetite-tower/`  `/projects/restyoume/` (+ `/projects/restyoume/demo/`)
Old short links like `/moses/` redirect automatically. There are NO contact details on the pages; visitors use NØLL's "Contact Joshua" chip.

## WHAT TO EDIT, AND WHERE
| I want to change...                            | File                      | Look for                                  |
|------------------------------------------------|---------------------------|-------------------------------------------|
| Home headline, intro, button                   | assets/js/content.js      | SECTION 1: HOME PAGE                      |
| /projects/ page text                           | assets/js/content.js      | SECTION 2                                 |
| Any project text, colours, steps, documents    | assets/js/content.js      | SECTION 3: PROJECTS (name, full, accent, docs, explain, stats, problem, breakthrough, specs, roadmap) |
| Link back to the engineering site              | assets/js/content.js      | SECTION 0: SITE                           |
| **FOUNDER email shown in NØLL "Contact"**      | assets/js/noll-widget.js  | NOLL_CONFIG -> CONTACT -> "founder"       |
| **Email that receives requests/receipts**      | Code.gs (Apps Script)     | OWNER_EMAIL (top of file)                 |
| Project decks NØLL can email                   | Code.gs                   | DOCS.founder (Drive file IDs)             |

## FOLDERS
```
index.html  projects/index.html  projects/<slug>/index.html  projects/restyoume/demo/index.html (your prototype)
assets/docs/   MOSES-Design-Report.pdf, Solar-Thermo-Tank-Spec.pdf   (shown at the top of each project page)
assets/img/    colour figures from the MOSES report
Code.gs        founder backend (paste into script.google.com, DO NOT upload to GitHub)
```
To update the MOSES report: replace `assets/docs/MOSES-Design-Report.pdf` (same name). The acronym line comes from `full:` in content.js.
New project: copy `projects/moses/`, rename, change `data-slug` and the 2 titles inside, add the entry in content.js.

## NØLL SETUP (separate deployment from Site A)
1. Gemini key from https://aistudio.google.com/apikey -> `GEMINI_KEY` in THIS Code.gs.
2. Upload your investor deck PDF + MOSES report PDF to a private Drive folder; paste their File IDs into `DOCS.founder.project_deck.id` and `.technical_paper.id`.
3. New Apps Script project -> paste this Code.gs -> set OWNER_EMAIL (founder email) -> Deploy as Web app (Execute as Me, Anyone) -> copy the /exec URL into `WEB_APP_URL` in assets/js/noll-widget.js.
4. If NØLL emails but does not chat: run `testGemini` in the Apps Script editor and read the log (see Site A README step 5), then deploy a NEW VERSION.

## PUBLISH
Repo name `joshua-fern.github.io` -> Settings -> Pages -> main / root. (A custom domain later: add a `CNAME` file with the domain and the A/CNAME DNS records from GitHub's docs.)

## NOTE ON CONFIDENTIAL DOCUMENTS
The Solar Thermo spec PDF is marked "Investor and Manufacturer — Confidential". A public GitHub Pages repo makes it readable by anyone. To keep it private, delete it from assets/docs/ and set that project's `docs` in content.js to a different file.
