#  Medium Cheat Buster App 
## Overview
  three features:
1. **Search by Name** - Users can search by first or last name
2. **Better Loading State** - Buttons show "Searching..." and are disabled during requests
3. **API Service Refactor** - Clean separation of API calls in a dedicated service

## Project Structure
```
project-root/
├── controllers/
│   └── user.controller.js     # Enhanced with name search
├── models/
│   └── user.model.js          # User schema
├── routes/
│   └── user.routes.js         # API routes
├── public/
│   ├── index.html             # Enhanced UI with dual search
│   ├── script.js              # Main frontend logic
│   └── api.js                 # API service layer
├── index.js                   # Main server file
├── seed.js                    # Database seeding
├── package.json
├── jsconfig.json
└── .env                       # Environment variables
```

## Setup Instructions

### 1. Install Dependencies
```bash
bun install
```
![image](https://github.com/user-attachments/assets/b57a0a4c-1a72-4357-b902-c82a8935b70d)

### 2. Set up Environment Variables
Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb://localhost:27017/cheat-buster-app
PORT=3000
NODE_ENV=development
```

### 3. Seed the Database
```bash
bun run seed.js
```
![image](https://github.com/user-attachments/assets/c62b75c0-8836-45f5-9785-3819c91cc31b)

### 4. Start the Server
```bash
bun run index.js
```
![image](https://github.com/user-attachments/assets/141996ca-46e7-4f9b-b7b1-0e12e125a545)

![image](https://github.com/user-attachments/assets/bba968c6-e419-4604-9006-5f7e9c7e87a2)
![image](https://github.com/user-attachments/assets/9a8ae68d-756b-4387-8462-5b0fac505328)
![image](https://github.com/user-attachments/assets/9990bb6a-b80b-4564-ae28-78914849cf61)

## Features Implemented

### 1. Search by Name Enhancement
- **Backend**: Updated `user.controller.js` with flexible search logic
- **Frontend**: Added name input field with separate search button
- **Validation**: Uses Zod schema to ensure either email OR name is provided
- **Query**: Uses MongoDB `$or` with regex for case-insensitive name matching

### 2. Better Loading State
- **Button Disable**: Prevents multiple clicks during search
- **Text Change**: Shows "Searching..." during API calls
- **Always Reset**: Uses `.finally()` to ensure buttons are re-enabled
- **Visual Feedback**: Opacity changes to indicate disabled state

### 3. API Service Refactor
- **Separation**: All axios logic moved to `api.js`
- **Clean Interface**: Exported functions like `searchUserByEmail()` and `searchUserByName()`
- **Modularity**: Main script imports and uses these functions
- **Maintainability**: Easy to add new API endpoints

## API Endpoints

### Search User
```
GET /api/users/search?email=user@example.com
GET /api/users/search?name=John
```

**Response Format:**
```json
{
  "success": true,
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "age": 30,
    "city": "New York",
    "picture": "https://randomuser.me/api/portraits/men/1.jpg"
  }
}
```

### Get All Users
```
GET /api/users
```

