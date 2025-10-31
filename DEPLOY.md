# 🚀 Guide för att lansera ShopHub

Det finns flera sätt att lansera din e-commerce sida. Här är de enklaste och bästa alternativen:

## 1. Vercel (REKOMMENDERAT - Enklast för Next.js) ⭐

Vercel är skapat av Next.js-teamet och är perfekt för Next.js-applikationer.

### Steg:
1. **Pusha till GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <din-github-repo-url>
   git push -u origin main
   ```

2. **Deploy till Vercel:**
   - Gå till [vercel.com](https://vercel.com)
   - Logga in med GitHub
   - Klicka "New Project"
   - Välj ditt repository
   - Vercel upptäcker automatiskt Next.js och konfigurerar allt
   - Klicka "Deploy"
   - Klart! Du får en URL som `https://ditt-projekt.vercel.app`

**Fördelar:**
- ✅ Gratis tier
- ✅ Automatisk HTTPS
- ✅ CDN globalt
- ✅ Automatiska deployment vid git push
- ✅ Perfekt optimering för Next.js

---

## 2. Netlify

Alternativ till Vercel, också mycket enkelt.

### Steg:
1. **Pusha till GitHub** (samma som ovan)

2. **Deploy till Netlify:**
   - Gå till [netlify.com](https://netlify.com)
   - Logga in med GitHub
   - Klicka "Add new site" → "Import an existing project"
   - Välj ditt repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Klicka "Deploy site"

**Fördelar:**
- ✅ Gratis tier
- ✅ Automatisk HTTPS
- ✅ CDN

---

## 3. Docker + Egen server

Om du vill köra på din egen server.

### Steg:
1. **Skapa Dockerfile:**
   ```dockerfile
   FROM node:20-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Bygg och kör:**
   ```bash
   docker build -t ecommerce-store .
   docker run -p 3000:3000 ecommerce-store
   ```

---

## 4. Railway / Render

Cloud-plattformar som är enkla att använda.

### Railway:
1. Gå till [railway.app](https://railway.app)
2. Logga in med GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Välj ditt repository
5. Klart!

### Render:
1. Gå till [render.com](https://render.com)
2. "New Web Service"
3. Anslut GitHub repo
4. Konfigurera:
   - Build: `npm install && npm run build`
   - Start: `npm start`

---

## ⚠️ Viktigt innan du deployar

### 1. Uppdatera miljövariabler (om behövs)
Skapa `.env.local` för lokala secrets:
```env
NEXT_PUBLIC_API_URL=https://din-api.com
```

### 2. Optimera för produktion
```bash
# Testa produktionsbygg
npm run build
npm start
```

### 3. Kontrollera att allt fungerar
- Testa alla sidor
- Testa varukorg
- Testa checkout

### 4. SEO och Metadata
Kontrollera `app/layout.tsx` - metadata är redan konfigurerat!

---

## 🎯 Snabbaste vägen (Vercel)

1. **GitHub repo** (5 min)
2. **Vercel deploy** (2 min)
3. **Klart!** 🎉

Din sida kommer att vara live på en URL som:
`https://ditt-projekt.vercel.app`

