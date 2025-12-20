import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 space-y-6">
        <h1 className="text-2xl font-bold">About BankFlow Simulator</h1>
        <p>Учебная платформа моделирования банковских процессов.</p>
        <p>Стек технологий: React, Next.js, Tailwind CSS, Cloudflare Pages.</p>
        <p>Это полностью учебный проект — без реальных данных.</p>
      </main>
      <Footer />
    </div>
  );
}
