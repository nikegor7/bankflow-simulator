import './globals.css';
import { RoleProvider } from '../context/RoleContext';

export const dynamic = 'force-static';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RoleProvider>{children}</RoleProvider>
      </body>
    </html>
  );
}

