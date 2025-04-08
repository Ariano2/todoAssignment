# 📝 Todo App with Redux, LocalStorage, and Quotes API

This is a simple yet powerful Todo App built with **React**, using **Redux** for user login state management, and **localStorage** for persisting todos across sessions. It also integrates with an external **Quotes API** to display motivational quotes every time you use the app.

---

LIVE LINK - https://todobyintern-aryan.netlify.app/

## 🚀 Features

- ✅ Add, delete, and mark todos as complete
- 🔐 Login/logout functionality via Redux (mock authentication)
- 💾 Persistent todos using `localStorage`
- ✨ Fetches and displays random motivational quotes using an external API
- ⚛️ Built using functional components and hooks (`useState`, `useEffect`)
- 💡 Clean and minimal UI with responsive design

---

## 🛠️ Technologies Used

- React
- Redux Toolkit
- React-Redux
- localStorage API
- JavaScript Fetch API
- CSS or Tailwind (if you used it)

---

## 🔄 App Flow & Architecture

### 1. **Login with Redux**

- The app uses a mock login system.
- Redux manages the `auth` state with `isLoggedIn` boolean and a dummy `user` object.
- Users must log in to interact with the todo list.
- State is accessed and modified via `useSelector` and `useDispatch`.

---

### 2. **Todos & localStorage**

- Todos are stored in a `todos` state variable (`useState`) inside the main `TodoList` component.
- On first render, the app checks `localStorage` for existing todos.
- Every time `todos` changes, `useEffect` updates `localStorage` to persist changes.

---

### 3. **Motivational Quotes (External API Integration)**

- A quote is fetched when the component mounts using the `useEffect` hook.
- The fetched quote is stored in a `quote` state variable and displayed on the UI.

````

---

## 💡 How It All Comes Together

1. User logs in via a simple form → Redux stores login state.
2. On login success, `TodoList` component renders.
3. `TodoList` loads saved todos from `localStorage` using `useEffect`.
4. Todos can be added/removed/marked as complete → updates `todos` state → persists in `localStorage`.
5. `QuoteBox` fetches a new quote when the app loads using `useEffect`.

---

## 🧪 Sample Credentials

This app does not use real authentication. Use any dummy username/password to "log in".

---

## 🛠️ Installation & Running Locally

```bash
git clone https://github.com/yourusername/todo-app-redux
cd todo-app-redux
npm install
npm start
````

---

## 📌 Future Improvements

- Connect to real backend auth (Firebase/Auth0)
- Add filtering for completed/incomplete todos
- Option to refresh quotes
- Add due dates and reminders

---

## 📃 License

MIT License © 2025 Aryan Gosain
