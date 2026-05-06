import React, { useState, useEffect } from "react";

export default function TranslateText({ pt, en }: { pt: string; en: string }) {
  const [lang, setLang] = useState("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const userLang = navigator.language;
    if (!userLang.toLowerCase().startsWith("pt")) {
      setLang("en");
    }
  }, []);

  if (!mounted) return <>{pt}</>;

  return <>{lang === "pt" ? pt : en}</>;
}
