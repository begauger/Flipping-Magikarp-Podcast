import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NewEpisode from "./components/NewEpisode";
import Other from "./components/Other";
import Contact from "./components/Contact";
import FishDivider from "./components/FishDivider";
import Login from "./components/Login";

export default function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  // Example episodes data
  const episodes = [
    {
      title: "The Big Catch",
      description: "Our first episode! We talk about Magikarp and fishing tales.",
      url: "#",
      date: "2025-09-09",
    },
    {
      title: "Splashing Success",
      description: "How to make a splash in the podcast world.",
      url: "#",
      date: "2025-08-30",
    },
    {
      title: "Deep Dive",
      description: "Exploring the mysteries of the deep blue.",
      url: "#",
      date: "2025-08-15",
    },
  ];

  function login() {
    setUser({ name: "Ash Ketchum" });
    setShowLogin(false);
  }

  // Handler to always go "home" (main screen)
  function goHome() {
    setShowLogin(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className="min-h-screen flex flex-col overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #bae6fd 0%, #2563eb 100%)",
      }}
    >
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar
          user={user}
          onLogin={() => setShowLogin(true)}
          onHome={goHome}
        />
      </div>

      {/* Show Login page if requested */}
      {showLogin ? (
        <>
          <Login onLogin={login} />
          <div className="flex justify-center mt-6">
            <button
              onClick={goHome}
              className="bg-blue-700 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-blue-900 transition"
            >
              Back to Home
            </button>
          </div>
        </>
      ) : (
        <>
          {/* About + New Episode Section */}
          <section id="about" className="max-w-5xl mx-auto mt-10 flex flex-col md:flex-row gap-8 items-stretch">
            <About />
            <NewEpisode episode={episodes[0]} />
          </section>

          {/* Fish Divider */}
          <FishDivider />

          {/* Other Episodes: show two cards side by side */}
          <section id="episodes">
            <Other episodes={episodes.slice(1, 3)} />
          </section>

          {/* Spacer and separator before Contact */}
          <div className="my-16 flex justify-center">
            <div className="w-2/3 h-0 border-t-4 border-dotted border-orange-300 rounded-full" />
          </div>

          {/* Contact Section */}
          <section id="contact">
            <Contact />
          </section>

          {/* Footer with subtle, hidden style */}
          <footer className="w-full py-8 bg-blue-950/80 text-center rounded-t-2xl">
            <p className="font-fishing text-lg text-blue-100/60 mb-2">© {new Date().getFullYear()} Flipping Magikarp Podcast</p>
            <p className="text-blue-100/40 text-sm">Thanks for listening and supporting our fishing journey!</p>
          </footer>
        </>
      )}
    </div>
  );
}