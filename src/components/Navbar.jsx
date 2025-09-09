import { FaPodcast, FaHeadphonesAlt, FaFish } from "react-icons/fa";

export default function Navbar({ user, onLogin, onHome }) {
  // Helper to scroll to section by id
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Helper to scroll to top and go home
  const handleHome = () => {
    if (onHome) {
      onHome();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-orange-400 shadow-xl px-6 py-4 flex flex-col md:flex-row items-center justify-between">
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
          <button
            onClick={handleHome}
            className="font-fishing text-3xl md:text-4xl text-yellow-300 drop-shadow tracking-tight leading-tight flex items-center gap-2 whitespace-nowrap bg-transparent border-none p-0 m-0 cursor-pointer"
            style={{ maxWidth: "320px", minWidth: "200px", justifyContent: "center" }}
            aria-label="Go to Top"
          >
            Flipping
            <FaFish className="text-blue-400 text-xl md:text-2xl" />
            Magikarps
          </button>
          <span className="text-base md:text-lg text-white font-semibold tracking-wide flex items-center gap-1">
            <FaHeadphonesAlt className="text-yellow-200" />
            Monthly Podcast Hub
          </span>
        </div>
      </div>
      {/* Right: Nav Links */}
      <ul className="flex items-center gap-8 mt-4 md:mt-0">
        <li>
          <button
            onClick={() => scrollToSection("episodes")}
            className="text-white text-lg font-semibold hover:text-yellow-300 transition bg-transparent border-none cursor-pointer"
          >
            Episodes
          </button>
        </li>
        <li>
          <button
            onClick={handleHome}
            className="text-white text-lg font-semibold hover:text-yellow-300 transition bg-transparent border-none cursor-pointer"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white text-lg font-semibold hover:text-yellow-300 transition bg-transparent border-none cursor-pointer"
          >
            Contact
          </button>
        </li>
        <li>
          {user ? (
            <span className="text-yellow-300 text-lg font-bold">{user.name}</span>
          ) : (
            <button
              onClick={() => {
                scrollToSection("login");
                onLogin();
              }}
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