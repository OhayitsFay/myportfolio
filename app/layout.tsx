import './globals.css';
import { Inter } from 'next/font/google';
import SideNav from '@/app/ui/SideNav';
import Footer from '@/app/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Favourite Atuhu | Portfolio',
  description: 'Portfolio showcasing my software development projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-black-800 flex min-h-screen`}>
        <SideNav />
        <main className="flex-1 p-8 overflow-y-auto w-full ml-64">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}