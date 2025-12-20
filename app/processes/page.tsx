import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ProcessCard } from '../../components/ProcessCard';
import { processes } from '../../data/processes';
import { RoleSelector } from '../../components/RoleSelector';
import { ProtectedAction } from '../../components/ProtectedAction';

export default function ProcessesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8">
        <RoleSelector />

        {processes.map(proc => (
          <div key={proc.id} className="mb-4">
            <ProcessCard {...proc} />

            <ProtectedAction allowed={['operator', 'admin']}>
              <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">
                Перевести процесс в следующий статус
              </button>
            </ProtectedAction>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
