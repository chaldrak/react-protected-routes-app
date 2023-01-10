import { useEffect, useState } from "react";
import LoginForm from "../components/authentication/LoginForm";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

// async function loginUser(credentials) {
//   return fetch("http://localhost:8080/api/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

let accessToken = "";
let api_url = "http://localhost:8080/api";

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
      console.log(response?.error);
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
      <LoginForm {...form} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
}

export default LoginPage;
