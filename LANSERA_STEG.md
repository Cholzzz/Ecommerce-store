# 🚀 Steg-för-steg: Lansera din E-commerce Sida

## ✅ Steg 1: Skapa GitHub Repository

1. **Gå till GitHub:**
   - Öppna webbläsaren och gå till [github.com](https://github.com)
   - Logga in med ditt konto (eller skapa konto om du inte har ett)

2. **Skapa nytt repository:**
   - Klicka på gröna knappen **"+ mysigt i övre högra hörnet"** (bredvid din profilbild)
   - Välj **"New repository"**

3. **Fyll i formuläret:**
   - **Repository name:** `ecommerce-store`
   - **Description:** (valfritt) "Modern e-commerce store"
   - **Visibility:** Välj **Public** eller **Private** (spelar ingen roll)
   - ⚠️ **VIKTIGT:** Kryssa INTE i "Add a README file", "Add .gitignore" eller "Choose a license" (vi har redan dessa filer!)
   - Klicka på gröna knappen **"Create repository"**

4. **Kopiera URL:en:**
   - Du kommer se en sida med instruktioner
   - **Kopiera HTTPS URL:en** (ser ut som: `https://github.com/DITT-ANVÄNDARNAMN/ecommerce-store.git`)
   - Denna URL behöver vi för nästa steg!

---

## ✅ Steg 2: Pusha koden till GitHub

**Alternativ A: Jag gör det åt dig** (enklast!)
- Ge mig GitHub-URL:en du kopierade
- Jag pushar koden dit automatiskt

**Alternativ B: Gör det själv**
- Öppna terminalen och kör:
```bash
cd ~/ecommerce-store
git remote add origin <KOPIERA_URL_HÄR>
git branch -M main
git push -u origin main
```
(Ersätt `<KOPIERA_URL_HÄR>` med URL:en du kopierade)

---

## ✅ Steg 3: Deploy till Vercel

1. **Gå till Vercel:**
   - Öppna [vercel.com](https://vercel.com) i webbläsaren
   - Klicka på **"Sign Up"** eller **"Log In"**
   - Välj **"Continue with GitHub"** och logga in med ditt GitHub-konto

2. **Importera projekt:**
   - Efter inloggning klicka på **"Add New Project"** eller **"Import Project"**
   - Du kommer se en lista med dina GitHub-repositories
   - **Hitta och välj** `ecommerce-store` (eller det namn du valde)
   - Klicka på **"Import"**

3. **Konfigurera deployment:**
   - Vercel upptäcker automatiskt att det är ett Next.js-projekt
   - Alla inställningar är redan korrekta! ✨
   - Klicka bara på den blå knappen **"Deploy"**

4. **Vänta på deployment:**
   - Du ser en byggprocess (tar 1-2 minuter)
   - När den är klar ser du **"Congratulations!"** medidor

5. **Klart! 🎉**
   - Din sida är nu live!
   - Du får en URL som: `https://ecommerce-store-xxx.vercel.app`
   - Klicka på länken för att se din live-sida
   - Du kan också ändra domännamnet senare under "Settings" → "Domains"

---

## ✅ Steg 4: (Valfritt) Anpassa domännamn

1. **I Vercel dashboard:**
   - Gå till ditt projekt
   - Klicka på **"Settings"**
   - Klicka på **"Domains"** i menyn till vänster
   - Lägg till ditt eget domännamn (om du har ett)

---

## 📝 Sammanfattning

**Du behöver:**
1. ✅ GitHub-konto (gratis)
2. ✅ Vercel-konto (gratis) 
3. ✅ 5-10 minuter av din tid

**Vad du får:**
- 🌐 Live-webbplats med egen URL
- 🔄 Automatisk deployment vid varje git push
- 🔒 HTTPS automatiskt inkluderat
- 🚀 Snabb CDN globalt
- 📊 Analytics och logs

**Kostnad:** 100% GRATIS för personliga projekt!

---

## ❓ Problemlösning

**Om deployment misslyckas:**
- Kontrollera att `next.config.ts` innehåller bildkonfigurationen (den gör det redan!)
- Se till att alla filer är pushade till GitHub
- Kolla Vercel logs för felmeddelanden

**Om sidan inte laddar korrekt:**
- Vänta några minuter (DNS kan ta tid att spridas)
- Försök ladda om sidan
- Kolla Vercel dashboard för eventuella fel

---

## 🎯 Nästa steg efter deployment

1. **Testa din sida:**
   - Gå igenom alla funktioner
   - Testa varukorg
   - Testa checkout

2. **Dela med andra:**
   - Kopiera URL:en
   - Skicka till vänner/familj för att testa

3. **Fortsätt utveckla:**
   - Gör ändringar lokalt
   - Push till GitHub
   - Vercel deployar automatiskt! 🚀

---

**Lycka till! 🎉**

