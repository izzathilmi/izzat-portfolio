"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const hide = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <>
      {/* Spotlight glow blob */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: visible
            ? `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(118,185,0,0.08), transparent 70%)`
            : "transparent",
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Custom cursor dot */}
      <motion.div
        className="fixed z-50 pointer-events-none"
        animate={{ x: position.x - 6, y: position.y - 6, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#76b900",
          boxShadow: "0 0 10px #76b900, 0 0 20px rgba(118,185,0,0.5)",
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed z-50 pointer-events-none border border-[#76b900] rounded-full"
        animate={{ x: position.x - 20, y: position.y - 20, opacity: visible ? 0.6 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        style={{ width: 40, height: 40 }}
      />
    </>
  );
}
