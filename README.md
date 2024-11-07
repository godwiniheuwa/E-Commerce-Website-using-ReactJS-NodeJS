#  E-Commerce Website using MERN Stack.
A E-Commerce website developed using ReactJS for the frontend, NodeJs for the backend, MongoDB as database.


## Table of contents
* [Prerequisites](#prerequisites)
* [Requirements](#requirements)
* [Technologies](#technologies)
* [Features](#features)
* [Screenshots](#screenshots)
* [Contact](#contact)


## Prerequisites
- Text Editor ([VS Code](https://code.visualstudio.com/download) , [Atom](https://atom.io/), [Brackets](http://brackets.io/), etc.)
- Node.js and npm - [install here](https://www.npmjs.com/get-npm)
- MongoDB - [install here](https://docs.mongodb.com/manual/installation/)


## Requirements
To run this project, follow the steps below:

### Step 1: Clone the Repository
Clone the repository to your local machine:
```bash
git clone git@github.com:godwiniheuwa/E-Commerce-Website-using-ReactJS-NodeJS.git
cd E-Commerce-Website-using-ReactJS-NodeJS
```

### Step 2: Install MongoDB
1. Download and install MongoDB from the [official MongoDB website](https://docs.mongodb.com/manual/installation/).
2. Ensure MongoDB is running on `localhost:27017`. You can do this by running MongoDB as a service or starting it manually.

### Step 3: Set Up Environment Variables
1. In the root directory of the project, create a `.env` file.
2. Add the following environment variables in your `.env` file:
   ```plaintext
   MONGODB_URL=mongodb://127.0.0.1:27017/ecommerce
   JWT_SECRET=somesecretkey
   ```
   - **MONGODB_URL** should point to your local MongoDB instance.
   - **JWT_SECRET** can be any string and is used for JWT authentication.

### Step 4: Seed the Database (Optional)
To add initial product data to the database, run the following command:

```bash
node backend/seed.js
```

> **Note:** Ensure MongoDB is running before executing this command.

### Step 5: Install Dependencies and Run the Backend Server
1. Install the backend dependencies:
   ```bash
   npm install
   ```
2. Start the backend server:
   ```bash
   npm start
   ```
   The backend server will start on `http://localhost:5000`.

### Step 6: Install Dependencies and Run the Frontend Server
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies using Yarn:
   ```bash
   yarn install
   ```
3. Start the frontend server:
   ```bash
   yarn start
   ```
   The frontend will start on `http://localhost:3000`.


## Technologies
Project is created with:
* HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
* React: Components, Props, Events, Hooks, Router, Axios, React-Bootstrap
* Redux: Store, Reducers, Actions
* Node & Express: Web API, Body Parser, File Upload, JWT
* MongoDB: Mongoose
* Development: ESLint, Babel, Git, Github,
* Deployment: 

## Features
List of features ready and TODOs for future development
* User Login, Signup, User Authentication.
* Admin Login.
* Add, Edit, Remove Products. (Only Admin)
* Add to Cart.

To-do list:
* Sorting
* Search

## Screenshots

### Home Page
This is the home page of e-commerce. It shows a list of products. It also uses React-Bootstrap Corousel for corousel.

![Main](Screenshots/main.png)

________________________________________________________

### Product Details Page
When the user clicks on a product it takes you to the product details page.

![Product Details](Screenshots/product-details.png)
________________________________________________________

### Cart
Shopping Cart is the heart of any e-commerce website. I have created a user-friendly shopping cart using React and Redux.

![Cart](Screenshots/cart.png)
________________________________________________________

### Register
I have created forms for getting user info and save them in the database.

![Register](Screenshots/register.png)
________________________________________________________

### Sign-In
Sign in page for user to sign in.

![SignIn](Screenshots/signin.png)
________________________________________________________

## Ordering Products

Sign in page for user to sign in.

### Shipping Screen
![Shipping](Screenshots/shipping.png)
________________________________________________________
### Payment Screen
![Payment](Screenshots/payment.png)
________________________________________________________
### Place Order Screen
![Place Order](Screenshots/placeorder.png)
________________________________________________________

### Admin 
Admin should be able to define products and update the count in stock whenever they like. This page is about managing ECommerce products.

## View Products (admin)

![Admin View Products](Screenshots/admin-products.png)
________________________________________________________

### Add Products (admin)

![Admin Add products](Screenshots/add-product.png)
________________________________________________________


## Contact
[Suhas Suhas](https://www.suhassalian.netlify.com/) - feel free to contact me!
