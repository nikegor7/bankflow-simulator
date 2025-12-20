'use client';

import { useRole } from '../context/RoleContext';

export const RoleSelector = () => {
  const { role, setRole } = useRole();

  return (
    <div className="border p-4 rounded mb-6">
      <p className="font-semibold mb-2">Выбор роли (имитация логина)</p>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as any)}
        className="border p-2 rounded"
      >
        <option value="guest">Гость</option>
        <option value="cashier">Кассир</option>
        <option value="operator">Оператор</option>
        <option value="admin">Администратор</option>
      </select>
    </div>
  );
};
