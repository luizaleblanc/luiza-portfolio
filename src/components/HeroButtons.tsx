import React, { useState, useEffect } from "react";

const translations = {
  pt: {
    bookCall: "Agendar uma chamada",
    viewWork: "Ver trabalhos recentes",
    whatsapp:
      "https://wa.me/5583991429201?text=Oi,%20Luiza!%20Vim%20do%20seu%20portfólio.%20Vamos%20trabalhar%20juntos!",
  },
  en: {
    bookCall: "Book a call",
    viewWork: "View recent work",
    whatsapp:
      "https://wa.me/5583991429201?text=Hey,%20Luiza!%20I'm%20here%20from%20your%20Portfolio.%20Let's%20work%20together!",
  },
};

export default function HeroButtons() {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  useEffect(() => {
    const userLang = navigator.language;
    if (!userLang.toLowerCase().startsWith("pt")) {
      setLang("en");
    }
  }, []);

  const t = translations[lang];

  const primaryClasses =
    "w-fit text-base sm:text-2xl px-5 py-2 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap text-zinc-900 bg-zinc-100 hover:outline-2 outline-offset-2 outline-zinc-100";
  const secondaryClasses =
    "w-fit text-base sm:text-2xl px-5 py-2 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap text-zinc-100 hover:text-white bg-transparent hover:bg-zinc-100/20 hover:outline-2 outline-offset-2 outline-zinc-100/20";

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <a href={t.whatsapp} target="_blank" rel="noopener noreferrer" className={primaryClasses}>
        {t.bookCall}
      </a>
      <a href="/projects" className={secondaryClasses}>
        {t.viewWork}
      </a>
    </div>
  );
}
