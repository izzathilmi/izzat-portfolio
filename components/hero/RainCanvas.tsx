"use client";

import { useEffect, useRef } from "react";

const DROP_DENSITY = 0.00012; // drops per px² of canvas
const MAX_DROPS = 260;

type Drop = { x: number; y: number; len: number; speed: number; alpha: number };

function makeDrop(w: number, h: number, randomY: boolean): Drop {
  return {
    x: Math.random() * w,
    y: randomY ? Math.random() * h : -20,
    len: 8 + Math.random() * 14,
    speed: 5 + Math.random() * 7,
    alpha: 0.08 + Math.random() * 0.22,
  };
}

/** Light rain streaks over the scene. Paused when off-screen or tab hidden; skipped for reduced motion. */
export default function RainCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let drops: Drop[] = [];
    let raf = 0;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(MAX_DROPS, Math.round(w * h * DROP_DENSITY));
      drops = Array.from({ length: count }, () => makeDrop(w, h, true));
    };

    const tick = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      drops = drops.map((d) => {
        ctx.strokeStyle = `rgba(170, 210, 230, ${d.alpha})`;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - d.len * 0.12, d.y + d.len);
        ctx.stroke();
        const next = { ...d, y: d.y + d.speed, x: d.x - d.speed * 0.12 };
        return next.y > h ? makeDrop(w, h, false) : next;
      });
      if (visible) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !document.hidden;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(tick);
    });
    const onVisibility = () => {
      visible = !document.hidden;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(tick);
    };

    resize();
    io.observe(canvas);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
