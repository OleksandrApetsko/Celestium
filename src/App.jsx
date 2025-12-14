import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import SolarBackground from "./components/SolarBackground.jsx";
import CosmicEffects from "./components/CosmicEffects.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import ZodiacDetail from "./pages/zodiac/[sign].jsx";        // повна сторінка знаку (майбутня)
import TodayHoroscopePage from "./pages/zodiac/[sign]/today.jsx"; // 🔥 нова сторінка на день
import Contact from "./pages/Contact.jsx";
import About from './pages/About.jsx'
import BlogPost from './pages/Blog/BlogPost.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Premium from './pages/Premium.jsx'
import Compatibility from './pages/Compatibility.jsx'
import BirthChart from './pages/BirthChart.jsx'
import BirthChartFull from './pages/BirthChartFull.jsx'


export default function App() {
  return (
    <BrowserRouter>
      {/* GLOBAL BACKGROUND */}
      <CosmicEffects />
      <SolarBackground />

      {/* GLOBAL HEADER */}
      <Header />

      <main className="pt-[140px] relative z-10 text-white">
        <Routes>

          {/* HOME PAGE */}
          <Route path="/" element={<Home />} />

          {/* DAILY PAGE — ТЕПЕР ПРАЦЮЄ */}
          <Route path="/zodiac/:sign/today" element={<TodayHoroscopePage />} />

          {/* FULL ASTRO PROFILE PAGE (не використовується, але готове для майбутнього) */}
          <Route path="/zodiac/:sign" element={<ZodiacDetail />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/birth-chart" element={<BirthChart />} />
          <Route path="/birth-chart/full" element={<BirthChartFull />} />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}