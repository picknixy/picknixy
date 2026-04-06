import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#1d1d1f]">
      <Header />
      <main className="flex-grow pt-[48px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
