"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 60;
const DELETE_MS = 30;
const HOLD_MS = 2200;

/** Types each line, holds, deletes, moves to the next. Shows the first line statically for reduced motion. */
export default function Typewriter({ lines }: { lines: string[] }) {
  const [text, setText] = useState(lines[0] ?? "");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      setAnimate(true);
      setText("");
    }
  }, []);

  useEffect(() => {
    if (!animate) return;
    const current = lines[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < current.length) t = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_MS);
    else if (!deleting) t = setTimeout(() => setDeleting(true), HOLD_MS);
    else if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), DELETE_MS);
    else {
      setDeleting(false);
      setIdx((i) => (i + 1) % lines.length);
    }
    return () => clearTimeout(t);
  }, [animate, text, deleting, idx, lines]);

  return (
    <span>
      {text}
      <span className="cursor-blink ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[2px] bg-current" />
    </span>
  );
}
