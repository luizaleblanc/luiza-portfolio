import React, { useState, useEffect } from "react";

type Project = {
  title: string;
  descriptionPt: string;
  descriptionEn: string;
  imageSrc: string;
  link: string;
  badge?: string;
};

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  useEffect(() => {
    const userLang = navigator.language;
    if (!userLang.toLowerCase().startsWith("pt")) {
      setLang("en");
    }
  }, []);

  return (
    <ul className="w-full max-w-6xl flex flex-col items-center gap-24">
      {projects.map((project, idx) => (
        <li key={idx} className="flex flex-col items-center text-center w-full">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex justify-center"
          >
            <div className="w-full flex justify-center overflow-hidden rounded-2xl shadow-2xl bg-zinc-800 hover:bg-zinc-700 transition-all duration-300">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full max-w-5xl h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>
          <div className="max-w-3xl px-6 mt-6 flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <h2 className="text-3xl font-semibold text-zinc-100">{project.title}</h2>
              {project.badge && (
                <span className="px-2 py-1 text-xs font-medium text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-md">
                  {lang === "pt" && project.badge === "In Development"
                    ? "Em Desenvolvimento"
                    : project.badge}
                </span>
              )}
            </div>
            <p className="text-base text-zinc-300 leading-relaxed">
              {lang === "pt" ? project.descriptionPt : project.descriptionEn}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
