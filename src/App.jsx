import { useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [user, setUser] = useState(null);

  function login() {
    setUser({ name: "Ash Ketchum" });
  }

  function addPodcast(e) {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const url = form.url.value;
    setPodcasts([...podcasts, { title, url }]);
    form.reset();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center">
      <Navbar user={user} onLogin={login} />
      {/* Body content will go here later */}
    </div>
  );
}