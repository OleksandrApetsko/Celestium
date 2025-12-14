// src/pages/BirthChartFull.jsx

import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import NatalWheel from '../components/BirthChart/NatalWheel.jsx'
import BlurPaywall from '../components/BirthChart/BlurPaywall.jsx'
import { birthChartFullData } from '../data/birthChartFullData.js'

export default function BirthChartFull() {
  const location = useLocation()
  const chart = location.state?.chart || null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const headerLine = chart
    ? `${chart.date} • ${chart.time} • ${chart.location}`
    : 'Extended report preview'

  return (
    <section className="min-h-screen pt-40 pb-32 px-6 text-white relative">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-white/60 text-sm">{headerLine}</p>

        <h1
          className="
            mt-6 text-5xl md:text-6xl font-light tracking-[0.22em]
            text-yellow-300 drop-shadow-[0_0_28px_rgba(255,215,0,0.45)]
          "
        >
          FULL NATAL REPORT
        </h1>

        <p className="text-white/70 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          A structured, premium-grade interpretation of your chart — identity layers,
          emotional architecture, relationship polarity and long-range timing cycles.
        </p>

        <p className="mt-4 text-yellow-300/90 text-xs tracking-[0.35em] uppercase">
          Precision-focused • Modern • Designed for alignment
        </p>
      </div>

      {/* TOP MODULE: CHART OVERVIEW */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-28">

        {/* LEFT — NATAL WHEEL */}
        <div
          className="
      p-10 rounded-3xl
      bg-black/40 border border-white/10
      backdrop-blur-xl
      flex flex-col justify-between
    "
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-6 text-center">
              Chart Structure
            </p>

            <div className="flex justify-center">
              <NatalWheel />
            </div>
          </div>

          <p className="mt-8 text-white/55 text-xs text-center max-w-sm mx-auto leading-relaxed">
            This wheel represents the structural geometry of your natal chart.
            Planetary placements, houses, aspects and timing cycles unlock in the full report.
          </p>
        </div>

        {/* RIGHT — CORE SUMMARY */}
        <div
          className="
      p-10 rounded-3xl
      bg-black/40 border border-white/10
      backdrop-blur-xl
      flex flex-col
    "
        >
          {/* HEADER */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-3">
              Core Chart Summary
            </p>

            <h2 className="text-3xl md:text-4xl text-white font-light leading-tight">
              Your Fundamental Astrology Blueprint
            </h2>
          </div>

          {/* CORE ITEMS */}
          <div className="space-y-8 flex-grow">
            {birthChartFullData.core.map((item, i) => (
              <div key={i} className="relative pl-6">

                {/* ACCENT LINE */}
                <span
                  className="
              absolute left-0 top-1
              w-[2px] h-full
              bg-gradient-to-b from-yellow-300/60 to-transparent
            "
                />

                <h3 className="text-lg md:text-xl text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* FOOTNOTE */}
          <p className="mt-10 text-white/50 text-xs leading-relaxed max-w-md">
            Advanced interpretation layers reveal emotional architecture,
            karmic themes, relationship polarity and long-term life cycles.
          </p>
        </div>

      </div>


      {/* PREMIUM DEEP CONTENT (blur wrapper mode) */}
      <BlurPaywall
        title="Extended Natal Interpretation — Premium"
        description="Unlock the full report: planetary placements, twelve houses, aspects, relationship polarity patterns and long-range cycles."
        to="/premium"
        ctaLabel="Unlock Premium"
      >
        <div className="max-w-5xl mx-auto space-y-16 p-10 md:p-14">
          {birthChartFullData.sections.map((block, i) => (
            <div key={i} className="space-y-5">
              <h2 className="text-3xl text-yellow-300">{block.title}</h2>
              <p className="text-white/85 leading-relaxed text-lg">{block.text}</p>

              {block.items?.length ? (
                <ul className="space-y-3 text-white/75 text-base">
                  {block.items.map((t, idx) => (
                    <li key={idx}>• {t}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </BlurPaywall>

      <div className="text-center mt-20">
        <Link
          to="/birth-chart"
          className="text-white/60 hover:text-yellow-300 transition tracking-wide"
        >
          ← Back to Birth Chart
        </Link>
      </div>
    </section>
  )
}
