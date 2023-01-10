import { useEffect, useState } from "react";
import LoginForm from "../components/authentication/LoginForm";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

let api_url = "https://manga-quizz-api.onrender.com/api";

async function login(credentials) {
  const res = await fetch(`${api_url}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return await res.json();
}

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { auth, setAuth } = useAuth();
  const [error, setError] = useState("");
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
    console.log(form);
    const response = await login({
      email: form.email,
      password: form.password,
    });
    if (response?.error) {
      setError(response?.error);
      return;
    }
    const token = response?.accessToken;
    setAuth({ token });
    localStorage.setItem("user", JSON.stringify({ token }));
    navigate(from, { replace: true });
  };
  useEffect(() => {
    if (auth?.token) navigate("/dashboard", { replace: true });
  }, []);
  return (
    <div className="grid h-[89vh] w-full grid-cols-2">
      <div className="bg-[url('../assets/bg.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <LoginForm
        {...form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
}

export default LoginPage;
