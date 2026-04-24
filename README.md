```md
# 🎬 Netflix GPT

A full-stack Netflix-inspired movie streaming UI with AI-powered movie recommendations using OpenRouter GPT.

---

## 🚀 Features

### 🔐 Authentication
- Sign In / Sign Up (Firebase)
- Form Validation
- Protected Routes
- User Profile (Name + Avatar)
- Sign Out functionality

---

### 🎥 Browse Page
- Hero Section with Auto-playing Trailer
- Movie Title & Overview
- Dynamic Movie Rows
- Smooth Horizontal Scrolling (Netflix-style)
- Fade Edge Effects (Premium UI)

---

### 🎬 Movie Features
- Now Playing Movies (TMDB API)
- Popular Movies
- Trailer Playback (YouTube Embed)
- Trailer Popup Modal
- Responsive Movie Cards
- Hover Effects (Zoom + Elevation)

---

### 🤖 GPT Movie Search (AI Feature)
- AI-powered movie recommendations
- Backend-powered (Node.js + Express)
- Uses OpenRouter API
- Secure API key handling (no frontend exposure)
- Converts GPT suggestions → TMDB results → UI display

---

### 🌐 Backend (Node.js + Express)
- `/gpt` API endpoint
- Handles OpenRouter API calls
- Error handling + validation
- Serves React build (single deployment)

---

### 🎨 UI/UX Enhancements
- TailwindCSS styling
- Responsive design (mobile + desktop)
- Smooth scrolling
- Loading states (Searching...)
- Disabled button during API calls
- Clean Netflix-like layout

---

## 🛠️ Tech Stack

### Frontend
- React (CRA)
- Redux Toolkit
- TailwindCSS
- Firebase Auth

### Backend
- Node.js
- Express.js
- Axios

### APIs
- TMDB API (Movies)
- OpenRouter API (GPT)

---

## 📦 Project Structure

```

/frontend   → React App
/backend    → Express Server

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo
```bash
git clone <your-repo-url>
cd netflix-gpt
````

---

### 2️⃣ Setup Frontend

```bash
cd frontend
npm install
```

Create `.env` file:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_key
```

---

### 3️⃣ Setup Backend

```bash
cd ../backend
npm install
```

Create `.env` file:

```env
OPENROUTER_API_KEY=your_openrouter_key
```

---

### 4️⃣ Run Locally

#### Start Backend:

```bash
cd backend
node index.js
```

#### Start Frontend:

```bash
cd frontend
npm start
```

---

### 5️⃣ Build for Production

```bash
cd frontend
npm run build
```

---

## 🌍 Deployment

* Deployed using **Render**
* Backend serves React build (single service)
* Environment variables configured in Render dashboard

---

## 🔐 Security Notes

* OpenRouter API key is stored in backend `.env`
* Firebase config is public-safe (not a secret)
* No sensitive keys exposed to frontend

---

## 🎯 Future Improvements

* 🎬 Movie Details Page
* ⭐ Watchlist Feature
* 🔍 Debounced Search
* 🌙 Dark/Light Theme Toggle
* ⚡ Caching for API responses
* 📊 User preferences tracking

---

## 👨‍💻 Author

**Sairus Varma**
GitHub: https://github.com/SAIRUSVARMA

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share it 🚀

```
```
