import React, { useState, useEffect } from "react";

export default function AvailableForWork({ className }: { className?: string }) {
  const [lang, setLang] = useState("pt");

  useEffect(() => {
    const userLang = navigator.language;
    if (!userLang.toLowerCase().startsWith("pt")) {
      setLang("en");
    }
  }, []);

  const text = lang === "pt" ? "Disponível para trabalho" : "Available for work";

  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <p className="text-sm text-zinc-400">{text}</p>
    </div>
  );
}
