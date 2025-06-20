# 🍔 FoodHat – Food Delivery Web Application

**FoodHat** is a modern full-stack food delivery web application built with **React**, **Express.js**, and **MongoDB**. It includes both **User** and **Admin** interfaces and is fully optimized for real-time food ordering and admin management.

---

## 🚀 Live Demo

- **Frontend (User Side)**: [https://food-hat.vercel.app](https://food-hat.vercel.app)
  
---

## 📦 Project Structure

foodhat/

├── frontend/ → React-based user interface

├── backend/ → Express.js + MongoDB backend APIs

├── admin/ → Separate admin dashboard to manage the platform


---

## ✨ Features

### 👤 User Side
- User registration and login
- Browse menu and food items
- Add to cart and place orders
- Order history and status tracking
- Mobile-friendly and responsive UI

### 🛠 Admin Side
- Secure admin login
- Add/Edit/Delete food items
- Manage orders and users
- Real-time order updates
- Dashboard analytics (optional)

---

## 🧑‍💻 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios
- **Backend:** Express.js, Node.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Hosting:** Vercel (Frontend), Render (Backend)

---

## ⚙️ Setup Instructions

### 1. Clone the repository
      git clone https://github.com/your-username/foodhat.git
      cd foodhat
### 2. Backend Setup

      cd backend
      npm install
      npm run dev
Make sure you set up your .env with the required variables (like MongoDB URI, JWT secret)

### 3. Frontend Setup

      cd ../frontend
      npm install
      npm run dev
### 4. Admin Setup (Optional)

      cd ../admin
      npm install
      npm run dev
### 🔐 Environment Variables Example
backend/.env

      
      MONGO_URI=your_mongodb_uri
      JWT_SECRET=your_jwt_secret
      PORT=5000
      


### 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

### 🧑‍🎓 Author
Krishnan K – @Krishnan005K

### 📄 License
This project is licensed under the MIT License.

