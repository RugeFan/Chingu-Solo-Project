# Cleaning Service Website

This is a **MERN** (MongoDB, Express, React, Node.js) project for a cleaning service website.

## Features

- Frontend built with **React** and **Vite**.
- Backend built with **Express.js**.
- MongoDB as the database for storing service and user information.
- Supports authentication and JWT-based security.

---

## Prerequisites

1. **Node.js**: Make sure Node.js is installed on your system. [Download Node.js](https://nodejs.org/).
2. **MongoDB**: A MongoDB database is required. You can use your own MongoDB connection string.

---

## Installation

Follow these steps to get the project running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/RugeeFan/Chingu-Solo-Project.git
cd Chingu-Solo-Project
```

### 2. Create a `.env` File

Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV = development
PORT = 3000
MONGO_URI = <your-mongodb-uri>
JWT_SECRET = abc123
```

**Replace `<your-mongodb-uri>` with your own MongoDB connection string**. For example:

```env
MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/cleaning
```

### 3. Install Dependencies

Run the following commands to install dependencies:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

### 4. Start the Development Server

Return to the project root directory and start the server:

```bash
cd ..
npm run dev
```

---

## Development

### **Backend**

The backend runs on **Node.js** and uses **Express.js** to handle APIs. Ensure that the MongoDB database is running and the connection string is correctly configured in the `.env` file.

- The server runs on `http://localhost:3000` by default.

### **Frontend**

The frontend is built using **React** and **Vite**. It supports fast refresh for a better development experience.

- The frontend runs on `http://localhost:5173` by default.

---

## Environment Variables

The project uses the following environment variables, configured in the `.env` file:

- **NODE_ENV**: Set to `development` for development mode.
- **PORT**: Port number for the backend server.
- **MONGO_URI**: MongoDB connection string.
- **JWT_SECRET**: Secret key for JWT authentication.

---

## Scripts

- `npm install`: Installs backend dependencies.
- `npm run dev`: Starts both the frontend and backend in development mode using `concurrently`.
- `npm run server`: Starts only the backend server using `nodemon`.
- `npm run client`: Starts only the frontend development server.

---

## Notes

1. **MongoDB URI Configuration**:  
   Replace `<your-mongodb-uri>` in the `.env` file with your own MongoDB connection string. For example:

   ```env
   MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/cleaning
   ```

2. **Environment Variables**:  
   Never expose sensitive environment variables in the code or upload the `.env` file to GitHub. Make sure `.gitignore` includes `.env`.

3. **Change Default JWT Secret**:  
   Update `JWT_SECRET` to a secure value for production.

4. **Port Conflicts**:  
   If port `3000` or `5173` is already in use, change the `PORT` variable in the `.env` file or run the application on a different port.

5. **Dependencies**:  
   Ensure that you run `npm install` in both the root and `frontend` directories.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

