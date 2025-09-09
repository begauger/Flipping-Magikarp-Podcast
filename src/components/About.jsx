import { useState } from "react";

function FishingHookArrow() {
  // Simple SVG hook/arrow for subtle cue
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      className="text-blue-400 opacity-70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 5 Q7 20 20 20 M20 20 L16 16 M20 20 L24 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-start mb-6 md:mb-0 ml-0 md:-ml-80">
      <h2 className="text-lg font-fishing text-blue-700 mb-4 ml-2 select-none">
        Click to Learn More!
      </h2>
      <div
        className="flex-1 flex flex-col justify-center items-center cursor-pointer"
        onClick={() => setFlipped((f) => !f)}
        tabIndex={0}
        aria-label="Flip About Card"
        onKeyDown={e => (e.key === "Enter" || e.key === " ") && setFlipped(f => !f)}
        style={{ outline: "none" }}
      >
        <div
          className={`relative w-80 h-72 transition-transform duration-700 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
          style={{
            minHeight: "18rem",
          }}
        >
          {/* Front: Logo */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 rounded-xl shadow-lg backface-hidden overflow-hidden">
            <img
              src="/Flipping.png"
              alt="Flipping Magikarp Logo"
              className="h-full w-full object-contain rounded-lg"
            />
            {/* Subtle fishing hook arrow in bottom right */}
            <div className="absolute bottom-3 right-3">
              <FishingHookArrow />
            </div>
          </div>
          {/* Back: About Info */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 rounded-xl shadow-lg p-8 rotate-y-180 backface-hidden overflow-auto">
            <h2 className="text-2xl font-fishing text-blue-800 mb-2">About</h2>
            <p className="text-blue-900 text-center text-base leading-relaxed">
              Welcome to <span className="font-bold text-yellow-400">Flipping Magikarp</span>!<br /><br />
              Dive into the world of fishing, fun, and Magikarp with our monthly podcast.<br /><br />
              We share stories, tips, and interviews with fishing enthusiasts and Pokémon fans alike.<br /><br />
              Whether you’re a seasoned angler or just love a good splash, you’ll find something to enjoy!
            </p>
          </div>
        </div>
        <span className="mt-2 text-blue-300 text-xs text-center select-none">
          {flipped ? "Click to see the logo" : ""}
        </span>
      </div>
      <style>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}