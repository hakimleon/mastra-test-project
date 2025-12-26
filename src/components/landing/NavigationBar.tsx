// src/components/landing/NavigationBar.tsx
import Link from 'next/link';

export function NavigationBar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/landing" className="text-3xl font-extrabold text-gray-900 tracking-wider">
          La Compagnie
        </Link>
        <div className="space-x-8 hidden md:flex">
          <Link href="#home" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium">Accueil</Link>
          <Link href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium">Menu</Link>
          <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium">À Propos</Link>
          <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 text-lg font-medium">Contact</Link>
        </div>
        {/* Mobile menu icon - can be implemented with state for a toggle */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
