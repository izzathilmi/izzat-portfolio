"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import still from "@/assets/desk.webp";

const VIDEO_SRC = "/media/desk-loop.mp4";
const POSITION = "object-cover object-[75%_center] lg:object-center";

/**
 * Still image first (instant, blurred placeholder), then the looping video fades in once it can play.
 * Reduced-motion visitors and Save-Data connections only get the still.
 */
export default function SceneVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    setUseVideo(!reduce && !saveData);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!useVideo || !v) return;
    v.play().catch(() => {
      /* autoplay refused (e.g. low-power mode): keep the still */
    });
  }, [useVideo]);

  return (
    <>
      <Image
        src={still}
        alt="Izzat at his desk at night, seen from behind, coding while Oyen the cat sleeps by the monitor and rain runs down the window"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className={POSITION}
      />
      {useVideo && (
        <video
          ref={ref}
          src={VIDEO_SRC}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-hidden
          onPlaying={() => setReady(true)}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${POSITION} ${ready ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </>
  );
}
