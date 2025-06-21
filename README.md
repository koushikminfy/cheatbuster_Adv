

##  Cheat Buster App




####  Initialize Bun project

```bash
bun init
```

#### Install required packages

```bash
bun add express mongoose zod axios dotenv
```

---

###  --> Folder Structure

```
cheat-buster-app/
├── controllers/
│   └── user.controller.js
├── models/
│   └── user.model.js
├── routes/
│   └── user.routes.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .env
├── index.js
├── seed.js
├── .gitignore
```

---

###  Step 3: Configure Environment

#### `.env` file (in root):

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```
replacing wiuth my atlas account url

---

###  Step 4: Backend - Model

#### `models/user.model.js`


###  Step 5: Backend - Controller

#### `controllers/user.controller.js`

###  Step 6: Backend - Routes

#### `routes/user.routes.js`



###  Step 7: Backend - Main Server

#### `index.js`

### Step 8: Seeding the Database

#### `seed.js`


Run:

```bash
bun seed.js
```
![image](https://github.com/user-attachments/assets/73bc561a-0a3d-414f-b9ef-31268235951a)
---

###  Step 9: Frontend Files

#### `public/index.html`

#### `public/style.css`

#### `public/script.js`


###  Step 10: Run the Project

#### 1. Start the backend server

```bash
bun index.js
```
![image](https://github.com/user-attachments/assets/e738d960-d13b-4126-afc5-689095365a29)



#### 2. Open the app in browser

Go to:

```
http://localhost:3000
```
![image](https://github.com/user-attachments/assets/657f0f74-7e49-4746-bce6-6ee626b933c6)

---

##  Frontend–Backend Integration Summary

| What Happens                         | File                       |
| ------------------------------------ | -------------------------- |
| User enters email                    | `index.html` + `script.js` |
| JS sends GET `/api/search?email=...` | `script.js`                |
| Express route receives request       | `user.routes.js`           |
| Controller validates + searches DB   | `user.controller.js`       |
| MongoDB returns user if found        | `user.model.js` (Mongoose) |
| Response shown in UI                 | DOM updated via JS         |

---
