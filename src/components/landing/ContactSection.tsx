// src/components/landing/ContactSection.tsx
import Link from 'next/link';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-16 text-gray-900 font-display">Où Nous Trouver</h2>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-10 rounded-xl shadow-2xl text-left">
            <h3 className="text-3xl font-semibold mb-6 text-gray-900 font-heading">Informations & Réservations</h3>
            <p className="text-gray-800 text-xl mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m11.314 0A8.966 8.966 0 0122 12c0 7.732-7 14-10 14S2 19.732 2 12c0-3.374 1.48-6.402 3.896-8.583m6.104 14.077c.607.411 1.28.694 2 .813M12 11a1 1 0 100-2 1 1 0 000 2z"></path></svg>
              <span className="font-bold">Adresse :</span> 123 Rue de la Gastronomie, 75001 Paris
            </p>
            <p className="text-gray-800 text-xl mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span className="font-bold">Téléphone :</span> +33 1 23 45 67 89
            </p>
            <p className="text-gray-800 text-xl mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-3 0V4a2 2 0 00-2-2H8a2 2 0 00-2 2v4m0 0l-4 4 4 4m-4-4h16m0 0l4 4-4 4M21 8h-3a2 2 0 01-2-2"></path></svg>
              <span className="font-bold">Email :</span> contact@lacompagnie.com
            </p>
            <h3 className="text-3xl font-semibold mt-8 mb-4 text-gray-900 font-heading">Heures d'Ouverture</h3>
            <p className="text-gray-800 text-xl mb-2">
              <span className="font-bold">Mardi - Samedi :</span> 12h00 - 14h00 | 19h00 - 22h30
            </p>
            <p className="text-gray-800 text-xl">
              <span className="font-bold">Dimanche - Lundi :</span> Fermé
            </p>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-2xl text-center">
            <h3 className="text-3xl font-semibold mb-6 text-gray-900 font-heading">Réserver Votre Table</h3>
            <p className="text-gray-700 text-xl mb-8 leading-relaxed">
              Utilisez notre plateforme de réservation en ligne sécurisée pour garantir votre place, ou contactez-nous directement par téléphone.
            </p>
            <Link href="#" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              Réserver en ligne
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
