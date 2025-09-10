import { useState, useEffect } from "react";
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
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/episodes/")
      .then((res) => res.json())
      .then((data) => setEpisodes(data));
  }, []);

  function login() {
    setUser({ name: "Ash Ketchum" });
    setShowLogin(false);
  }

  function goHome() {
    setShowLogin(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goToAdmin() {
    window.open("http://127.0.0.1:8000/admin/", "_blank");
  }

  return (
    <div
      className="min-h-screen flex flex-col overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #bae6fd 0%, #2563eb 100%)",
      }}
    >
      <div className="sticky top-0 z-50">
        <Navbar user={user} onLogin={() => setShowLogin(true)} onHome={goHome} />
      </div>

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
          <section
            id="about"
            className="max-w-5xl mx-auto mt-10 flex flex-col md:flex-row gap-8 items-center justify-center"
          >
            <About />
            <div className="ml-40">
              <NewEpisode episode={episodes[0] || { title: "", description: "", date: "", audio: "" }} />
            </div>
          </section>

          <FishDivider />

          <section id="episodes">
            <Other episodes={episodes.slice(1)} />
          </section>

          <div className="my-16 flex justify-center">
            <div className="w-2/3 h-0 border-t-4 border-dotted border-orange-300 rounded-full" />
          </div>

          <section id="contact">
            <Contact />
          </section>

          {/* Superuser/admin shortcut */}
          {user && (
            <div className="fixed bottom-8 right-8 z-50">
              <button
                onClick={goToAdmin}
                className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition text-lg"
              >
                {user.name}
              </button>
              <span className="block text-xs text-blue-900 mt-1 text-center">Go to Admin</span>
            </div>
          )}

          <footer className="w-full py-8 bg-blue-950/80 text-center rounded-t-2xl">
            <p className="font-fishing text-lg text-blue-100/60 mb-2">
              © {new Date().getFullYear()} Flipping Magikarp Podcast
            </p>
            <p className="text-blue-100/40 text-sm">
              Thanks for listening and supporting our fishing journey!
            </p>
          </footer>
        </>
      )}
    </div>
  );
}