import { FaPlayCircle, FaStar } from "react-icons/fa";

export default function NewEpisode({ episode }) {
  return (
    <div className="flex-[2] bg-gradient-to-br from-blue-700 via-blue-400 to-orange-300 rounded-2xl shadow-2xl border-4 border-orange-300 p-8 flex flex-col items-center md:ml-32 relative overflow-hidden">
      {/* Animated sparkle/star */}
      <FaStar className="absolute top-4 left-4 text-yellow-300 animate-bounce" size={28} />
      {/* Play icon */}
      <FaPlayCircle className="text-orange-500 mb-2 animate-pulse" size={54} />
      <h2 className="text-3xl font-fishing text-orange-700 mb-2 flex items-center gap-2">
        🎣 New Episode
        <span className="bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full ml-2 animate-pulse">NEW</span>
      </h2>
      <div className="w-full flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-blue-900">{episode.title}</h3>
          <p className="text-blue-800 mb-2">{episode.description}</p>
          <span className="text-sm text-orange-400">{episode.date}</span>
        </div>
        <a
          href={episode.url}
          className="bg-orange-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-orange-600 transition transform hover:scale-105 animate-pulse"
          style={{ fontSize: "1.25rem" }}
        >
          Listen Now
        </a>
      </div>
    </div>
  );
}