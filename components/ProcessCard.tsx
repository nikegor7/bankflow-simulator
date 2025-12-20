import { StatusBadge } from './StatusBadge';

interface ProcessCardProps {
  name: string;
  steps: string[];
  status: 'Pending' | 'InProgress' | 'Completed';
}

export const ProcessCard = ({ name, steps, status }: ProcessCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-lg">{name}</h2>
        <StatusBadge status={status} />
      </div>

      <ul className="list-disc ml-5 text-gray-700">
        {steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

