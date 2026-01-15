"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      className="
        relative overflow-hidden text-center
        py-32 px-6
        bg-gradient-to-br
        from-blue-50 via-indigo-50 to-emerald-50
      "
    >
      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900">
          Bahan Makanan
          <span className="block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Berkualitas Tinggi
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-600 mt-6 text-lg">
          Cap Kapak Biru menghadirkan produk berkualitas untuk industri makanan
          dan minuman. Dipercaya sejak puluhan tahun.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          {/* BUTTON KE PRODUK */}
          <a href="#produk" className="btn-primary">
            Lihat Produk →
          </a>

          <button className="btn-outline bg-white/70 backdrop-blur">
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}
