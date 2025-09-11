import { FaPlayCircle, FaStar } from "react-icons/fa";

export default function NewEpisode({ episode }) {
  if (!episode) return null;

  return (
    <div className="flex flex-col justify-center items-center w-full relative">
      {/* Water splash SVGs */}
      <svg
        className="absolute -top-16 -left-16 w-56 h-56 opacity-60 pointer-events-none z-10"
        viewBox="0 0 128 128"
        fill="none"
      >
        <path
          d="M64 16 Q72 40 96 32 Q88 56 112 64 Q88 72 96 96 Q72 88 64 112 Q56 88 32 96 Q40 72 16 64 Q40 56 32 32 Q56 40 64 16Z"
          fill="#38bdf8"
        />
      </svg>
      <svg
        className="absolute -bottom-16 -right-16 w-56 h-56 opacity-50 pointer-events-none z-10"
        viewBox="0 0 128 128"
        fill="none"
      >
        <path
          d="M64 16 Q72 40 96 32 Q88 56 112 64 Q88 72 96 96 Q72 88 64 112 Q56 88 32 96 Q40 72 16 64 Q40 56 32 32 Q56 40 64 16Z"
          fill="#0ea5e9"
        />
      </svg>
      <svg
        className="absolute -top-10 right-24 w-40 h-40 opacity-30 pointer-events-none z-10"
        viewBox="0 0 128 128"
        fill="none"
      >
        <ellipse cx="64" cy="64" rx="48" ry="24" fill="#38bdf8" />
      </svg>
      <div className="bg-gradient-to-br from-blue-700 via-blue-400 to-orange-300 rounded-3xl shadow-2xl border-8 border-orange-300 p-8 sm:p-12 flex flex-col items-center relative overflow-hidden z-20 min-w-[260px] max-w-2xl w-full scale-105 hover:scale-110 transition-transform duration-300">
        <FaStar className="absolute top-8 left-8 text-yellow-300 animate-bounce" size={40} />
        <FaPlayCircle className="text-orange-500 mb-4 animate-pulse" size={80} />
        <h2 className="text-4xl font-fishing text-orange-700 mb-4 flex flex-col items-center gap-3 drop-shadow text-center w-full">
          🎣 New Episode
          <span className="bg-orange-400 text-white text-base font-bold px-4 py-2 rounded-full mt-2 animate-pulse shadow-lg block text-center">NEW</span>
        </h2>
        <div className="w-full flex flex-col items-center gap-8">
          <div className="flex-1 text-center w-full">
            <h3 className="text-3xl font-bold text-blue-900 mb-2 text-center w-full">{episode.title}</h3>
            <p className="text-blue-800 mb-4 text-lg text-center w-full">{episode.description}</p>
            <span className="text-md text-orange-400 block text-center w-full">{episode.date}</span>
          </div>
          {episode.audio && (
            <audio controls src={episode.audio} className="w-full rounded-lg shadow" />
          )}
        </div>
      </div>
    </div>
  );
}