# Card Application Server

A card management application built with React on the front end and Express.js on the back end. Users can create, update, and delete cards, each with customizable text and background colors.

## Features

- Full CRUD (Create, Read, Update, Delete) operations for card management.
- In-memory database for storing card data, allowing for quick development and testing.
- CORS-enabled to allow cross-origin requests from the React frontend.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: In-memory array

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/onico100/card-site-server
   ```

2. **Navigate to the server directory**:

   ```bash
   cd card-server
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the server**:

   ```bash
   node index.js
   ```

   The server will run on `http://localhost:8000`.

2. **Access the API**: You can interact with the API using tools like Postman or CURL. Here are some example endpoints:

   - **Get all cards**:

     ```bash
     curl http://localhost:8000/cards
     ```

   - **Get a card by ID**:

     ```bash
     curl http://localhost:8000/cards/<id>
     ```

   - **Create a new card**:

     ```bash
     curl -X POST http://localhost:8000/cards -H "Content-Type: application/json" -d '{"text": "New Card", "backgraund": "color3"}'
     ```

   - **Update a card**:

     ```bash
     curl -X PATCH http://localhost:8000/cards/<id> -H "Content-Type: application/json" -d '{"text": "Updated Card", "backgraund": "color4"}'
     ```

   - **Delete a card**:
     ```bash
     curl -X DELETE http://localhost:8000/cards/<id>
     ```

3. **Start the React client**:
   - Clone the React app repository:
     ```bash
     git clone https://github.com/onico100/card-site-front
     ```
   - Navigate to the React app directory and install dependencies:
     ```bash
     cd card-site-front
     npm install
     ```
   - Start the client:
     ```bash
     npm start
     ```
   - The client will run on `http://localhost:3000`.

## Note

- This server uses an in-memory array as a database, meaning all data will be lost when the server restarts.
