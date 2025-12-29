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
import BirthChartFull from "./components/BirthChart/BirthChartFull.jsx";

import WeeklyDetail from "./pages/Horoscopes/WeeklyDetail.jsx";
import Weekly from "./pages/Horoscopes/Weekly.jsx";
import MonthlyDetail from "./pages/Horoscopes/MonthlyDetail.jsx";
import Monthly from "./pages/Horoscopes/Monthly.jsx";
import YearlyDetail from "./pages/Horoscopes/YearlyDetail.jsx";
import Yearly from "./pages/Horoscopes/Yearly.jsx";

import Search from "./pages/Search.jsx";

/* 🔒 Policy pages */
import PrivacyPolicy from "./pages/Policy/PrivacyPolicy.jsx";
import TermsOfService from "./pages/Policy/TermsOfService.jsx";
import Disclaimer from "./pages/Policy/Disclaimer.jsx";
import RefundPolicy from "./pages/Policy/RefundPolicy.jsx";
import CookiePolicy from "./pages/Policy/CookiePolicy.jsx";

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

            {/* Core */}
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />

            {/* Zodiac / Daily */}
            <Route path="/zodiac/:sign/today" element={<Today />} />
            <Route path="/horoscopes/:sign" element={<Today />} />
            <Route path="/horoscopes/daily/:sign" element={<Today />} />

            {/* Weekly */}
            <Route path="/horoscopes/weekly" element={<Weekly />} />
            <Route path="/horoscopes/weekly/:sign" element={<WeeklyDetail />} />

            {/* Monthly */}
            <Route path="/horoscopes/monthly" element={<Monthly />} />
            <Route path="/horoscopes/monthly/:sign" element={<MonthlyDetail />} />

            {/* Yearly */}
            <Route path="/horoscopes/yearly" element={<Yearly />} />
            <Route path="/horoscopes/yearly/:sign" element={<YearlyDetail />} />

            {/* Pages */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            {/* Premium */}
            <Route path="/premium" element={<Premium />} />

            {/* Tools */}
            <Route path="/compatibility" element={<Compatibility />} />
            <Route path="/birth-chart" element={<BirthChart />} />
            <Route path="/birth-chart/full" element={<BirthChartFull />} />

            {/* 🔒 Policy */}
            <Route path="/Policy/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Policy/TermsOfService" element={<TermsOfService />} />
            <Route path="/Policy/Disclaimer" element={<Disclaimer />} />
            <Route path="/Policy/RefundPolicy" element={<RefundPolicy />} />
            <Route path="/Policy/CookiePolicy" element={<CookiePolicy />} />

            {/* Fallback */}
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
