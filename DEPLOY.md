# Deploy PyPath to Cloudflare Pages

Repository: [github.com/iqmathanalytics/python-lms](https://github.com/iqmathanalytics/python-lms)

This app uses **Next.js static export** (`out/`) — ideal for Cloudflare Pages (fast, free tier, no server required). Python runs in the browser via Pyodide.

## 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial PyPath LMS — Next.js static export for Cloudflare"
git branch -M main
git remote add origin https://github.com/iqmathanalytics/python-lms.git
git push -u origin main
```

## 2. Connect Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select **iqmathanalytics/python-lms**
3. Use these build settings:

| Setting | Value |
|---------|--------|
| **Framework preset** | None |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Root directory** | `/` |

4. **Environment variables** (optional):

| Variable | Value |
|----------|--------|
| `NODE_VERSION` | `20` |

5. Click **Save and Deploy**

Your site will be live at `https://<project-name>.pages.dev`.

## 3. Custom domain (optional)

In the Pages project → **Custom domains** → add your domain and follow DNS instructions.

## 4. Local preview of production build

```bash
npm run build
npm run preview:static
```

Open http://localhost:8788

## Notes

- Progress is stored in the browser (`localStorage`) — no backend required.
- Pyodide loads from jsDelivr CDN on first IDE use (~10s), then caches.
- After adding new published lessons, push to GitHub; Cloudflare rebuilds automatically.
