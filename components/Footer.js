export default function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-blue-600 mb-2">Cap Kapak Biru</h3>
          <p className="text-gray-600">
            Produsen bahan makanan berkualitas tinggi untuk industri dan rumah tangga.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Menu</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Beranda</li>
            <li>Produk</li>
            <li>Tentang Kami</li>
            <li>Kontak</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Kontak</h4>
          <p className="text-gray-600">
            PT Jamin Siswanto Abadi<br />
            Jakarta, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
