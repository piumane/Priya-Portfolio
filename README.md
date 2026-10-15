# Priya Mane · Portfolio

A static personal portfolio (plain HTML, CSS and JavaScript). No framework, no build step, no backend.
Sections: Hero, About, Experience, Selected Work, Technical Skills, Certifications, Beyond Code, Contact.

## Files

```
priya-portfolio/
├── index.html              Page structure, hero text, About and Experience text
├── content.js              EDIT THIS: links, education, projects, skills, certifications, achievements
├── style.css               Design. Colours are variables at the top (:root)
├── script.js               Behaviour (menu, project accordions, animations). Rarely needs editing
├── Priya_Mane_Resume.pdf   Your resume (replace to update)
├── assets/portrait.png     Your 3D portrait
└── README.md
```

Fonts (Anton and Manrope) load from Google Fonts, so the site needs an internet connection to show them. Without it, the browser uses fallback fonts.

## Update your resume
Replace `Priya_Mane_Resume.pdf` with the new file, keeping the exact same name and location (next to `index.html`). Do not edit the HTML.

## Update content
- **Projects, skills, certifications, education, achievements, email/LinkedIn/GitHub:** open `content.js`. Each block has comments. Copy a line to add an item; delete a line to remove one. Keep the quotes and commas.
- **GitHub / Live Demo buttons on a project:** add `github:"https://..."` and/or `demo:"https://..."` inside that project. Use only real working URLs. Without them, no button appears.
- **Hero text, About paragraphs, Experience:** open `index.html` and search for `EDIT HERE`.
- **Colours:** change the variables in the first block of `style.css`.

## Upload to GitHub
1. Create a new repository on github.com (for example `priya-portfolio`). Choose Public.
2. Click "uploading an existing file", drag in everything from inside the `priya-portfolio` folder (files and the `assets` folder, not the folder itself), and click Commit changes.
   Or with Git: `git init`, `git add .`, `git commit -m "Initial portfolio"`, then add your repository as `origin` and `git push -u origin main`.

## Turn on GitHub Pages
1. Open the repository, then **Settings → Pages**.
2. Under "Build and deployment", set Source to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then Save.
4. After a minute or two, GitHub shows your site address at the top of that page. Open it and check everything before sharing.

## Publish future updates
Edit the file (on GitHub with the pencil icon, or locally), then commit. In the web uploader, upload the new file over the old one. The site refreshes in a minute or two.

## Troubleshooting
- **Image, CSS or script missing:** check the file names match exactly, including capital letters (`Priya_Mane_Resume.pdf`, `assets/portrait.png`), and that `assets` was uploaded as a folder.
- **Old resume still downloads:** your browser or GitHub's cache is serving the old file. Wait a few minutes and hard refresh (Ctrl+Shift+R, or Cmd+Shift+R on Mac), or try a private window.
- **Blank projects or skills:** a comma or quote is probably missing in `content.js`. Open the browser console (F12) to see the line.
- **404 on the site address:** confirm Pages is enabled and `index.html` is in the repository root, not inside a subfolder.

## Privacy
Your resume contains your phone number, and the PDF is public once published. If you don't want that, remove the number from the PDF before uploading. The web page itself does not show it.
