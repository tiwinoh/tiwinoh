# Next.js starter for tiwinoh

This is a minimal Next.js + Tailwind setup created for the repository. It includes a small example page and rectangular button styles.

Quick start
1. Open PowerShell or cmd and go to the project folder:

```powershell
cd 'C:\Users\Tiwinoh\Documents\GitHub\tiwinoh\nextjs'
```

2. Install dependencies:

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

PowerShell notes (ExecutionPolicy)
- If you see an error like "Impossible de charger ... npm.ps1, car l’exécution de scripts est désactivée", run one of these options:

Temporary (safe for the current session):

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
npm install
```

Permanent for current user (convenient):

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
npm install
```

Or avoid PowerShell by using cmd or `npm.cmd`:

```powershell
npm.cmd install
```

Tailwind / build notes
- Tailwind is configured via `tailwind.config.js` and `postcss.config.js`.
- The CSS is processed at build time by PostCSS. If you modify `styles/globals.css` make sure to re-run the dev server.

Troubleshooting
- If npm fails with ETARGET, force-install the latest supported versions:

```powershell
npm install --save-dev tailwindcss@latest postcss@latest autoprefixer@latest
```

If you still have issues, try resetting the registry and cache:

```powershell
npm config set registry https://registry.npmjs.org/
npm cache verify
npm install
```

That's it — the app is intentionally minimal. If you want I can add a build script to pre-generate the CSS or add GitHub Pages / Vercel deployment instructions.
# Next.js starter for tiwinoh

This is a minimal Next.js + Tailwind setup. To run locally:

1. cd into `nextjs`
2. npm install
3. npm run dev

Notes:
- Tailwind is configured via `tailwind.config.js` and `postcss.config.js`.
- The project files are minimal; install dependencies and run the dev server to build the CSS.
