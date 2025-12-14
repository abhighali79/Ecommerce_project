# Project Overview

This MERN stack e‑commerce application is organized into **client** (React + Vite) and **server** (Node.js + Express) directories.

---

## Backend (`server`)

| File / Directory | Purpose |
|------------------|---------|
| `server.js` | Entry point. Sets up Express, connects to MongoDB, applies middleware, and mounts all route groups. |
| `models/` | Mongoose schemas for core entities:
| `User.js` | User schema with fields `userName`, `email`, `password` (hashed), `role` (e.g., `admin`, `user`). |
| `Product.js` | Product details, images, pricing, stock, category. |
| `Order.js` | Order document linking a user to purchased items, status, timestamps. |
| `Review.js` | Customer reviews for products. |
| `Address.js` | Shipping address information linked to a user. |
| `controllers/auth/auth-controller.js` | Handles registration, login, logout, JWT token creation, and the **admin setup** endpoint (`createAdmin`). |
| `controllers/admin/products-controller.js` | CRUD operations for admin‑managed products. |
| `controllers/admin/orders-controller.js` | Admin view of all orders, status updates. |
| `controllers/common/feature-controller.js` | Feature‑image management (upload/delete) used by the admin dashboard. |
| `routes/auth/auth-routes.js` | Routes: `/register`, `/login`, `/logout`, `/setup-admin`. |
| `routes/admin/*` | Admin‑specific routes (`/products`, `/orders`). |
| `routes/shop/*` | Public shop routes for products, cart, address, order, search, review. |
| `routes/common/feature-routes.js` | DELETE `/delete/:id` for feature‑image removal. |
| `middleware/` (if present) | Custom middleware such as authentication checks. |

## Frontend (`client`)

| File / Directory | Purpose |
|------------------|---------|
| `src/main.jsx` | React entry point, renders `<App />` and provides Redux store. |
| `src/App.jsx` | Central router. Uses `CheckAuth` wrapper to protect routes based on authentication and role. Imports layout components for auth, admin, and shop sections. |
| `src/components/auth/` | Layout and UI for login / registration pages. |
| `src/components/admin-view/` | Layout (`layout.jsx`), sidebar, header, and page‑specific components for admin dashboard, product management, and order management. |
| `src/components/shopping-view/` | Layout (`layout.jsx`), header, footer, and reusable UI pieces (e.g., `product‑tile.jsx`, `cart‑items‑content.jsx`). |
| `src/components/common/check-auth.jsx` | Checks Redux auth state; redirects users to appropriate sections (`/admin/dashboard` for admins, `/shop/home` for regular users). |
| `src/pages/auth/` | `login.jsx` and `register.jsx` – forms that dispatch `loginUser` / `registerUser` thunks. |
| `src/pages/admin-view/` | Admin pages:
- `dashboard.jsx` – overview + feature‑image list with delete button.
- `products.jsx` – CRUD UI for products.
- `orders.jsx` – list of all orders.
- `features.jsx` – **unused** (simple placeholder). |
| `src/pages/shopping-view/` | Public shop pages:
- `home.jsx` – landing page with banners.
- `listing.jsx` – product grid with filters.
- `product‑details.jsx` – detailed view, add‑to‑cart.
- `checkout.jsx` – order summary and payment (COD only).
- `account.jsx` – user profile and order history.
- `search.jsx` – search results.
- `payment-success.jsx` – confirmation after checkout. |
| `src/pages/unauth-page/` | Simple page shown to unauthenticated visitors (currently not used in routing). |
| `src/store/` | Redux Toolkit slices:
- `auth-slice` – authentication state, token handling.
- `admin/` – `products-slice`, `order-slice` for admin data.
- `shop/` – `products-slice`, `cart-slice`, `address-slice`, `order-slice`, `search-slice`, `review-slice`.
- `common-slice` – feature‑image slice used by admin dashboard. |
| `src/config/` (if present) | Configuration constants (e.g., API base URL). |
| `tailwind.config.js` & `src/index.css` | Tailwind CSS setup and global styles (including the premium Indigo/Violet palette and Plus Jakarta Sans font). |

---

## Unused / Removed Files

The following files were identified as **unused** and have been removed from the codebase:
- `client/src/pages/admin-view/features.jsx` (placeholder component not referenced anywhere).
- `client/src/pages/unauth-page` directory (no route uses it after cleanup).
- Server debug scripts:
  - `server/seed_admin.js`
  - `server/verify_admin.js`
  - `server/fix_admin.js`
  - `server/debug_runner.js`

These deletions reduce clutter and prevent accidental execution of development‑only utilities.

---

## How to Run the Project

1. **Install dependencies**
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```
2. **Set up environment variables** (create a `.env` file in `server/`):
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/ecommerce
   PORT=5000
   CLIENT_SECRET_KEY=your_jwt_secret   # replace with a strong secret
   ```
3. **Start the backend**
   ```bash
   cd server
   npm run dev   # runs nodemon server.js
   ```
4. **Start the frontend**
   ```bash
   cd client
   npm run dev   # Vite dev server on http://localhost:5173
   ```
5. Open the browser at `http://localhost:5173`. The admin account can be (re)created via:
   ```bash
   curl http://localhost:5000/api/auth/setup-admin
   ```
   Use **admin@gmail.com** / **admin123** to log in.

---

## Notes & Future Work
- The admin password and JWT secret are currently hard‑coded for development; move them to environment variables before production.
- The project currently supports **Cash on Delivery** only. To add more payment methods, extend the checkout flow and create appropriate backend endpoints.
- Consider removing the `UnauthPage` component entirely if it will never be used.

---

*Generated by Antigravity – your AI coding assistant.*
