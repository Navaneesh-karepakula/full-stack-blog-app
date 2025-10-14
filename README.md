# Full Stack Blog App

This is a full-stack blog application built with the MERN stack (MongoDB, Express.js, React, Node.js) and integrated with Gemini AI for content generation. It features a client-side application for users to read blogs and an admin panel for managing blog posts and comments.

---

## Features

* **Admin Dashboard:** A comprehensive dashboard for administrators to manage the blog.
* **CRUD Functionality:** Full create, read, update, and delete capabilities for blog posts.
* **AI Content Generation:** Integrated with Gemini AI to automatically generate blog content based on a given title.
* **Publish/Unpublish:** Admins can easily toggle the visibility of blog posts.
* **Comment Moderation:** Admins can approve or delete user comments.
* **Image Uploads:** Supports image uploads for blog thumbnails, with optimization through ImageKit.
* **User-Facing Blog:** A clean and modern interface for users to read and interact with blog posts.
* **Search and Filtering:** Users can search for blogs and filter them by category.

---

## Technologies Used

### Frontend

* **React:** A JavaScript library for building user interfaces.
* **React Router:** For routing and navigation within the React application.
* **Vite:** A fast build tool and development server for modern web projects.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **Axios:** A promise-based HTTP client for making requests to the backend.
* **Quill:** A rich text editor for creating and editing blog content.

### Backend

* **Node.js:** A JavaScript runtime for building the server-side application.
* **Express.js:** A web application framework for Node.js.
* **MongoDB:** A NoSQL database for storing blog posts, comments, and other data.
* **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
* **JSON Web Tokens (JWT):** For securing the admin panel and authenticating users.
* **Multer:** Middleware for handling `multipart/form-data`, used for file uploads.
* **ImageKit:** For image hosting, optimization, and transformation.
* **Google Gemini AI:** For generating blog content.

---

## Getting Started

### Prerequisites

* Node.js (v18 or higher)
* npm (or yarn)
* MongoDB Atlas account (or a local MongoDB instance)
* ImageKit account
* Google Gemini AI API Key

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/full-stack-blog-app.git](https://github.com/your-username/full-stack-blog-app.git)
    cd full-stack-blog-app
    ```

2.  **Install server dependencies:**
    ```bash
    cd server
    npm install
    ```

3.  **Install client dependencies:**
    ```bash
    cd ../client
    npm install
    ```

### Configuration

1.  **Create a `.env` file in the `server` directory** and add the following environment variables:

    ```env
    PORT=3000
    MONGODB_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ADMIN_EMAIL=<your_admin_email>
    ADMIN_PASSWORD=<your_admin_password>
    IMAGEKIT_PUBLIC_KEY=<your_imagekit_public_key>
    IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>
    IMAGEKIT_URL_ENDPOINT=<your_imagekit_url_endpoint>
    GEMINI_API_KEY=<your_gemini_api_key>
    ```

2.  **Create a `.env` file in the `client` directory** and add the following:
    ```env
    VITE_BASE_URL=http://localhost:3000
    ```

---

## Usage

1.  **Start the backend server:**
    ```bash
    cd server
    npm run server
    ```
    The server will start on the port specified in your `.env` file (e.g., `http://localhost:3000`).

2.  **Start the frontend development server:**
    ```bash
    cd client
    npm run dev
    ```
    The client application will be available at `http://localhost:5173`.

---

## API Endpoints

### Admin Routes (`/api/admin`)

* `POST /login`: Admin login.
* `GET /comments`: Get all comments.
* `GET /blogs`: Get all blogs for the admin panel.
* `POST /delete-comment`: Delete a comment.
* `POST /approve-comment`: Approve a comment.
* `GET /dashboard`: Get dashboard statistics.

### Blog Routes (`/api/blog`)

* `POST /add`: Add a new blog post.
* `GET /all`: Get all published blogs.
* `GET /:blogId`: Get a single blog by its ID.
* `POST /delete`: Delete a blog post.
* `POST /toggle-publish`: Toggle the publish status of a blog.
* `POST /add-comment`: Add a new comment to a blog.
* `POST /comments`: Get all approved comments for a blog.
* `POST /generate`: Generate blog content using AI.