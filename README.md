# Grocery Booking API

This project is a Node.js application built with TypeScript, Express, and MongoDB for managing grocery bookings. It supports two roles: **Admin** and **User**. Admins can manage grocery items, while users can browse and place orders for groceries. The application is containerized using Docker for seamless deployment and scaling.

---

## Features

### Admin Responsibilities:
- Add new grocery items to the system.
- View existing grocery items.
- Update details (e.g., name, price) of grocery items.
- Remove grocery items from the system.
- Manage inventory levels.

### User Responsibilities:
- View the list of available grocery items.
- Book multiple grocery items in a single order.

### Advanced Features:
- Transaction handling for atomic operations during order placement.
- Input validation for secure and robust API usage.
- Containerized application for easy deployment.


## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **TypeScript**: Provides static typing and enhanced developer experience.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing grocery items and orders.
- **Mongoose**: ODM for MongoDB.
- **Docker**: Containerization tool for deployment and scaling.
- **dotenv**: For managing environment variables.

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed.
- Docker installed.
- MongoDB database (local or hosted).

### Steps to Run the Project
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/grocery-booking-api.git
   cd grocery-booking-api


---

### **API Endpoints**
```markdown
## API Endpoints

### Admin Routes
| Method | Endpoint                   | Description                       |
|--------|----------------------------|-----------------------------------|
| POST   | `/api/admin/groceries`     | Add a new grocery item.           |
| GET    | `/api/admin/groceries`     | View all grocery items.           |
| PUT    | `/api/admin/groceries/:id` | Update details of a grocery item. |
| DELETE | `/api/admin/groceries/:id` | Remove a grocery item.            |
| PATCH  | `/api/admin/inventory/:id` | Update inventory levels.          |

### User Routes
| Method | Endpoint                   | Description                       |
|--------|----------------------------|-----------------------------------|
| GET    | `/api/user/groceries`      | View available grocery items.     |
| POST   | `/api/user/orders`         | Place an order.                   |


## Scripts

- `npm run dev`: Start the server in development mode.
- `npm run build`: Compile TypeScript to JavaScript.
- `npm start`: Start the server in production mode.

---

## Docker Details

- **Build the Docker Image**:
  ```bash
  docker build -t grocery-booking-api .


---

### **Future Enhancements**
```markdown
## Future Enhancements

- Add authentication and authorization for Admin and User roles.
- Implement a caching mechanism for frequently accessed grocery items.
- Add support for filtering and sorting grocery items.
- Integrate payment processing for order placement.

## License

This project is licensed under the [MIT License](LICENSE).
