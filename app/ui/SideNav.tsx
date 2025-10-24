'use client';
import NavLink from './NavLink';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function SideNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
    {/* Mobile Nav Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-[#b05b74] text-white rounded-md"
        >
          <FaBars size={20} />
        </button>
      </div>

    <aside className="w-59 bg-[#5a1017] shadow-lg h-screen fixed left-0 top-0 flex flex-col justify-between p-6">
      <div>
        <h2 className="text-2xl font-bold text-[#fffff1] mb-10">FAYCLOUD DEV</h2>
        <nav className="space-y-2 flex flex-col text-center md:text-left">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/contact" label="Contact" />
        </nav>
      </div>

      <div className="text-lg text-gray-900">
        © {new Date().getFullYear()} Favourite Atuhu
      </div>
    </aside>
    </>
  );
}