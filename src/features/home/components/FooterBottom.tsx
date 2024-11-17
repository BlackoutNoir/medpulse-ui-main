'use client';

import * as React from 'react';
import Link from 'next/link';

export default function FooterBottom() {
  const legalLinks = [
    { title: 'Terms and Conditions', href: '#' },
    { title: 'Privacy Policy', href: '#' },
    { title: 'Notice of Privacy Practices', href: '#' },
    { title: 'Notice of Nondiscrimination', href: '#' },
    { title: 'Accessibility Statement', href: '#' },
    { title: 'Advertising and Sponsorship Policy', href: '#' },
    { title: 'Site Map', href: '#' },
  ];

  return (
    <div className="bg-blue-100 text-black py-8 px-6 lg:px-20">
      {/* Legal Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 lg:gap-6 text-left lg:text-center">
        {legalLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm hover:text-blue-800 hover:underline"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-500 pt-4 mt-12">
        <p className="text-xs text-gray-500 text-center sm:text-left">
          © 2024 MedPulse Clinic. All rights reserved.
        </p>
        <div className="mt-2 sm:mt-0 flex items-center gap-4">
          <span className="text-xs">Language:</span>
          <select
            className="bg-black text-blue-100 border rounded px-2 py-1 text-xs hover:bg-slate-800 focus:outline-none"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>
    </div>
  );
}
