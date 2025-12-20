import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { RoleCard } from '../../components/RoleCard';
import { roles } from '../../data/roles';

export default function RolesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {roles.map(role => (
          <RoleCard key={role.id} name={role.name} permissions={role.permissions} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
