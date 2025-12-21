import { useEffect, useState } from "react";
import CustomSelect from "./CustomSelect.jsx";

export default function CompatibilityForm({
  onCalculate,
  initialSignA = "",
  initialSignB = ""
}) {
  const [signA, setSignA] = useState(initialSignA);
  const [signB, setSignB] = useState(initialSignB);

  useEffect(() => setSignA(initialSignA || ""), [initialSignA]);
  useEffect(() => setSignB(initialSignB || ""), [initialSignB]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signA || !signB) return;
    onCalculate(signA, signB); // slugs already
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto px-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <CustomSelect label="Your Sign" value={signA} onChange={setSignA} />
        <CustomSelect label="Partner's Sign" value={signB} onChange={setSignB} />
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          className="
            inline-flex items-center justify-center
            rounded-xl
            bg-yellow-300 text-black
            px-10 py-4
            font-semibold
            transition-all duration-300
            hover:brightness-110
            hover:shadow-[0_0_40px_rgba(250,204,21,0.35)]
          "
        >
          Check Compatibility
        </button>
      </div>
    </form>
  );
}
