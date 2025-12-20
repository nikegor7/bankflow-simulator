interface RoleCardProps {
  name: string;
  permissions: string[];
}

export const RoleCard = ({ name, permissions }: RoleCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="font-bold text-lg">{name}</h2>
      <ul className="list-disc ml-5 text-gray-700 mt-2">
        {permissions.map((perm, idx) => (
          <li key={idx}>{perm}</li>
        ))}
      </ul>
    </div>
  );
};
