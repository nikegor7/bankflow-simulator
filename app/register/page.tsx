"use client";
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register() {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert("Registration failed");
      return;
    }

    localStorage.setItem("token", data.token);
    window.location.href = "/login";
  }

  return (
      <main className="flex min-h-screen items-center justify-center">
      <div className="w-96 p-6 border rounded space-y-4">
        <h1 className="text-2xl font-bold text-center">Register</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Create account
        </button>
        <p> Already have an account? <a href="/login">Login</a></p>
      </div>
    </main>

  );
}
