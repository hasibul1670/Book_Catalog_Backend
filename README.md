### Book Catalog Backend

Welcome to the Book Catalog Backend repository! This repository serves as the backbone for managing various aspects of the university's book catalog and library operations. From organizing book collections to enabling efficient access for students and faculty, this repository encompasses essential functionalities. Below, you'll find an overview of the technologies employed, key features, and more.

### ER Diagram

#### Entities

#### Book

    id (Primary Key)
    ISBN
    title
    author(s)
    publicationYear
    genre
    language
    coverImage
    quantityAvailable
    createdAt
    updatedAt
    borrowers

### Author

    id (Primary Key)
    firstName
    lastName
    bio
    books

#### Borrower

    id (Primary Key)
    firstName
    lastName
    profileImage
    email
    contactNo
    booksBorrowed
    createdAt
    updatedAt

#### Genre

    id (Primary Key)
    name
    description
    books

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
