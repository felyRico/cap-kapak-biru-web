"use client";

const products = [
  {
    id: 1,
    name: "Perisa Makanan",
    desc: "Berbagai varian perisa berkualitas untuk industri makanan.",
    image: "/images/perisa.jpg",
  },
  {
    id: 2,
    name: "Creatine",
    desc: "Creatine murni untuk kebutuhan suplemen dan kesehatan.",
    image: "/images/creatine.jpg",
  },
  {
    id: 3,
    name: "Penyedap & Aroma",
    desc: "Penyedap rasa dan aroma untuk meningkatkan cita rasa.",
    image: "/images/penyedap.jpg",
  },
];

export default function ProductSlider() {
  return (
    <section id="produk" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Kategori Produk
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((item) => (
          <div
            key={item.id}
            className="rounded-xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-52 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {item.name}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
