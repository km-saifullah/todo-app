# Todo App - Backend

## Project Description

The backend of the TodoApp is built using Node.js and Express.js, with MongoDB as the database. It handles CRUD operations, and provides an API for the frontend to interact with.

## Project Technology Badge

![Node.js](https://img.shields.io/badge/Node.js-green)
![Express.js](https://img.shields.io/badge/Express.js-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-yellow)

## Project Features

- Add Todo
- Update Todo
- Show All Todo
- Delete Todo
- CRUD Operation in MongoDB

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/km-saifullah/todo-app.git
   cd todo-app/backend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   PORT=8000
   DATABASE_URI=your_mongodb_uri
   ```
4. **Start the server:**
   ```bash
   npm run dev
   ```

## Usage

The backend server will be running on `http://localhost:8000`. Use the API endpoints to perform CRUD operations on tasks and manage user authentication.

## Feature Advancement

- **Notifications:** Add push notifications for task reminders.
- **Task Sharing:** Allow users to share tasks with others.
- **Offline Mode:** Enable offline access and synchronization.
- **Subtasks:** Add support for subtasks within a main task.

## ETC

- **Contributions:** Contributions are welcome! Feel free to submit a pull request or open an issue.
- **License:** This project is licensed under the MIT License.
- **Contact:** For any inquiries, please contact [km-saifullah](https://github.com/km-saifullah).
