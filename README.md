# VANSHFLIX — Vansh Gupta's Netflix-style Portfolio

A complete **new portfolio**, designed independently as a Netflix-inspired experience. It is not the older v0 portfolio with a reskin.

## What you'll see

- Cinematic V intro (skip supported)
- **Who's Watching?** profiles: Recruiter, Developer, Stalker, Adventurer
- Role-specific hero content and a terminal panel on the Stalker profile
- Netflix-style horizontal shelves, responsive cover art and working project detail modals
- Pages for projects, career timeline and education, tech stack, certifications, contact
- Search across the portfolio, project filters, modal actions, keyboard dismissal
- Your resume PDF, all six original projects, work history, skills, nine certificates and personal links
- **No fake GitHub/LeetCode statistics.** These link to the real services instead.

## Run locally (Mac, Windows, Linux)

Install Node.js 18 or later, open this folder in VS Code, and run:

```bash
npm run dev
```

Open **http://localhost:5173** in your browser. There is **no `npm install` required**, and there are **no third-party dependencies**.

To check the source and assets:

```bash
npm run build
```

This is a dependency-free static project, so `build` runs validation checks rather than bundling files.

## Where to edit your details

Edit **`data.js`** to update the name, bio, social links, projects, experience, skills, and certifications. If you change a project's poster, add its new image under `assets/posters`. For a new certificate photo, put the file under `assets/certificates`.

- Main app navigation, project modals, and rendering: `app.js`
- Netflix-inspired appearance and responsive rules: `styles.css`
- Resume PDF: `assets/Vansh_Gupta_Resume.pdf`
- Logo/favicon: `assets/favicon.svg`

## Deploy

Upload the whole folder to a **new GitHub repository** or a fresh Vercel project (don't overwrite your previous live portfolio until you're happy).

For Vercel, select **Other** as the framework preset. Set Build Command to **empty** (or `npm run build` if Vercel requires one), Output Directory to **`.`**, and Install Command to **empty**. The included `vercel.json` handles deep URLs like `/profile/stalker`.

If your host supports plain static sites, you can publish the HTML/CSS/JS and `assets/` folder directly, with a SPA fallback to `/index.html`.

## Sources and content accuracy

This site uses content extracted from your uploaded old portfolio (`lib/data/`, contact pages) and the resume you provided. The certificate files and resume PDF are copied from your own files. Some project demo/GitHub links were inherited from the old portfolio under a **different GitHub username (`guptavansh`)**; please test them and update `data.js` if they have moved. Certificate images are displayed when your old files contained one; other certificates use a graphic card rather than a fake certificate photo.

No backend, user accounts, tracking, fake contributions, copied Netflix TV artwork, or secret tokens are included. This is inspired by the interaction and dark/red visual language of the reference projects, but the source code and illustrated project art in this package were newly written for Vanshflix.

## Design references

- https://sandhit.vercel.app/ — Netflix portfolio concept, role browsing and project shelves
- https://usama-portfolio-site.vercel.app/profile/stalker — alternate role-based hacker terminal aesthetic
