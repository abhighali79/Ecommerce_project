# Shopperz - MERN Stack E-commerce Application

A full-featured, modern e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js). This application features a robust admin dashboard for product management, a responsive shopping interface for users, and a secure authentication system.

## 🚀 Features

### for Users (Shoppers)
- **Authentication**: Secure Login and Register functionality.
- **Product Browsing**: Filter products by category, brand, and search by keywords.
- **Product Details**: View detailed product information, stock status, and reviews.
- **Shopping Cart**: Add/remove items, adjust quantities.
- **Checkout Process**:
    - Manage delivery addresses.
    - Cash on Delivery (COD) payment supported.
    - Order summary and confirmation.
- **Order History**: View past orders and their status (Pending, In Process, Delivered).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.

### for Admins
- **Dashboard**: Overview of orders and system status.
- **Product Management**:
    - Add, Edit, and Delete products.
    - Upload product images (Cloudinary integration).
- **Order Management**:
    - View all customer orders.
    - Update order status (e.g., Confirmed, Shipped, Delivered).
- **Feature Management**:
    - Manage homepage carousel images (Add/Delete).

## 🛠️ Tech Stack

**Frontend:**
- **React** (Vite): Fast, modern UI library.
- **Tailwind CSS**: Utility-first styling for specific designs.
- **Redux Toolkit**: Efficient state management.
- **Radix UI**: Accessible UI primitives.
- **Lucide React**: Modern iconography.

**Backend:**
- **Node.js**: Runtime environment.
- **Express.js**: Web framework for API routes.
- **MongoDB**: NoSQL database for flexible data storage.
- **Mongoose**: ODM for MongoDB interaction.
- **JWT**: JSON Web Tokens for secure authentication.

## 📂 Project Structure

```
mern-ecommerce-2024/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── assets/         # Static assets
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application views (Auth, Shop, Admin)
│   │   ├── store/          # Redux slices and store config
│   │   └── config/         # App configuration
│   └── package.json
│
├── server/                 # Backend (Node + Express)
│   ├── controllers/        # Route logic
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API endpoints
│   ├── helpers/            # Utility functions (Cloudinary, etc.)
│   └── server.js           # Entry point
│
└── README.md               # Project documentation
```

## ⚙️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local installed or Atlas URI)

### 1. Clone the Repository
```bash
git clone <repository_url>
cd mern-ecommerce-2024
```

### 2. Backend Setup
 Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

**Configuration**:
By default, the server connects to `mongodb://127.0.0.1:27017/ecommerce`. ensure your local MongoDB service is running. This can be configured in `server.js` or via environment variables (`MONGODB_URI`).

**Start the Server**:
```bash
npm run dev
# Server runs on http://localhost:5000
```

### 3. Frontend Setup
Open a new terminal, navigate to the client directory, and install dependencies:
```bash
cd client
npm install
```

**Start the Client**:
```bash
npm run dev
# App runs on http://localhost:5173
```

## 🔐 Admin Access

To access the Admin Dashboard, use the following credentials (or create a new admin via the setup link if needed):

- **Email**: `admin@gmail.com`
- **Password**: `admin123`

**Troubleshooting Admin Login**:
If the admin account is missing or has incorrect roles, ensure the server is running and visit:
`http://localhost:5000/api/auth/setup-admin`
This API endpoint will attempt to repair or create the default admin account.

## 📝 Usage Notes

- **Images**: Product and Feature images utilize Cloudinary for hosting. Typically requires `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` to be configured in the backend environment.
- **Payments**: Currently configured for Cash on Delivery (COD).

## 🤝 Contributing

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---
*Built with ❤️ by Abhi*
