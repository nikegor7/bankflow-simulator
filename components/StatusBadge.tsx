interface Props {
  status: 'Pending' | 'InProgress' | 'Completed';
}

export const StatusBadge = ({ status }: Props) => {
  const colors = {
    Pending: 'bg-yellow-200 text-yellow-800',
    InProgress: 'bg-blue-200 text-blue-800',
    Completed: 'bg-green-200 text-green-800',
  };

  return (
    <span className={`px-2 py-1 rounded text-sm ${colors[status]}`}>
      {status}
    </span>
  );
};
