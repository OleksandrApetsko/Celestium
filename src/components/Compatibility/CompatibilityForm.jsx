// src/components/Compatibility/CompatibilityForm.jsx

import { useState } from "react";
import CustomSelect from "./CustomSelect.jsx";

export default function CompatibilityForm({ onCalculate }) {
  const [sign1, setSign1] = useState("");
  const [sign2, setSign2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sign1 || !sign2) return;
    onCalculate(sign1, sign2);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <CustomSelect label="Your Sign" value={sign1} onChange={setSign1} />

      <CustomSelect
        label="Partner's Sign"
        value={sign2}
        onChange={setSign2}
      />

      <button
        type="submit"
        className="
          w-full py-3 rounded-full text-black text-lg font-semibold
          bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400
          shadow-[0_0_18px_rgba(250,204,21,0.5)]
          hover:shadow-[0_0_28px_rgba(250,204,21,0.8)]
          transition-all
        "
      >
        Check Compatibility
      </button>
    </form>
  );
}
