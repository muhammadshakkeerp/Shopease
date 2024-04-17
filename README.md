![image](https://github.com/MuhammadShakkeer2030/flipkart_clone/assets/121001685/74597859-dee3-4b66-8290-b1a4b9438e49)



# 🛒 Flikart clone

## 📙 Description

Flikart is a project developed for [briefly describe the purpose or goal of the project]. It incorporates various technologies and libraries to achieve [mention the key goals].

## 🛠️ Installation

Before getting started, ensure you have Node.js and npm installed on your machine.

```bash
# Clone the repository
git clone https://github.com/MuhammadShakkeer2030/flipkart_clone.git

# Navigate to the project directory
cd flikart

# Install dependencies
npm install
```

## Usage

To run the development server:

```bash
npm run dev
```

To build the project:

```bash
npm run build
```

To run tests:

```bash
npm test
```

## 🔑 Key Features

  - Add-to-Cart
  - Dark Mode
  - Header + Dropdown menu
  - Image slider
  - Product Details
  - Login Section
  - Order & Wishlist section


## 👨‍💻  Technologies Used

- **Frontend:**
  - React
  - Redux Toolkit
  - Tailwind CSS
  - Apollo Client
  - React Router Dom
  - GraphQL
  - Jest

- **Dev Dependencies:**
  - TypeScript
  - ESLint
  - Vite

## 📁  Folder Structure

```plaintext
flikart/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── App.tsx
│
├── public/
│   ├── index.html
│   └── ...
│
├── package.json
├── tsconfig.json
└── ...
```
![image](https://github.com/muhammadshakkeerp/flipkart_clone/assets/121001685/0ae96fbf-dc94-4691-87f0-36e04bcbf93d)

## Optimized File
``` 
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Account = lazy(() => import("../pages/Account"));
const Cart = lazy(() => import("../pages/Cart"));
const ProductsGroup = lazy(() => import("../pages/ProductsGroup"));
const NestedHoverNavlink = lazy(
  () => import("../components/NestedHoverNavlink")
);
const ProductGallery = lazy(() => import("../pages/ProductGallery"));
const ProductDatails = lazy(() => import("../components/ProductDetails"));
const Checkout = lazy(() => import("../components/Checkout"));
const PaymentSuccessful = lazy(() => import("../components/PaymentSuccesfull"));
const ChatBot = lazy(() => import("../components/chatbot/ChatBot"));

export {
  Home,
  Account,
  Cart,
  ProductsGroup,
  NestedHoverNavlink,
  ProductGallery,
  ProductDatails,
  Checkout,
  PaymentSuccessful,
  ChatBot,
};

// Account section optimization
const AccountDetails = lazy(() => import("../components/AccountDetails"));
const Login = lazy(() => import("../firebase/Login"));

const Profile = lazy(() => import("../components/Profile"));
const Wishlist = lazy(() => import("../components/WishList"));
const Orders = lazy(() => import("../components/Orders"));
const Rewards = lazy(() => import("../components/Rewards"));

export { AccountDetails, Login, Profile, Wishlist, Orders, Rewards };
```

