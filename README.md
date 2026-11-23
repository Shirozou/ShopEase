# ShopEase | Static E-Commerce Storefront

A responsive, Shopify-inspired (not Shopify-branded) React storefront built for a university System Integration and Architecture demonstration. All products are fictional sample listings. Checkout creates **demo orders only**; nothing is charged, shipped, or stored on a server.

## Run locally

Requirements: Node.js 20.19+ (or 22+), npm.

```bash
npm install
npm run dev
```

Open the local address printed by Vite, usually `http://localhost:5173`.

Create a production build:

```bash
npm run build
npm run preview
```

## Technology

React 18, Vite 6, JavaScript, Tailwind CSS 3, React Router 6, Lucide icons. Product assets are local SVG files, so no remote image API is needed. The optional Google Fonts stylesheet falls back to system sans-serif if offline.

## Pages

| URL | Page | Features |
| --- | --- | --- |
| `/` | Home | Hero, curated products, category links |
| `/shop` | Shop | Search, category filters, sorting, quick add |
| `/product/:id` | Details | Variants, quantity selection, add to cart |
| `/cart` | Cart | Quantity edits, remove, subtotal |
| `/checkout` | Checkout | Required-field validation, demo order |
| `/confirmation` | Confirmation | Demo order number and purchased items |
| `/about` | Our story | Project background |
| Other paths | Not Found | Friendly 404 |

## Architecture

```text
                  ┌──────────────────────────────────┐
                  │       PRESENTATION LAYER         │
                  │ React pages, Header, Footer,     │
                  │ ProductCard, form, cart controls │
                  └────────────────┬─────────────────┘
                                   │
                  ┌────────────────▼─────────────────┐
                  │    APPLICATION LOGIC LAYER       │
                  │ Cart Context, filter/sort/search,│
                  │ form validation, demo order flow │
                  └────────────────┬─────────────────┘
                                   │
                  ┌────────────────▼─────────────────┐
                  │          DATA LAYER              │
                  │ Static product catalog (JS),     │
                  │ local SVGs, localStorage cart,   │
                  │ sessionStorage latest demo order│
                  └──────────────────────────────────┘
```

**Data flow:** Product catalog → React shop and detail pages → `CartContext` actions → `localStorage` persistence → checkout form → generated demo order → order confirmation. No network APIs, database, authentication, or payment gateway.

### File structure

```text
src/
  components/       Shared header, footer, product card, toast, quantity selector
  context/          CartContext.jsx
  data/             products.js (12 sample products)
  pages/            Home, Shop, ProductDetails, Cart, Checkout,
                    Confirmation, About, NotFound
  utils/            Currency format and order number helper
  App.jsx           Page routes and layout
  main.jsx          Application entry point
  index.css         Tailwind layers and shared UI styles
public/products/    Bundled product vector artwork
```

### Browser persistence

- Cart items are saved under `shopease-cart-v1` in **localStorage**.
- The latest generated demo order is stored in **sessionStorage** to support confirmation-page refreshes in the same browser tab.
- Reloading the storefront retains cart selections, but the demo does not store personal checkout form information in localStorage.
- Stock labels are illustrative and are not synchronized with an inventory system. The cart limits quantities to the listed sample stock.

## Quick test checklist

1. Browse all 12 products; select each category, search, and sort by name and price.
2. Open a product, change its variant and quantity, and add to cart.
3. Refresh the browser. The cart remains saved.
4. Increase/decrease a cart quantity, remove one item, and inspect the total.
5. Attempt checkout with missing inputs and an invalid email: error messages should appear.
6. Fill in demo contact/shipping fields (not real personal details), submit, and inspect the generated order number.
7. Confirm that the cart is empty after order placement.
8. Test on mobile width; use the hamburger menu and header search.
9. Attempt to add the sold-out Portable Desk Light. Its cart button is disabled.

## Project notes

- Prices are fictional demo amounts displayed in Philippine pesos (PHP).
- Free demo shipping is shown at checkout. The promotional threshold is illustrative marketing text.
- No real purchases, payment methods, inventory synchronization, or shipping.
- No code or assets from Shopify are used.

## Admin side (frontend-only demo)

Visit **`/admin`** after starting Vite. The admin interface includes:

- **Overview:** total demo orders, simulated revenue, product count, available inventory, recent orders, and low-stock alerts.
- **Products:** search and filter products, add products, edit prices/descriptions/variants/stock, and delete products. Product changes appear immediately on the storefront.
- **Orders:** view orders created during simulated checkout, inspect purchased items, search orders, and update statuses (Pending, Processing, Completed, Cancelled).
- **Reset demo data:** restore the original 12 products and clear demo order history in this browser.

**Important:** This admin interface intentionally has **no authentication or backend**. All product and order data is stored in this browser's `localStorage`. The admin is not secure and should not be deployed as a real store management system. Changes are not shared between browsers or devices. Customer information entered in the simulated checkout is stored locally in the order history; use fictional details for classroom demonstrations. Images for newly created products can be selected from bundled product illustrations.


## Combined project access
Run `npm install` then `npm run dev` from this single project folder.

- Customer storefront: http://localhost:5173/
- Admin dashboard: http://localhost:5173/admin
- Products and demo orders are shared through StoreContext and browser localStorage.
- Changes are synchronized between open tabs on the same browser origin.
- This is a frontend-only demonstration. The admin route is not secured, and data is not shared across devices.
