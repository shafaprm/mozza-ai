import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from './pages/Register'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
