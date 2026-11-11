# legal.chapmandigital.ai

CD-AI legal documents, published at https://legal.chapmandigital.ai by Chapman Digital LLC.

| URL | Source |
| --- | --- |
| `/` | `src/pages/index.astro` (document list, summaries in `src/config.ts`) |
| `/terms/` | `src/content/docs/terms.mdx` (CD-AI Terms of Service) |
| `/privacy/` | `src/content/docs/privacy.mdx` (CD-AI Privacy Policy) |

These pages moved here from chapmandigital.com. The old URLs there (`/cd-ai-terms/`, `/cd-ai-privacy-policy/`) redirect to this site with 301s.

## Editing a policy

1. Edit the `.mdx` file in `src/content/docs/`.
2. Update the `updated` line in its frontmatter and the date lines at the top of the document.
3. For material changes, give users notice before the new version takes effect (the Privacy Policy promises this in its "Changes to this policy" section).

## Develop and deploy

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # static output in dist/
```

Deployed on Cloudflare Pages: build command `npm run build`, output directory `dist`, custom domain `legal.chapmandigital.ai`.
