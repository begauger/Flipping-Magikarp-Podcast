import { useEffect, useState } from "react";

function EpisodesList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/episodes/")
      .then((res) => res.json())
      .then((data) => setEpisodes(data));
  }, []);

  return (
    <div>
      <h2>Episodes</h2>
      <ul>
        {episodes.map((ep) => (
          <li key={ep.id}>
            <h3>{ep.title}</h3>
            <p>{ep.description}</p>
            <audio controls src={ep.audio}></audio>
            <p>{ep.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EpisodesList;