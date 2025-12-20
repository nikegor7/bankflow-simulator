import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">BankFlow Simulator</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/processes" className="hover:underline">Processes</Link>
        <Link href="/roles" className="hover:underline">Roles</Link>
        <Link href="/systems" className="hover:underline">Systems</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
};
