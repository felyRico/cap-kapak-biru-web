"use client";

export default function WhatsAppButton() {
  const phoneNumber = "6287888881168"; // GANTI dengan nomor WA kamu
  const message =
    "Halo%20Cap%20Kapak%20Biru,%20saya%20tertarik%20dengan%20produk%20Anda.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      aria-label="Chat WhatsApp"
    >
      {/* ICON WA */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M19.11 17.41c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.64 1.12 2.82c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.27.23-.61.23-1.14.16-1.25-.07-.11-.25-.18-.52-.32z" />
        <path d="M16 3C9.38 3 4 8.38 4 15c0 2.65.87 5.1 2.35 7.07L4 29l7.18-2.28A11.94 11.94 0 0 0 16 27c6.62 0 12-5.38 12-12S22.62 3 16 3zm0 21.8c-2.03 0-4.02-.55-5.75-1.59l-.41-.24-4.26 1.35 1.39-4.15-.27-.43A9.77 9.77 0 1 1 16 24.8z" />
      </svg>
    </a>
  );
}
