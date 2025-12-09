import { useEffect, useRef } from "react";

export default function CosmicEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    resize();
    window.addEventListener("resize", resize);

    // STARS ONLY
    const stars = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.4,
      alpha: Math.random() * 0.5 + 0.2,
      delta: (Math.random() * 0.01 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
    }));

    // Sun Glow
    let pulse = 0;
    let pulseDir = 1;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      //
      // Stars
      //
      stars.forEach((star) => {
        star.alpha += star.delta;
        if (star.alpha < 0.1 || star.alpha > 0.8) star.delta *= -1;

        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });

      //
      // Sun Glow Pulse
      //
      pulse += pulseDir * 0.015;
      if (pulse > 1) pulseDir = -1;
      if (pulse < 0) pulseDir = 1;

      const sunGlow = ctx.createRadialGradient(
        width * 0.18,
        height * 0.42,
        0,
        width * 0.18,
        height * 0.42,
        width * (0.18 + pulse * 0.06)
      );

      sunGlow.addColorStop(0, "rgba(255,200,90,0.22)");
      sunGlow.addColorStop(0.5, "rgba(255,150,40,0.15)");
      sunGlow.addColorStop(1, "transparent");

      ctx.fillStyle = sunGlow;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(draw);
    }

    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
    />
  );
}
