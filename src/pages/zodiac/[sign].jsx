import { useParams } from "react-router-dom";
import { useState } from "react";

// DATA
import { zodiacData } from "../../data/zodiacData.js";
import { zodiacIcons } from "../../components/DailyHoroscope/zodiacIcons.jsx";

// ZODIAC PAGE COMPONENTS
import {
  ZodiacHeader,
  ZodiacTabs,
  HoroscopeDaily,
  HoroscopePremiumLocked,
  PremiumCTA
} from "../../components/Zodiac";

// EXISTING GLOBAL COMPATIBILITY COMPONENTS
import CompatibilityForm from "../../components/Compatibility/CompatibilityForm.jsx";
import CompatibilityResult from "../../components/Compatibility/CompatibilityResult.jsx";

export default function ZodiacDetail() {

  const { sign } = useParams();
  const zodiac = zodiacData.find(z => z.sign === sign?.toLowerCase());
  const [tab, setTab] = useState("daily");

  // compatibility local state
  const [sign2, setSign2] = useState("");

  if (!zodiac) return (
    <div className="text-center text-red-400 py-32 text-2xl">Zodiac Not Found</div>
  );

  const Icon = zodiacIcons[zodiac.sign];

  const handleSelect = (s) => {
    setSign2(s);
  };

  return (
    <section className="relative z-10 px-6 py-24 max-w-6xl mx-auto">

      {/* MAIN SIGN HEADER */}
      <ZodiacHeader zodiac={zodiac} icon={Icon} />

      {/* TABS for DAILY/WEEKLY/MONTHLY/YEARLY */}
      <ZodiacTabs tab={tab} setTab={setTab} />

      {/* SWITCH CONTENT by TAB */}
      <div className="mt-14">
        {tab === "daily"   && <HoroscopeDaily />}
        {tab === "weekly"  && <HoroscopePremiumLocked text="Weekly Horoscope — Premium Access" />}
        {tab === "monthly" && <HoroscopePremiumLocked text="Monthly Forecast — Premium Upgrade Required" />}
        {tab === "yearly"  && <HoroscopePremiumLocked text="Yearly Destiny Overview — Premium Only" />}
      </div>

      {/* PREMIUM CALL TO ACTION */}
      <PremiumCTA />


      {/* -------------------------------------------------------------------
            MINI COMPATIBILITY inside each sign page
         ------------------------------------------------------------------- */}
      <div className="mt-28">
        <h2 className="text-white text-3xl text-center font-semibold">Sign Compatibility</h2>
        <p className="text-white/60 text-center mt-3 max-w-xl mx-auto text-sm">
          Compare {zodiac.name} with another zodiac sign and check relationship energy.
        </p>

        {/* FORM, BUT FIRST SIGN PRE-SELECTED */}
        <div className="mt-10">
          <CompatibilityForm preSelected={zodiac.sign} onCalculate={(s1, s2) => handleSelect(s2)} />
        </div>

        {/* SHOW RESULT ONLY IF SELECTED */}
        <div className="mt-8">
          {sign2 && <CompatibilityResult sign1={zodiac.sign} sign2={sign2} />}
        </div>
      </div>

    </section>
  );
}
