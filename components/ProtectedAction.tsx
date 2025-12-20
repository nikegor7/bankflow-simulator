'use client';

import { useRole } from '../context/RoleContext';

export const ProtectedAction = ({
  allowed,
  children,
}: {
  allowed: string[];
  children: React.ReactNode;
}) => {
  const { role } = useRole();

  if (!allowed.includes(role)) {
    return (
      <div className="text-red-500 text-sm">
        ❌ Недостаточно прав для выполнения действия
      </div>
    );
  }

  return <>{children}</>;
};
