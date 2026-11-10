"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const SRC = "/media/rain.mp3";
const TARGET_VOLUME = 0.5;
const FADE_MS = 800;

/** Fades the audio element's volume to `to`, then calls done. */
function fade(audio: HTMLAudioElement, to: number, done?: () => void) {
  const from = audio.volume;
  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / FADE_MS);
    audio.volume = from + (to - from) * t;
    if (t < 1) requestAnimationFrame(step);
    else done?.();
  };
  requestAnimationFrame(step);
}

/** Rain ambience, off by default (browsers block autoplaying sound). The file only downloads on first tap. */
export default function SoundToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => () => audioRef.current?.pause(), []);

  const toggle = () => {
    if (!audioRef.current) {
      const a = new Audio(SRC);
      a.loop = true;
      a.volume = 0;
      audioRef.current = a;
    }
    const audio = audioRef.current;
    if (on) {
      fade(audio, 0, () => audio.pause());
      setOn(false);
      return;
    }
    audio
      .play()
      .then(() => {
        fade(audio, TARGET_VOLUME);
        setOn(true);
      })
      .catch(() => {
        /* playback refused: stay off */
      });
  };

  const Icon = on ? Volume2 : VolumeX;
  return (
    <button type="button" onClick={toggle} aria-pressed={on} aria-label={on ? "Mute rain sound" : "Play rain sound"} className="hover:text-white">
      <Icon size={15} aria-hidden />
    </button>
  );
}
