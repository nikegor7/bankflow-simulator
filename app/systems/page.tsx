import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function SystemsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 space-y-6">
        <h1 className="text-2xl font-bold">Banking Systems</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded shadow">
            <h2 className="font-bold">Frontend</h2>
            <p>React + Next.js + Tailwind CSS</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h2 className="font-bold">Backend</h2>
            <p>Имитация процессов через mock-данные</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h2 className="font-bold">Cloud</h2>
            <p>Cloudflare Pages, статический deploy</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
