import { FaPodcast, FaHeadphonesAlt, FaFish } from "react-icons/fa";

export default function Navbar({ user, onLogin }) {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-400 shadow-xl px-6 py-4 flex flex-col md:flex-row items-center justify-between">
      {/* Left: Logo & Title */}
      <div className="flex items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-yellow-300 bg-white shadow-lg flex items-center justify-center overflow-hidden">
            <img
              src="/Flipping.png"
              alt="Logo"
              className="h-14 w-14 md:h-16 md:w-16 object-contain"
            />
          </div>
          {/* Podcast icon overlay */}
          <FaPodcast className="absolute -bottom-2 -right-2 text-pink-400 text-2xl md:text-3xl bg-white rounded-full p-1 shadow" />
        </div>
        <div className="flex flex-col items-center">
          <span
            className="font-fishing text-3xl md:text-4xl text-yellow-300 drop-shadow tracking-tight leading-tight flex items-center gap-2 whitespace-nowrap"
            style={{ maxWidth: "320px", minWidth: "200px", justifyContent: "center" }}
          >
            Flipping
            <FaFish className="text-blue-400 text-xl md:text-2xl" />
            Magikarps
          </span>
          <span className="text-base md:text-lg text-white font-semibold tracking-wide flex items-center gap-1">
            <FaHeadphonesAlt className="text-yellow-200" />
            Monthly Podcast Hub
          </span>
        </div>
      </div>
      {/* Right: Nav Links */}
      <ul className="flex items-center gap-8 mt-4 md:mt-0">
        <li>
          <a href="#episodes" className="text-white text-lg font-semibold hover:text-yellow-300 transition">
            Episodes
          </a>
        </li>
        <li>
          <a href="#about" className="text-white text-lg font-semibold hover:text-yellow-300 transition">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white text-lg font-semibold hover:text-yellow-300 transition">
            Contact
          </a>
        </li>
        <li>
          {user ? (
            <span className="text-yellow-300 text-lg font-bold">{user.name}</span>
          ) : (
            <button
              onClick={onLogin}
              className="bg-yellow-400 text-blue-900 text-lg font-bold px-5 py-2 rounded-full shadow hover:bg-yellow-300 transition"
            >
              Login
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}