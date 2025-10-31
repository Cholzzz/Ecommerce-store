# ShopHub - E-commerce Store

En modern e-handelsplattform byggd med Next.js, React och Tailwind CSS.

## 🚀 Kom igång

```bash
# Installera dependencies
npm install

# Starta utvecklingsserver
npm run dev

# Bygg för produktion
npm run build

# Starta produktionsserver
npm start
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## 📁 Projektstruktur

```
ecommerce-store/
├── app/                 # Next.js App Router
│   ├── products/        # Produktsidor
│   ├── cart/           # Varukorg
│   ├── checkout/       # Kassa
│   └── layout.tsx      # Root layout
├── components/         # React-komponenter
├── contexts/           # React Context (Cart)
├── data/               # Mock data (produkter)
└── types/              # TypeScript types
```

## ✨ Funktioner

- ✅ Produktkatalog med sökning och filtrering
- ✅ Produktdetaljsidor
- ✅ Varukorg med localStorage-persistering
- ✅ Checkout-process
- ✅ Responsiv design
- ✅ Modern UI med Tailwind CSS

## 🔧 Nästa steg för utveckling

### Funktionella förbättringar
- [ ] Användarautentisering (login/register)
- [ ] Wishlist/favoriter
- [ ] Produktrecensioner och betyg
- [ ] Produktrekommendationer
- [ ] Orderhistorik
- [ ] Admin-panel för produkthantering
- [ ] Sök med avancerade filter (pris, kategori, etc.)
- [ ] Produktjämförelse
- [ ] Email-notifikationer

### Tekniska förbättringar
- [ ] Backend API (Express.js, Prisma, PostgreSQL)
- [ ] Autentisering (NextAuth.js)
- [ ] Betalningsintegration (Stripe, Klarna)
- [ ] Bildhantering (Cloudinary, AWS S3)
- [ ] SEO-optimering
- [ ] Analytics (Google Analytics)
- [ ] Error boundaries
- [ ] Loading states och skeletons
- [ ] Unit tests (Jest, React Testing Library)
- [ ] E2E tests (Playwright, Cypress)

### Design-förbättringar
- [ ] Dark mode toggle
- [ ] Animationer med Framer Motion
- [ ] Förbättrad produktvisning (zoom, galleri)
- [ ] Breadcrumbs navigation
- [ ] Toast-notifikationer
- [ ] Loading spinners

## 📚 Användbara länkar

- [Next.js Dokumentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
