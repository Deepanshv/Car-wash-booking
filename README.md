# Car Wash Booking Application

## Description

This is a full-stack web application designed to manage car wash bookings. It provides a user-friendly interface for customers to book car wash services and an administrative dashboard to manage bookings, track statuses, and view key performance indicators (KPIs).

## Features

- **Booking Management:** Create, view, update, and delete car wash bookings.
- **Booking Status:** Track bookings through various statuses (Pending, Confirmed, Completed, Cancelled).
- **Search & Filter:** Efficiently search and filter bookings by various criteria (e.g., status, service type, search term).
- **Pagination:** Navigate through large sets of booking data.
- **KPI Dashboard:** Overview of booking statistics (e.g., number of pending, confirmed, completed, cancelled bookings).
- **Responsive Design:** User interface adapts to different screen sizes.

## Tech Stack

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite:** A fast build tool that provides an instant development server.
- **Material-UI (MUI):** A popular React UI framework implementing Google's Material Design.
- **Axios:** A promise-based HTTP client for making API requests.
- **React Router DOM:** For declarative routing in React applications.

### Backend

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose:** An elegant MongoDB object modeling tool for Node.js.
- **MongoDB Atlas:** A cloud-based database service for MongoDB.
- **dotenv:** Loads environment variables from a `.env` file.
- **cors:** Node.js middleware for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **morgan:** HTTP request logger middleware for Node.js.

## Setup

### Prerequisites

- Node.js (LTS version recommended)
- npm (Node Package Manager) or Yarn
- A MongoDB Atlas account (or a local MongoDB instance)

### Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Deepanshv/Car-wash-booking.git
    cd Car-wash-booking/backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file:**
    In the `backend` directory, create a file named `.env` and add the following environment variables:

    ```
    MONGO_URI="YOUR_MONGODB_ATLAS_CONNECTION_STRING"
    PORT=5001
    FRONTEND_URL="http://localhost:3000" # Or your deployed frontend URL (e.g., https://car-wash-booking-dv.vercel.app)
    ```

    - Replace `"YOUR_MONGODB_ATLAS_CONNECTION_STRING"` with your actual MongoDB Atlas connection string.
    - `PORT` is the port your backend server will run on.
    - `FRONTEND_URL` is crucial for CORS configuration.

4.  **MongoDB Atlas IP Whitelisting:**

    - Log in to your MongoDB Atlas account.
    - Navigate to your project.
    - Go to **"Network Access"** under the **"Security"** section.
    - Add your current public IP address (for local development) and any IP addresses used by your deployment platform (e.g., Render's IP addresses) to the IP whitelist.

5.  **Start the backend server:**
    ```bash
    npm start
    ```
    The server will run on the specified `PORT` (defaulting to 5001).

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file:**
    In the `frontend` directory, create a file named `.env` (or `.env.local` for local development) and add the following environment variable:

    ```
    VITE_API_BASE_URL="http://localhost:5001" # Or your deployed backend URL (e.g., https://car-wash-booking-brt5.onrender.com)
    ```

    - This variable tells your frontend where to find your backend API.

4.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    The frontend application will typically open in your browser at `http://localhost:5173` (or another available port).

## Deployment

### Backend (Render)

1.  Create a new Web Service on Render.
2.  Connect your GitHub repository.
3.  Set the build command to `npm install`.
4.  Set the start command to `npm start`.
5.  Add environment variables: `MONGO_URI` (your MongoDB Atlas connection string) and `FRONTEND_URL` (your deployed Vercel frontend URL). Render automatically sets the `PORT` environment variable.
6.  Ensure Render's IP addresses are whitelisted in your MongoDB Atlas project.

### Frontend (Vercel)

1.  Create a new Project on Vercel.
2.  Connect your GitHub repository.
3.  Set the build command to `npm run build`.
4.  Set the output directory to `dist`.
5.  Add an environment variable: `VITE_API_BASE_URL` (your deployed Render backend URL, e.g., `https://car-wash-booking-brt5.onrender.com`).

## Documentation

- [React Documentation](https://react.dev/docs)
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Material-UI Documentation](https://mui.com/material-ui/getting-started/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)

## Live Links

https://car-wash-booking-dv.vercel.app
https://car-wash-booking-brt5.onrender.com

## Issues/Limitations

- **MongoDB Connection:** The application relies heavily on a stable connection to MongoDB. Ensure proper IP whitelisting and a correct `MONGO_URI` for both local development and deployment environments.
- **Error Handling:** While basic error handling is in place, more robust and user-friendly error messages could be implemented for API failures.
- **Authentication/Authorization:** This application currently lacks user authentication and authorization. All users have full access to create, view, update, and delete bookings. This would be a critical feature for a production environment.
- **Input Validation:** While some validation might be present, comprehensive server-side input validation should be ensured for all API endpoints.
