# E-Commerce Project
[![Language](https://img.shields.io/badge/Language-JavaScript-blue.svg?style=flat)](https://www.javascript.com/)
[![Frontend](https://img.shields.io/badge/Frontend-React-brightred.svg?style=flat)](https://reactjs.org/)
[![Backend](https://img.shields.io/badge/Backend-Node.js-brightred.svg?style=flat)](https://nodejs.org/)

## Demo
Here is a working live demo: [E-Commerce Demo](http://www.e-commerce-five-puce.vercel.app)

## About
- This project is a full-stack E-Commerce application.
- It features:
  - Product listings with details such as name, description, price, and stock availability.
  - Stock management for updating product quantities.
  - Occasional offers and discounts for a dynamic shopping experience.
  - Secure API calls with token encryption to prevent unauthorized access.
  - Integration with PayPal Sandbox for handling payments.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js
- **Database:** MongoDB
- **Payment Gateway:** PayPal Sandbox
- **Security:** Token encryption

## Setup and Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/balaji305/e-commerce-app.git
   cd e-commerce-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following environment variables:
   ```env
   PORT=5000
   MONGODB_URI=your-mongodb-uri
   PAYPAL_CLIENT_ID=your-paypal-client-id
   PAYPAL_CLIENT_SECRET=your-paypal-client-secret
   JWT_SECRET=your-jwt-secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend

1. Clone the repository:
   ```bash
   git clone https://github.com/balaji305/e-commerce-app.git
   cd e-commerce-app/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following environment variables:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   PAYPAL_CLIENT_ID=your-paypal-client-id
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. **Frontend:**
   - Access the frontend at `http://localhost:3000`.
   - Browse product listings, manage your cart, and proceed to checkout.

2. **Backend:**
   - The API is accessible at `http://localhost:5000/api`.
   - Endpoints include:
     - `GET /api/products`: Get a list of products.
     - `GET /api/products/:id`: Get product details by ID.
     - `POST /api/cart`: Add items to the cart.
     - `POST /api/checkout`: Handle checkout and payment.

3. **PayPal Integration:**
   - Test payment functionality using the PayPal Sandbox environment.

## Code Scaffolding

Run `npm generate component component-name` to generate a new component in the frontend. You can also use `npm generate service|class|module` for other types of scaffolding.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory for the frontend and `dist/` directory for the backend.

## Running Tests

### Frontend

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/).

### Backend

Run `npm test` to execute the unit tests via [Mocha](https://mochajs.org/).

## Further Help

For more help on the project, feel free to reach out to [balajisankar555@gmail.com](mailto:balajisankar555@gmail.com).
