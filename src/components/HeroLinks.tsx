import React from "react";
import { useTranslation } from "./LanguageProvider";

export default function HeroLinks() {
  const { t, lang } = useTranslation();

  const whatsappUrl =
    lang === "pt"
      ? "https://wa.me/5583991429201?text=Oi,%20Luiza!%20Vim%20do%20seu%20portfólio.%20Vamos%20trabalhar%20juntos!"
      : "https://wa.me/5583991429201?text=Hey,%20Luiza!%20I'm%20here%20from%20your%20Portfolio.%20Let's%20work%20together!";

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2.5 bg-zinc-100 text-zinc-900 font-medium rounded-lg hover:bg-zinc-200 transition-colors"
      >
        {t("bookCall")}
      </a>
      <a
        href="/projects"
        className="px-5 py-2.5 bg-zinc-800 text-zinc-100 font-medium rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700"
      >
        {t("viewWork")}
      </a>
    </div>
  );
}
