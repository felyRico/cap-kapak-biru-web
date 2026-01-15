"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CTA() {
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.from(ctaRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="py-20 px-6">
      <div
        ref={ctaRef}
        className="max-w-5xl mx-auto bg-blue-600 text-white rounded-2xl p-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Tertarik dengan Produk Kami?
        </h2>
        <p className="mb-8">
          Hubungi kami sekarang untuk penawaran terbaik
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">
          Hubungi Kami →
        </button>
      </div>
    </section>
  );
}
