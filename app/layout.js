'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';  // Import the usePathname hook
import '../styles/globals.css';  // Your global styles
import { ModalProvider } from './context/ModalContext';  // Modal context
import Modal from '../components/Modal';  // Modal component

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();  // Get the current path

  // Only apply grid for the intaglio page
  const isGridPage = pathname === '/intaglio';  // Only apply grid for /intaglio page, not /other

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sebastian Ferner's Portfolio</title>
      </head>
      <body className="min-h-screen bg-white font-light">
        <ModalProvider>
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white py-5 uppercase tracking-wider">
            <div className="flex justify-between items-center px-10">
              <div className="text-3xl font-regular">
                <a href="/" className="no-underline hover:text-gray-500 tracking-[6px]">
                  SEBASTIAN FERNER
                </a>
              </div>
              <div
                className="md:hidden cursor-pointer z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 h-0.5 bg-black mb-1" />
                <div className="w-6 h-0.5 bg-black mb-1" />
                <div className="w-6 h-0.5 bg-black" />
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex gap-6 text-lg">
                <a href="/intaglio" className="no-underline hover:text-gray-500 font-thin">Intaglio</a>
                <a href="/other" className="no-underline hover:text-gray-500 font-thin">Other</a>
                <a href="/bio" className="no-underline hover:text-gray-500 font-thin">Bio</a>
                <a href="/contact" className="no-underline hover:text-gray-500 font-thin">Contact</a>
              </nav>
            </div>
          </header>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center text-lg gap-6">
              <a href="/intaglio" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Intaglio</a>
              <a href="/other" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Other</a>
              <a href="/bio" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Bio</a>
              <a href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Contact</a>
            </div>
          )}

          {/* Main Content - Conditional Layout */}
          <main className={isGridPage ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center" : "flex flex-col justify-center items-center"}>
            {children} {/* This renders the page-specific content */}
          </main>

          {/* Footer */}
          <footer className="text-center py-4">
            <a
              href="https://www.instagram.com/ateljesebastianferner"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-gray-500"
            >
              Instagram
            </a>
          </footer>

          {/* Modal Component */}
          <Modal />
        </ModalProvider>
      </body>
    </html>
  );
}
