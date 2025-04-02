# 🚀 Vitalese - Full-Stack Patient-Doctor Platform

## 🌟 Project Overview

Vitalese is a **MERN stack** web application designed to bridge the gap between **patients and doctors**. The platform enables patients to book appointments, consult doctors online, manage medical records, and receive prescriptions digitally, improving healthcare accessibility and efficiency.

---

## 🔥 Key Features

- 🔐 **User Authentication** – Secure **JWT-based** authentication for doctors & patients.
- 🏥 **Role-Based Access Control** – Separate dashboards for **patients** and **doctors**.
- 📅 **Appointment Booking** – Patients can schedule, reschedule, or cancel appointments.
- 🔍 **Doctor Listings & Filters** – Search for doctors by **specialization, location, or availability**.
- 💊 **E-Prescriptions** – Doctors can generate & share digital prescriptions.
- 📂 **Medical History Management** – Patients can access their past consultations & reports.
- 💬 **Real-Time Chat (Optional)** – Secure messaging between doctors & patients.
- 🎛 **Admin Panel** – Manage users, doctors, and appointments.
- 💳 **Secure Payments (Optional)** – Integration with **Stripe/Razorpay** for paid consultations.

---

## 📌 API Endpoints

### 🔑 Authentication (`/api/auth/`)

- `POST /register` – User registration (Patient/Doctor)
- `POST /login` – Authenticate user & return JWT token

### 🏥 Patients (`/api/patients/`)

- `GET /appointments` – View upcoming appointments
- `POST /book-appointment` – Book a new appointment
- `GET /medical-history` – Fetch past consultations

### 👨‍⚕️ Doctors (`/api/doctors/`)

- `GET /appointments` – View scheduled appointments
- `POST /create-prescription` – Issue an e-prescription

### 🛠 Admin (`/api/admin/`)

- `GET /users` – View all users
- `DELETE /user/:id` – Delete a user

---

## 🔧 Environment Variables

Create a `.env` file in both the **backend** and **frontend** with:

### 🖥 Backend (`server/.env`)

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_cloudinary_api_key (if using image uploads)
STRIPE_SECRET_KEY=your_stripe_secret_key (if using payments)
```

### 🌍 Frontend (`client/.env`)

```
REACT_APP_API_BASE_URL=http://localhost:5000
```

---

## 🌐 Demo Link

🔗 **Live Demo:** [Your Hosted Link (e.g., Vercel, Render)]

---

## 🛠 Setup Guide

### 📥 Clone the repository

```sh
git clone https://github.com/your-username/vitalese.git
cd vitalese
```

### 🚀 Backend Setup

```sh
cd server
npm install
npx nodemon server
```

### 🎨 Frontend Setup

```sh
cd client
npm install
npm start
```

### 🔄 Run the project

- **Backend runs on:** `http://localhost:5000`
- **Frontend runs on:** `http://localhost:3000`

---

## 💻 Tech Stack

- 🎨 **Frontend:** React.js, Redux (if needed), TailwindCSS/Bootstrap
- 🛠 **Backend:** Node.js, Express.js
- 🗄 **Database:** MongoDB, Mongoose
- 🔐 **Auth:** JWT, Bcrypt.js
- ☁ **Hosting:** (Vercel for frontend, Render for backend)

---

## 🤝 Contribution

Contributions are welcome! Fork the repo, make your changes, and submit a pull request.

---

