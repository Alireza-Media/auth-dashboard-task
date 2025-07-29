# 🔐 Auth Task – Next.js + TypeScript

This is a simple authentication flow built with Next.js, TypeScript, SCSS Modules, and Zod.  
The app includes a login page (`/auth`) with Iranian phone number validation and a protected dashboard page (`/dashboard`) that uses mock user data.

---

## 🚀 Getting Started

To run this project locally:

1. **Clone the repository:**

```bash
git clone https://github.com/Alireza-Media/auth-dashboard-task
cd auth-dashboard-task
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Open your browser:**

Go to [http://localhost:3000/auth](http://localhost:3000/auth)

---

## 📦 Project Structure

```
src/
├── app/
│   ├── auth/         → Login page
│   ├── dashboard/    → Dashboard page
│   └── layout.tsx    → Global layout (with RTL + global styles)
├── components/       → Reusable Input and Button
├── data/             → Mock user data (api.json)
├── styles/           → Global SCSS
```

---

## 📋 How It Works

- User enters a valid Iranian mobile number (e.g., 09123456789)
- The form is validated using **Zod**
- On success, a random user from `api.json` is saved to **localStorage**
- User is redirected to `/dashboard`
- Dashboard displays a welcome message
- If no user is logged in, `/dashboard` redirects back to `/auth`

---

## 🛠 Tech Stack

- ✅ Next.js 13+ (App Router)
- ✅ TypeScript
- ✅ SCSS Modules
- ✅ Zod (form validation)
- ✅ localStorage
- ✅ RTL layout for Persian
