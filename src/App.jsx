import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import SolarBackground from "./components/SolarBackground.jsx";
import CosmicEffects from "./components/CosmicEffects.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";

// DAILY (existing file)
import Today from "./pages/zodiac/[sign]/Today.jsx";


// Other pages
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import BlogPost from "./pages/Blog/BlogPost.jsx";
import Premium from "./pages/Premium.jsx";
import Compatibility from "./pages/Compatibility.jsx";
import BirthChart from "./pages/BirthChart.jsx";
import BirthChartFull from "./pages/BirthChartFull.jsx";
import WeeklyDetail from './pages/horoscopes/WeeklyDetail.jsx'
import Weekly from './pages/horoscopes/Weekly.jsx'
import MonthlyDetail from './pages/horoscopes/MonthlyDetail.jsx'
import Monthly from './pages/horoscopes/Monthly.jsx'
import YearlyDetail from './pages/horoscopes/YearlyDetail.jsx'
import Yearly from './pages/horoscopes/Yearly.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <CosmicEffects />
      <SolarBackground />
      <Header />

      <main className="pt-[140px] relative z-10 text-white">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/zodiac/:sign/today" element={<Today />} />
          <Route path="/horoscopes/weekly" element={<Weekly />} />
          <Route path="/horoscopes/weekly/:sign" element={<WeeklyDetail />} />
          <Route path="/horoscopes/monthly" element={<Monthly />} />
          <Route path="/horoscopes/monthly/:sign" element={<MonthlyDetail />} />
          <Route path="/horoscopes/yearly" element={<Yearly />} />
          <Route path="/horoscopes/yearly/:sign" element={<YearlyDetail />} />

          {/* STATIC */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* BLOG */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* PREMIUM */}
          <Route path="/premium" element={<Premium />} />

          {/* CORE */}
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/birth-chart" element={<BirthChart />} />
          <Route path="/birth-chart/full" element={<BirthChartFull />} />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
