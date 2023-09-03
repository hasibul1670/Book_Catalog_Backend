### Book Catalog Backend

Welcome to the Book Catalog Backend repository! This repository serves as the backbone for managing various aspects of the university's book catalog and library operations. From organizing book collections to enabling efficient access for students and faculty, this repository encompasses essential functionalities. Below, you'll find an overview of the technologies employed, key features, and more.
#### Features

    User authentication and authorization
    Search and filter book collection
    Book borrowing and returning
    User profiles and borrowing history
    Genre-based categorization
    Notifications for due dates and availability
#### Technologies Used

    Backend: Node.js, Express.js, TypeScript
    Database: PostgreSQL, Prisma ORM
    Deployment: Vercel
    Authentication: JWT
    Packages Used: bcrypt, http-errors, http-status-codes, zod

#### Features

    User Auth & Authorization: Secure login, role-based access.
    Book Management: Add, update, delete, and search books.
    Borrowing System: Borrow and return books with due date tracking.
    User Profiles: Keep track of borrowed books and borrowing history.
    Genre Categorization: Organize books by genres for easy browsing.
    Notifications: Receive alerts for upcoming due dates and book availability.

### API Endpoints and Sample Data

#### User Sign Up

- https://assignment-8-coral.vercel.app/api/v1/auth/signup (POST) //Sign up
- https://assignment-8-coral.vercel.app/api/v1/auth/signin (POST) //Login
- https://assignment-8-coral.vercel.app/api/v1/users (GET) :Allowed For Admin
- https://assignment-8-coral.vercel.app/api/v1/users/8ffa2617-fd99-42fea6e (GET):Allowed For Admin
- https://assignment-8-coral.vercel.app/api/v1/users/8ffa2617-fd99-42fea6e (PATCH):Allowed For Admin
- https://assignment-8-coral.vercel.app/api/v1/users/8ffa2617-fd99-42fea6e (DELETE):Allowed For Admin

#### Category Routes

- https://assignment-8-coral.vercel.app/api/v1/categories/create-category (POST) → Only Allowed For Admin
- https://assignment-8-coral.vercel.app/api/v1/categories (GET)
- https://assignment-8-coral.vercel.app/api/v1/categories/b33e6c08-8b5e-b2f36a4d (GET)
- https://assignment-8-coral.vercel.app/api/v1/categories/b33e6c08-8b5e-b2f36a4d (PATCH)//Allowed For Admin
- https://assignment-8-coral.vercel.app/api/v1/categories/b33e6c08-8b5e-b2f36a4d (DELETE)//Allowed For Admin

#### Category Routes

- https://assignment-8-coral.vercel.app/api/v1/categories/create-category (POST) → Only Allowed For Admin
- https://assignment-8-coral.vercel.app/api/v1/categories (GET)
- https://assignment-8-coral.vercel.app/api/v1/categories/b33e6c08-8b5e-47f5-b7cc-73f3b2f36a4d (GET)
- https://assignment-8-coral.vercel.app/api/v1/categories/b33e6c08-8b5e-47f5-b7cc-73f3b2f36a4d (PATCH)//Allowed For Admin
- https://assignment-8-coral.vercel.app/api/v1/categories/b33e6c08-8b5e-47f5-b7cc-73f3b2f36a4d (DELETE)//Allowed For Admin
- https://assignment-8-coral.vercel.app/api/v1/categories/b33e6c08-8b5e-47f5-b7cc-73f3b2f36a4d (DELETE)//Allowed For Admin

#### BOOKS Routes

- https://assignment-8-coral.vercel.app/api/v1/books/create-book (POST)// Allowed For Admin
- https://assignment-8-coral.vercel.app/api/v1/books (GET)
- https://assignment-8-coral.vercel.app/api/v1/books/b33e6c08-8b5e-47b2f364d (GET)
- https://assignment-8-coral.vercel.app/api/v1/books/b33e6c08-8b5e-4b2f36a4d (PATCH)//Allowed For Admin
- https://assignment-8-coral.vercel.app/api/v1/books/b33e6c08-8b5e-2f36a4d (DELETE)//Allowed For Admin

#### Get Books By CategoryId

- https://assignment-8-coral.vercel.app/api/v1/books/b33e6c08-8b5e-2f36a4d/category (GET)

#### Order Routes

- https://assignment-8-coral.vercel.app/api/v1/orderedBook/create-orderedBook (POST)
- https://assignment-8-coral.vercel.app/api/v1/orderedBook (GET)
- https://assignment-8-coral.vercel.app/api/v1/orderedBook/b33e6c08-8b5e-47b2f364d (GET)

#### Order Routes

- https://assignment-8-coral.vercel.app/api/v1/order/create-order (POST)// Allowed For Customer
- https://assignment-8-coral.vercel.app/api/v1/order (GET)//Allowed For Admin
- https://assignment-8-coral.vercel.app/api/v1/order/b33e6c08-8b5e-47b2f364d (GET)
- https://assignment-8-coral.vercel.app/api/v1/order/b33e6c08-8b5e-4b2f36a4d (PATCH)//Allowed For Admin
- https://assignment-8-coral.vercel.app/api/v1/order/b33e6c08-8b5e-2f36a4d (DELETE)//Allowed For Admin

#### Get User Profile Data

- https://assignment-8-coral.vercel.app/api/v1/profile (GET)




#### Github Repository Link : https://github.com/hasibul1670/Book_Catalog_Backend
#### Deployed Live Link : https://assignment-8-coral.vercel.app
