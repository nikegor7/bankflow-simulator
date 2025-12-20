import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 space-y-6">
        <h1 className="text-3xl font-bold">BankFlow Simulator</h1>
        <p>Учебная платформа моделирования банковских процессов.</p>
        <div className="flex space-x-4">
          <Link href="/processes" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Processes</Link>
          <Link href="/roles" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Roles</Link>
          <Link href="/systems" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Systems</Link>
          <Link href="/about" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">About</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
