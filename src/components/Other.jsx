import { useState } from "react";

export default function Other({ episodes }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full flex flex-col items-center my-10">
      <h2 className="text-3xl font-fishing text-orange-600 mb-8 text-center">Other Episodes</h2>
      <div className="flex flex-wrap justify-center gap-10 w-full">
        {episodes.map((ep, idx) => (
          <div
            key={idx}
            className={`
              transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer
              flex flex-col items-center justify-center
              ${hovered === idx
                ? "bg-orange-200 w-72 h-72 rounded-full p-8 z-10 scale-110"
                : "bg-orange-100 w-32 h-32 rounded-full p-2 z-0 scale-100"}
              shadow-lg
            `}
            style={{
              boxShadow: hovered === idx
                ? "0 8px 32px 0 rgba(251, 146, 60, 0.25)"
                : "0 2px 8px 0 rgba(251, 146, 60, 0.10)",
              transitionProperty: "all",
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === idx ? (
              <>
                <h3 className="text-2xl font-bold text-orange-800 mb-1 text-center">{ep.title}</h3>
                <p className="text-orange-900 text-sm mb-2 text-center">{ep.description}</p>
                <span className="text-xs text-orange-400 mb-2">{ep.date}</span>
                <a
                  href={ep.url}
                  className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full shadow hover:bg-orange-600 transition"
                >
                  Listen
                </a>
              </>
            ) : (
              <span className="text-orange-700 font-bold text-lg text-center px-2 truncate w-full">
                {ep.title}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}