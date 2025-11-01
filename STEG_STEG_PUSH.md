# 📋 Steg-för-steg: Pusha koden till GitHub

## ✅ Steg 1: Skapa Personal Access Token (2 minuter)

1. **Öppna denna länk i webbläsaren:**
   https://github.com/settings/tokens/new

2. **Fyll i formuläret:**
   - **Note:** Skriv `ecommerce-store` (eller valfritt namn)
   - **Expiration:** Välj hur länge tokenet ska gälla (t.ex. 90 days eller No expiration)
   - **Select scopes:** Kryssa i hela rutan **`repo`** (det kryssar automatiskt i alla repo-relaterade rutor)
   
3. **Klicka på gröna knappen:** "Generate token"

4. **VIKTIGT - Kopiera tokenet:**
   - Du ser nu en lång text (börjar ofta med `ghp_` eller liknande)
   - ⚠️ **Detta är den ENDA gången du kan se det!**
   - Kopiera hela tokenet (cmd+C eller ctrl+C)
   - Klistra in det någonstans säkert (t.ex. i en anteckning)

---

## ✅ Steg 2: Pusha koden via terminal

1. **Öppna terminal i Cursor:**
   - Tryck `Ctrl+` ` (backtick) eller öppna View → Terminal

2. **Kör detta kommando:**
   ```bash
   cd ~/ecommerce-store
   ```

3. **Kör push-kommandot:**
   ```bash
   git push -u origin main
   ```

4. **Git kommer fråga om autentisering:**
   - **Username for 'https://github.com':** 
     - Skriv: `Cholzzz`
     - Tryck Enter
   
   - **Password for 'https://Cholzzz@github.com':**
     - Klistra in tokenet du kopierade (cmd+V eller ctrl+V)
     - Tryck Enter
     - ⚠️ INTE ditt vanliga GitHub-lösenord - använd tokenet!

5. **Klart!** 🎉
   - Du ser nu att filer pushas till GitHub
   - Gå till https://github.com/Cholzzz/Ecommerce-store och se dina filer!

---

## 🔍 Kontrollera att det fungerade

Gå till: https://github.com/Cholzzz/Ecommerce-store

Du borde se alla dina filer där nu!

---

## ❓ Om det inte fungerar

**Problem:** "Authentication failed"
- **Lösning:** Dubbelkolla att du kopierade HELA tokenet (det är långt!)
- Skapa en ny token om du inte kopierade den första gången

**Problem:** "Repository not found"
- **Lösning:** Dubbelkolla att repository heter `Ecommerce-store` (med stort E) på GitHub

**Problem:** Git ber om lösenord flera gånger
- **Lösning:** Använd tokenet varje gång (inte ditt vanliga lösenord)

---

**Lycka till!** 🚀

