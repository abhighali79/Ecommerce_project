# Project Code Structure & File Explanation

This document provides a detailed walkthrough of the codebase, explaining the purpose of each file and directory in the project.

## 📁 Root Directory
- **README.md**: General project documentation, features, and setup instructions.
- **CODE_STRUCTURE.md**: (This file) Detailed technical guide to the files.

---

## 🖥️ Client (Frontend) - `client/src`

The frontend is built with React, Vite, and Redux Toolkit.

### 🔑 Configuration & Entry
- **`main.jsx`**: The application entry point. It wraps `App.jsx` with the Redux `Provider` and React Router `BrowserRouter`.
- **`App.jsx`**: The main component handling routing using `Routes` and `Route`. It defines the path structure for Auth, Admin, and Shop views.
- **`store/store.js`**: The Redux store configuration. It combines all slice reducers (`auth`, `shopProducts`, `adminOrder`, etc.) into a single global state.
- **`lib/utils.js`**: Utility functions, likely including `cn` (classnames) helper for Tailwind CSS.

### 🔐 Authentication (`components/auth`, `pages/auth`)
- **`pages/auth/login.jsx`**: Check user credentials securely.
- **`pages/auth/register.jsx`**: Form for new users to sign up.
- **`components/auth/layout.jsx`**: A wrapper layout for auth pages, providing a consistent extensive background/sidebar.
- **`components/common/check-auth.jsx`**: A critical HOC (Higher-Order Component) that checks if a user is authenticated and has the correct role (admin vs user) to access a route. It handles redirects.

### 🛒 Shopping View (`pages/shopping-view`, `components/shopping-view`)
**Pages:**
- **`home.jsx`**: The landing page. Displays the feature carousel and product categories.
- **`listing.jsx`**: The product catalog. Allows filtering and sorting of products.
- **`product-details.jsx`**: Detailed view of a single product.
- **`checkout.jsx`**: Handles the checkout process (address selection, order confirmation).
- **`account.jsx`**: User's account dashboard (orders, profile).
- **`payment-success.jsx`**: displayed after a successful transaction.

**Components:**
- **`layout.jsx`**: Common layout for shopping pages (starts with Header).
- **`header.jsx`**: The main navigation bar (Logo, Menu, Cart icon, User dropdown).
- **`footer.jsx`**: Application footer.
- **`product-tile.jsx`**: A reusable card component to display a product summary (Image, Title, Price, Add to Cart).
- **`filter.jsx`**: Sidebar component for filtering products by category/brand.
- **`cart-wrapper.jsx`**: Slide-out cart drawer showing selected items.
- **`cart-items-content.jsx`**: Individual item row in the cart drawer.
- **`address.jsx`**: Manages user delivery addresses (Add/Edit/Delete).
- **`orders.jsx` & `order-details.jsx`**: Components to list past orders and show specific order status.

### 🛠️ Admin View (`pages/admin-view`, `components/admin-view`)
**Pages:**
- **`dashboard.jsx`**: The main admin hub. Currently manages Feature Images (Carousel).
- **`products.jsx`**: CRUD interface for managing the product inventory.
- **`orders.jsx`**: List of all customer orders for management.

**Components:**
- **`layout.jsx`**: Admin dashboard layout (with Sidebar and Header).
- **`sidebar.jsx`**: Admin navigation menu.
- **`image-upload.jsx`**: Component to handle image uploading to Cloudinary.
- **`product-tile.jsx`**: Admin-specific product card (with Edit/Delete actions).
- **`order-details.jsx`**: Admin view to update order status (e.g., set specific order to "Shipped").

### 🧩 Common & UI
- **`components/common/form.jsx`**: A reusable, dynamic form component that renders inputs based on a configuration array.
- **`components/ui/`**: Directory containing atomic UI components (Buttons, Inputs, Dialogs, Toasts) built with Radix UI and Tailwind CSS.

---

## ⚙️ Server (Backend) - `server/`

The backend is a Node.js/Express API connected to MongoDB.

### 🚀 Core
- **`server.js`**: The application entry point. Connects to MongoDB, configures Middleware (CORS, CookieParser), and registers Routes.

### 🗄️ Models (`server/models`)
Data schemas defining the structure of documents in MongoDB.
- **`User.js`**: Stores user info (`email`, `password`, `role`).
- **`Product.js`**: Product details (`title`, `price`, `stock`, `image`).
- **`Order.js`**: Order records (`userId`, `cartItems`, `totalAmount`, `status`).
- **`Cart.js`**: Temporary storage for user's shopping cart.
- **`Address.js`**: Saved user delivery addresses.
- **`Feature.js`**: Stores URLs for homepage carousel images.
- **`Review.js`**: Product reviews and ratings.

### 🎮 Controllers (`server/controllers`)
Contains the business logic for each feature.
- **`auth/auth-controller.js`**: Handles Register, Login, Logout, and the `createAdmin` logic.
- **`admin/products-controller.js`**: Logic adding/editing products.
- **`admin/order-controller.js`**: Logic for admins to view/update orders.
- **`shop/products-controller.js`**: Fetching filtered/sorted products for users.
- **`shop/cart-controller.js`**: Adding/removing items from cart.
- **`shop/order-controller.js`**: Creating orders and processing payments (COD).
- **`common/feature-controller.js`**: Managing feature images.

### 🛣️ Routes (`server/routes`)
Maps URL endpoints to specific controller functions.
- **`auth/auth-routes.js`**: `/register`, `/login`, `/check-auth`, `/setup-admin`.
- **`admin/products-routes.js`**: `/add`, `/edit/:id`, `/delete/:id`.
- **`shop/products-routes.js`**: `/get` (with filters).
- **`shop/order-routes.js`**: `/create`, `/capture`, `/list`.

### 🔌 Helpers (`server/helpers`)
- **`cloudinary.js`**: Configuration for connecting to Cloudinary image storage.
