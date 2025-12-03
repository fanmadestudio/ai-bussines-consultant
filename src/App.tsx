import { useState } from "react";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 antialiased">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-blue-600">
                AI Consultant
              </h1>
              {/* small tagline - hidden on very small screens */}
              <span className="hidden sm:inline text-sm text-gray-500">
                AI for smarter business
              </span>
            </div>

            {/* desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-sm font-medium hover:text-blue-600"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium hover:text-blue-600"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-blue-600"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-blue-600"
              >
                Contact
              </a>
              <a
                href="#pricing"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow"
              >
                Get Started
              </a>
            </div>

            {/* mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-label="Toggle menu"
                className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu panel */}
        <div
          className={`md:hidden ${
            mobileOpen ? "block" : "hidden"
          } border-t bg-white/95`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block text-center w-full px-4 py-2 bg-blue-600 text-white rounded-md font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* spacer for fixed nav */}
      <div className="h-16 md:h-20"></div>

      {/* ================= HERO SECTION ================= */}
      <header className="relative overflow-hidden">
        <section className="min-h-[70vh] md:min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
          {/* background shapes (non-interactive) */}
          <div className="pointer-events-none absolute -left-32 -top-10 w-56 h-56 bg-blue-300 rounded-full blur-3xl opacity-30 hidden sm:block"></div>
          <div className="pointer-events-none absolute -right-28 bottom-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-25 hidden md:block"></div>

          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* text */}
              <div className="order-2 md:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
                  Tingkatkan Bisnis Anda Dengan{" "}
                  <span className="text-blue-600">AI Consultant</span>
                </h1>

                <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl">
                  Platform <strong>AI cerdas</strong> yang menganalisis data,
                  memprediksi tren, dan memberikan{" "}
                  <em>rekomendasi strategi otomatis</em>. Cocok untuk UMKM
                  sampai enterprise.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-3">
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
                  >
                    Mulai Sekarang
                  </a>
                  <a
                    href="#features"
                    className="text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    Lihat Fitur &rarr;
                  </a>
                </div>
              </div>

              {/* image */}
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <img
                  src="https://res.cloudinary.com/dhehjdwwm/image/upload/v1764729021/Virtual_Assistant_mga3nv.jpg"
                  alt="Human working"
                  className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Fitur Utama <span className="text-blue-600">AI Consultant</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Fitur lengkap untuk analisis, rekomendasi dan pemantauan performa
              bisnis berbasis data.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Analisis Real-time"
              desc="Laporan & insight otomatis waktu nyata."
            />
            <FeatureCard
              title="Prediksi Tren"
              desc="Model ML untuk memprediksi pasar."
            />
            <FeatureCard
              title="Dashboard Interaktif"
              desc="Visualisasi KPI yang mudah dipahami."
            />
            <FeatureCard
              title="Rekomendasi Otomatis"
              desc="Saran strategi berbasis data."
            />
          </div>
        </div>
      </section>

      {/* ================= COMPARISON TABLE ================= */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">
            Perbandingan Tanpa AI vs Dengan AI
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">Aspek</th>
                  <th className="px-4 py-3 text-left text-sm">Tanpa AI</th>
                  <th className="px-4 py-3 text-left text-sm">Dengan AI</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t">
                  <td className="px-4 py-3 text-sm">Analisis Data</td>
                  <td className="px-4 py-3 text-sm">Manual & lambat</td>
                  <td className="px-4 py-3 text-sm">Otomatis & akurat</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-4 py-3 text-sm">Pengambilan Keputusan</td>
                  <td className="px-4 py-3 text-sm">Berdasarkan feeling</td>
                  <td className="px-4 py-3 text-sm">Insight berbasis data</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 text-sm">Produktivitas</td>
                  <td className="px-4 py-3 text-sm">Terbatas</td>
                  <td className="px-4 py-3 text-sm">Lebih tinggi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Pilih Paket
          </h3>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Monthly billing. Scale when you're ready.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard
              name="Basic"
              price="Rp 149.000"
              per="/bln"
              features={[
                "Analisis dasar",
                "Laporan bulanan",
                "5 rekomendasi / bulan",
              ]}
            />
            <PricingCard
              popular
              name="Pro"
              price="Rp 349.000"
              per="/bln"
              features={[
                "Semua Basic",
                "Prediksi pasar AI",
                "Dashboard interaktif",
                "20 rekomendasi / bulan",
              ]}
            />
            <PricingCard
              name="Enterprise"
              price="Rp 999.000"
              per="/bln"
              features={[
                "Semua Pro",
                "Unlimited rekomendasi",
                "Integrasi API",
                "Konsultasi khusus",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Apa Kata Pengguna
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Testimoni asli dari pengguna kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial
              quote="AI Consultant mendorong bisnis kami berkembang lebih cepat."
              name="Andi — CEO Startup"
            />
            <Testimonial
              quote="Prediksinya akurat dan membantu strategi pemasaran kami."
              name="Budi — Marketing Manager"
            />
            <Testimonial
              quote="Dashboard sangat mudah dipahami dan super interaktif!"
              name="Siti — Business Analyst"
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="contact" className="bg-gray-900 text-gray-300 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-xl font-extrabold">AI Consultant</h4>
            <p className="mt-2 text-sm text-gray-400">
              Solusi AI modern untuk analisis bisnis & rekomendasi strategi.
            </p>
          </div>

          <div>
            <h5 className="text-white font-bold mb-2">Navigation</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-2">Support</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-2">Follow</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © 2025 AI Business Consultant. All Rights Reserved.
        </div>
      </footer>

      {/* ================= Reusable Components ================= */}
      {/* FeatureCard */}
      {/* Simple card responsive for the features grid */}
      {/* Note: Keeping components inline to match single-file request */}
      <style>{`
        /* lightweight animations */
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px);} to { opacity: 1; transform: translateY(0);} }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .animate-fadeInUp { animation: fadeInUp 0.9s ease-out forwards; opacity: 0; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  );
}

/* ---------- Inline components below (kept in same file) ---------- */

function FeatureCard({ title, desc }) {
  return (
    <div className="p-5 border rounded-lg shadow-sm hover:shadow-md transition hover:translate-y-[-4px] bg-white">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function PricingCard({ name, price, per, features = [], popular = false }) {
  return (
    <div
      className={`relative p-6 rounded-2xl shadow-md border ${
        popular
          ? "bg-blue-600 text-white scale-105 border-blue-300"
          : "bg-white text-gray-800"
      } transition-transform hover:scale-[1.02]`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-400 text-black rounded-full text-xs font-semibold shadow">
          MOST POPULAR
        </span>
      )}
      <div className="text-lg font-bold">{name}</div>
      <div className="mt-4 text-3xl font-extrabold">
        {price} <span className="text-sm font-medium">{per}</span>
      </div>

      <ul className="mt-6 space-y-2 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <svg
              className={`h-5 w-5 ${
                popular ? "text-blue-100" : "text-blue-600"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className={`${popular ? "text-blue-100" : ""}`}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <button
          className={`${
            popular
              ? "bg-white text-blue-700 hover:bg-gray-100"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } w-full py-2 rounded-md font-semibold transition`}
        >
          {popular ? "Pilih Pro" : `Pilih ${name}`}
        </button>
      </div>
    </div>
  );
}

function Testimonial({ quote, name }) {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
      <p className="text-gray-600 mb-4 text-sm">{quote}</p>
      <div className="font-semibold text-sm">{name}</div>
    </div>
  );
}
