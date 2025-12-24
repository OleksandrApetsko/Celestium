import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import SolarBackground from "./components/Background/SolarBackground.jsx";
import CosmicEffects from "./components/Background/CosmicEffects.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BackToTopButton from "./components/UI/BackToTopButton.jsx";

import Home from "./pages/Home.jsx";
import Today from "./pages/zodiac/[sign]/Today.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import BlogPost from "./pages/Blog/BlogPost.jsx";
import Premium from "./pages/Premium.jsx";
import Compatibility from "./pages/Compatibility.jsx";
import BirthChart from "./pages/BirthChart.jsx";
import BirthChartFull from "./pages/BirthChartFull.jsx";

import WeeklyDetail from "./pages/horoscopes/WeeklyDetail.jsx";
import Weekly from "./pages/horoscopes/Weekly.jsx";
import MonthlyDetail from "./pages/horoscopes/MonthlyDetail.jsx";
import Monthly from "./pages/horoscopes/Monthly.jsx";
import YearlyDetail from "./pages/horoscopes/YearlyDetail.jsx";
import Yearly from "./pages/horoscopes/Yearly.jsx";

import Search from "./pages/Search.jsx";
import { DevAccessProvider } from "./context/DevAccessContext.jsx";
import DevAccessToggle from "./components/Dev/DevAccessToggle.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <DevAccessProvider>

        <CosmicEffects />
        <SolarBackground />

        <Header />

        <main className="pt-[140px] relative z-10 text-white">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />

            <Route path="/zodiac/:sign/today" element={<Today />} />
            <Route path="/horoscopes/:sign" element={<Today />} />
            <Route path="/horoscopes/daily/:sign" element={<Today />} />

            <Route path="/horoscopes/weekly" element={<Weekly />} />
            <Route path="/horoscopes/weekly/:sign" element={<WeeklyDetail />} />

            <Route path="/horoscopes/monthly" element={<Monthly />} />
            <Route path="/horoscopes/monthly/:sign" element={<MonthlyDetail />} />

            <Route path="/horoscopes/yearly" element={<Yearly />} />
            <Route path="/horoscopes/yearly/:sign" element={<YearlyDetail />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            <Route path="/premium" element={<Premium />} />

            <Route path="/compatibility" element={<Compatibility />} />
            <Route path="/birth-chart" element={<BirthChart />} />
            <Route path="/birth-chart/full" element={<BirthChartFull />} />

            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </main>

        <Footer />

        {/* ⬇️ ОДИН РАЗ. НА ВЕСЬ САЙТ */}
        <BackToTopButton />

        <DevAccessToggle />

      </DevAccessProvider>
    </BrowserRouter>
  );
}
