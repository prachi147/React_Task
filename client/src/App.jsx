import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default App;
