Grocery Booking API
This project is a Node.js application built with TypeScript, Express, and MongoDB for managing grocery bookings. It supports two roles: Admin and User. Admins can manage grocery items, while users can browse and place orders for groceries. The application is containerized using Docker for seamless deployment and scaling.

Features
Admin Responsibilities:
Add new grocery items to the system.
View existing grocery items.
Update details (e.g., name, price) of grocery items.
Remove grocery items from the system.
Manage inventory levels.
User Responsibilities:
View the list of available grocery items.
Book multiple grocery items in a single order.
Advanced Features:
Transaction handling for atomic operations during order placement.
Input validation for secure and robust API usage.
Containerized application for easy deployment.
Technologies Used
Node.js: Server-side JavaScript runtime.
TypeScript: Provides static typing and enhanced developer experience.
Express.js: Web framework for building RESTful APIs.
MongoDB: NoSQL database for storing grocery items and orders.
Mongoose: ODM for MongoDB.
Docker: Containerization tool for deployment and scaling.
dotenv: For managing environment variables.
Installation and Setup
Prerequisites
Node.js and npm installed
Docker installed
MongoDB database (local or hosted)
Steps to Run the Project
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-repo/grocery-booking-api.git
cd grocery-booking-api
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables:

Create a .env file in the root directory.
Add the following variables:
makefile
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the server:

bash
Copy
Edit
npm run dev
Run using Docker:

Build the Docker image:
bash
Copy
Edit
docker build -t grocery-booking-api .
Run the container:
bash
Copy
Edit
docker run -p 5000:5000 --env-file .env grocery-booking-api
API Endpoints
Admin Routes
Method	Endpoint	Description
POST	/api/admin/groceries	Add a new grocery item.
GET	/api/admin/groceries	View all grocery items.
PUT	/api/admin/groceries/:id	Update details of a grocery item.
DELETE	/api/admin/groceries/:id	Remove a grocery item.
PATCH	/api/admin/inventory/:id	Update inventory levels.
User Routes
Method	Endpoint	Description
GET	/api/user/groceries	View available grocery items.
POST	/api/user/orders	Place an order.
