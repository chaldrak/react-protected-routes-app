import { useState } from "react";
import LoginForm from "../components/authentication/LoginForm";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { setAuth } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const formData = {
      ...form,
      [name]: value,
    };
    setForm(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(form);
    const token = response?.token;
    const user = "Chaldrak";
    setAuth({ user, token });
    navigate(from, { replace: true });
  };
  return (
    <div className="grid h-[100vh] w-full grid-cols-2">
      <div className="bg-[url('../assets/bg.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <LoginForm {...form} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
}

export default LoginPage;
