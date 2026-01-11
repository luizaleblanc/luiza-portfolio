import React from "react";

interface LanguageToggleProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, setLanguage }) => {
  return (
    <button
      className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
      onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
    >
      <span className="text-sm font-medium">{language === "pt" ? "EN" : "PT"}</span>
    </button>
  );
};
