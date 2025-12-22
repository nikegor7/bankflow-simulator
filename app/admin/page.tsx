"use client";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AdminPage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${API_URL}/admin/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(setUsers);
  }, []);

  async function changeRole(id: number, role: string) {
    const token = localStorage.getItem("token");
    await fetch(`${API_URL}/admin/users/${id}/role`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    });
    location.reload();
  }

  return (
<div className="p-6">
  <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200 shadow rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4 border-b">Email</th>
          <th className="py-2 px-4 border-b">Role</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id} className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b text-black">{u.email}</td>
            <td className="py-2 px-4 border-b text-black">{u.role}</td>
            <td className="py-2 px-4 border-b space-x-2">
              <button
                onClick={() => changeRole(u.id, "admin")}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Admin
              </button>
              <button
                onClick={() => changeRole(u.id, "operator")}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Operator
              </button>
              <button
                onClick={() => changeRole(u.id, "cashier")}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Cashier
              </button>
              <button
                onClick={() => changeRole(u.id, "client")}
                className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
              >
                Client
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}
