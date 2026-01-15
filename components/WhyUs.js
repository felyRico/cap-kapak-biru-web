"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WhyUs() {
  const boxRef = useRef([]);

  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: boxRef.current[0],
        start: "top 80%",
      },
    });
  }, []);

  const items = [
    {
      title: "Kualitas Terjamin",
      desc: "Diproduksi dengan standar tinggi dan terdaftar resmi.",
    },
    {
      title: "Berpengalaman",
      desc: "Puluhan tahun di industri bahan makanan Indonesia.",
    },
    {
      title: "Bahan Berkualitas",
      desc: "Menggunakan bahan pilihan terbaik.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        Mengapa Memilih Kami?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => (boxRef.current[i] = el)}
            className="bg-white p-8 rounded-xl text-center shadow-sm"
          >
            <h3 className="font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
