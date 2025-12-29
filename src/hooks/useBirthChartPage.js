import { useEffect, useMemo, useState } from "react";
import { useAccess } from "./useAccess.js";

export default function useBirthChartPage() {
  const [chart, setChart] = useState(null);
  const { hasAccess } = useAccess();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onGenerate = (payload) => {
    setChart(payload);
  };

  const scope = useMemo(() => {
    if (!chart) return null;
    return "birth-chart";
  }, [chart]);

  const hasFullAccess = useMemo(() => {
    if (!scope) return false;
    return hasAccess("premiumBirthChart", scope);
  }, [hasAccess, scope]);

  return {
    chart,
    onGenerate,
    hasFullAccess
  };
}
