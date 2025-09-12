// App.jsx

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dasboard from "./pages/Dasboard";
import Konsumen from "./pages/konsumen";

/**
 * Wrapper component untuk App
 * Kita gunakan hook useLocation agar bisa cek path saat ini
 */
function AppWrapper() {
  const location = useLocation(); // Mengambil path URL saat ini

  // Tentukan halaman yang tidak ingin menampilkan Navbar & Footer
  // Sekarang kita tidak tampilkan untuk /admin dan /konsumen
  const hideNavbarFooter = location.pathname === "/admin" || location.pathname === "/konsumen";

  return (
    <div className="flex flex-col min-h-screen">
      {/* 
        Tampilkan Navbar hanya jika bukan halaman yang disembunyikan 
        Artinya, Navbar tidak akan muncul di /admin dan /konsumen
      */}
      {!hideNavbarFooter && <Navbar />}

      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Halaman admin */}
          <Route path="/admin" element={<Dasboard />} />

          {/* Halaman konsumen */}
          <Route path="/konsumen" element={<Konsumen />} /> 
        </Routes>
      </main>

      {/* 
        Tampilkan Footer hanya jika bukan halaman yang disembunyikan 
        Artinya, Footer tidak akan muncul di /admin dan /konsumen
      */}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

/**
 * BrowserRouter hanya perlu di root component
 */
function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
