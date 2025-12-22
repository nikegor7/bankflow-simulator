"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [role, setRole] = useState<string | null>(null);

  function decodeJwt(token: string) {
    if (!token || !token.includes(".")) {
      throw new Error("Invalid JWT token");
    }

    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error("Invalid JWT structure");
    }

    const base64Url = parts[1];

    const base64 = base64Url
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(base64Url.length + (4 - (base64Url.length % 4)) % 4, "=");

    return JSON.parse(atob(base64));
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("No token found");
      return;
    }

    try {
      const payload = decodeJwt(token);
      setRole(payload.role);
    } catch (err) {
      console.error("Invalid token:", err);
      localStorage.removeItem("token");
    }
  }, []);


  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-sm text-gray-400">Current role: {role}</p>

      {/* ADMIN */}
      {role === "admin" && (
        <section className="bg-[#0E1117] p-5 rounded-xl space-y-4">
          <h2 className="text-lg font-medium">Admin control</h2>

          <ul className="space-y-2 text-sm">
            <li>• Manage users & roles</li>
            <li>• View all banking processes</li>
            <li>• System configuration</li>
          </ul>

          <Link
            href="/admin"
            className="inline-block mt-2 px-4 py-2 bg-[#56FAA5] text-black rounded-lg text-sm"
          >
            Open admin panel
          </Link>
          <Link href="/" className="hover:underline">Home</Link>
        </section>
      )}

      {/* CASHIER */}
      {role === "cashier" && (
        <section className="bg-[#0E1117] p-5 rounded-xl space-y-4">
          <h2 className="text-lg font-medium">Cashier workspace</h2>

          <ul className="space-y-2 text-sm">
            <li>• Accept cash deposits</li>
            <li>• Withdraw funds</li>
            <li>• Process client payments</li>
          </ul>

          <Link
            href="/processes"
            className="inline-block px-4 py-2 bg-[#56FAA5] text-black rounded-lg text-sm"
          >
            Go to processes
          </Link>
          <Link href="/" className="hover:underline">Home</Link>
        </section>
      )}

      {/* OPERATOR */}
      {role === "operator" && (
        <section className="bg-[#0E1117] p-5 rounded-xl space-y-4">
          <h2 className="text-lg font-medium">Operator dashboard</h2>

          <ul className="space-y-2 text-sm">
            <li>• Review transactions</li>
            <li>• Approve / reject operations</li>
            <li>• Monitor system flow</li>
          </ul>

          <Link
            href="/processes"
            className="inline-block px-4 py-2 bg-[#56FAA5] text-black rounded-lg text-sm"
          >
            Review processes
          </Link>
          <Link href="/" className="hover:underline">Home</Link>
        </section>
      )}

      {/* CLIENT */}
      {role === "client" && (
        <section className="bg-[#0E1117] p-5 rounded-xl space-y-4">
          <h2 className="text-lg font-medium">Client area</h2>

          <ul className="space-y-2 text-sm">
            <li>• View account balance</li>
            <li>• Send transfers</li>
            <li>• Track transaction history</li>
          </ul>

          <Link
            href="/processes"
            className="inline-block px-4 py-2 bg-[#56FAA5] text-black rounded-lg text-sm"
          >
            Start operation
          </Link>
          <Link href="/" className="hover:underline">Home</Link>
        </section>
      )}
    </div>
  );
}
