// App.jsx

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dasboard from "./pages/Dasboard";

/**
 * Wrapper component untuk App
 * Kita gunakan hook useLocation agar bisa cek path saat ini
 */
function AppWrapper() {
  const location = useLocation(); // Dapatkan path saat ini

  // Cek apakah path saat ini adalah "/Admin"
  // Jika ya, maka Navbar dan Footer tidak ditampilkan
  const isAdminRoute = location.pathname === "/admin";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Tampilkan Navbar hanya jika bukan halaman /Admin */}
      {!isAdminRoute && <Navbar />}

      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Admin" element={<Dasboard />} />
        </Routes>
      </main>

      {/* Tampilkan Footer hanya jika bukan halaman /Admin */}
      {!isAdminRoute && <Footer />}
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
