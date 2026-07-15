import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/ui/Button";
export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
  e.preventDefault();

  console.log("Login button clicked");

  if (username === "admin" && password === "1234") {
    login();
    navigate("/dashboard");
  } else {
    setError("Invalid Username or Password");
  }
}

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 w-96 p-8 rounded-2xl shadow-2xl"
      >

        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Digital Forensics AI
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-700 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-700 text-white"
        />

        {error && (
          <p className="text-red-400 mb-4">
            {error}
          </p>
        )}

        <Button
          type="submit"
          className="w-full py-3"
        >
          Login
        </Button>

      </form>

    </div>
  );
}