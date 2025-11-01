# 🚀 Snabbguide: Skapa GitHub Repo

## Steg 1: Skapa repository på GitHub

1. Gå till [github.com](https://github.com)
2. Logga in
3. Klicka på "+" i övre högra hörnet → "New repository"
4. Fyll i:
   - **Repository name:** `ecommerce-store` (eller valfritt namn)
   - **Description:** "Modern e-commerce store built with Next.js"
   - **Visibility:** Public eller Private (spelar ingen roll)
   - ⚠️ **VÄNTA MED** att klicka "Create repository"!
5. **Kopiera URL:en** som visas (t.ex. `https://github.com/dittanvändarnamn/ecommerce-store.git`)
6. Ge mig URL:en så pushar jag koden dit!

## Alternativt: Kör manuellt

Om du vill göra det själv, efter att du skapat repot:

```bash
cd ~/ecommerce-store
git remote add origin <DIN_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```

