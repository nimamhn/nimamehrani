"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contacts = [
  { icon: "bi-telephone", label: "09377798775", href: "tel:+989377798775" },
  { icon: "bi-envelope", label: "nimaxmehrani@gmail.com", href: "mailto:nimaxmehrani@gmail.com" },
  { icon: "bi-telegram", label: "@nima4mehrani", href: "https://t.me/nima4mehrani" },
];

export default function QuickContact() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (e) => { if (!e.target.closest("#quick-contact")) setOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div id="quick-contact" style={{ position: "fixed", bottom: 24, left: 24, zIndex: 9999, direction: "ltr" }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "absolute", bottom: 68, left: 0,
              width: 260, background: "var(--bg-2, #152238)",
              border: "1px solid var(--border, rgba(255,255,255,0.08))",
              borderRadius: 16, padding: 16,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              fontFamily: "var(--font, Vazirmatn, system-ui, sans-serif)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <strong style={{ color: "var(--text, #e8edf5)", fontSize: 14 }}>Quick Contact</strong>
            </div>
            {contacts.map((c) => (
              <a key={c.href} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener" : undefined}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 12px", borderRadius: 10,
                  background: "rgba(108,92,231,0.08)", textDecoration: "none",
                  marginBottom: 6, transition: "background 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(108,92,231,0.18)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(108,92,231,0.08)"}
              >
                <i className={`bi ${c.icon}`} style={{ color: "#6C5CE7", fontSize: 18 }} />
                <span style={{ color: "var(--text, #e8edf5)", fontSize: 13 }}>{c.label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen((v) => !v)}
        style={{
          width: 52, height: 52, borderRadius: "50%", border: "none",
          background: "linear-gradient(135deg, #6C5CE7, #00CEC9)",
          color: "#fff", fontSize: 22, cursor: "pointer",
          boxShadow: "0 4px 20px rgba(108,92,231,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "box-shadow 0.3s",
        }}
        aria-label="Contact me"
      >
        <i className={`bi ${open ? "bi-x-lg" : "bi-chat-dots"}`} />
      </motion.button>
    </div>
  );
}
