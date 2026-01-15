"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-lg
        bg-white/60
        border-b border-white/40
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Cap Kapak Biru"
            width={40}
            height={40}
            priority
          />
          <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Cap Kapak Biru
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-slate-800">
          <li className="hover:text-blue-600 transition cursor-pointer">
            Beranda
          </li>
          <li className="hover:text-blue-600 transition cursor-pointer">
            Produk
          </li>
          <li className="hover:text-blue-600 transition cursor-pointer">
            Tentang Kami
          </li>
          <li className="hover:text-blue-600 transition cursor-pointer">
            Kontak
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-[2px] w-6 bg-slate-900 transition ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-slate-900 transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-slate-900 transition ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur-xl border-t border-white/40">
          <ul className="flex flex-col text-center gap-6 py-8 font-medium text-slate-800">
            <li onClick={() => setOpen(false)}>Beranda</li>
            <li onClick={() => setOpen(false)}>Produk</li>
            <li onClick={() => setOpen(false)}>Tentang Kami</li>
            <li onClick={() => setOpen(false)}>Kontak</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
