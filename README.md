# Car Wash Booking System

## Description

This is a full-stack application for managing car wash bookings. It consists of a React-based frontend and a Node.js/Express backend with MongoDB as the database.

## Features

- View a list of bookings
- Add new bookings
- Update booking status
- Filter and search bookings
- Responsive design

## Technologies Used

### Frontend

- React
- TypeScript
- Material-UI (MUI)
- Axios
- React Router DOM
- Vite

### Backend

- Node.js
- Express.js
- Mongoose (for MongoDB interaction)
- CORS
- Dotenv
- Morgan

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- A MongoDB Atlas account (for database hosting)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Deepanshv/Car-wash-booking.git
cd Car-Booking
```

### 2. Backend Setup

1.  **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file:**
    In the `backend` directory, create a file named `.env` and add the following content. Replace the placeholder values with your actual MongoDB Atlas connection string and desired port.

    ```
    MONGO_URI=mongodb+srv://<your_username>:<your_password>@cluster0.pkaeupk.mongodb.net/carwash?retryWrites=true&w=majority&appName=Cluster0
    PORT=5001
    ```

    - **`MONGO_URI`**: Obtain this from your MongoDB Atlas cluster. Go to your cluster, click "Connect", choose "Connect your application", and copy the connection string. Make sure to replace `<your_username>` and `<your_password>` with your actual database user credentials. If your password contains special characters like `@`, ensure it is URL-encoded (e.g., `@` becomes `%40`).
    - **IP Whitelisting**: Ensure your current IP address is whitelisted in your MongoDB Atlas project's Network Access settings. Without this, the backend will not be able to connect to the database.

4.  **Start the backend server:**
    ```bash
    npm start
    ```
    The server should start and connect to your MongoDB Atlas database. You should see a message like "MongoDB connected successfully." and "Server is running on port 5001".

### 3. Frontend Setup

1.  **Navigate to the frontend directory:**

    ```bash
    cd ../frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    This will start the React development server, usually on `http://localhost:5173` (or another available port).

## Usage

Once both the backend and frontend servers are running:

1.  Open your web browser and navigate to the address where the frontend is running (e.g., `http://localhost:5173`).
2.  You can now view, add, update, and manage car wash bookings through the application.

## Contributing

Feel free to fork the repository, create a new branch, and submit pull requests.

## License

This project is licensed under the MIT License.
