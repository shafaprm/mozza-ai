// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Register from './pages/Register'
// import Conversation from './pages/Conversation'

// import {useAuth} from './hooks/auth-hook.js'
// import { AuthProvider, AuthContext} from './context/auth-context.js';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Landing />} />
//       <Route path="/login" element={<Login />} /> 
//       <Route path="/register" element={<Register />} /> 
//       <Route path="/conversation" element={<Conversation />} /> 
//     </>
//   )
// );

// function App() {
//   const { loginHandler, logoutHandler, token, userId} = useAuth()

//   return <RouterProvider router={router} />;
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import loadable from '@loadable/component';

// Components
import { AuthProvider } from './context/auth-context.js';
import { useAuth } from './hooks/auth-hook.js';
import ProtectedRoute from './middlewares/ProtectedRoute.js';
import UnprotectedRoute from './middlewares/UnprotectedRoute.js';

// Pages (use loadable for code splitting)
const Landing = loadable(() => import('./pages/Landing'));
const Login = loadable(() => import('./pages/Login'));
const Register = loadable(() => import('./pages/Register'));
const Conversation = loadable(() => import('./pages/Conversation'));

const App = () => {
  const { loginHandler, logoutHandler, token, userId } = useAuth();

  return (
    <AuthProvider value={{ isLoggedIn: !!token, token, loginHandler, logoutHandler, userId }}>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<UnprotectedRoute><Login /></UnprotectedRoute>} />
            <Route path="/register" element={<UnprotectedRoute><Register /></UnprotectedRoute>} />
            <Route path="/conversation" element={<ProtectedRoute><Conversation /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

