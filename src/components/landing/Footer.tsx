// src/components/landing/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg mb-6">&copy; {new Date().getFullYear()} La Compagnie. Tous droits réservés.</p>
        <div className="flex justify-center space-x-8 mt-4">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Image src="/images/facebook-icon.svg" alt="Facebook" width={30} height={30} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Image src="/images/instagram-icon.svg" alt="Instagram" width={30} height={30} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Image src="/images/twitter-icon.svg" alt="Twitter" width={30} height={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
