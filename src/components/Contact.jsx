import { FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto my-16 px-4 py-10 bg-gradient-to-b from-blue-900 via-blue-700 to-orange-400 rounded-2xl shadow-none border-none text-center">
      <h2 className="text-2xl font-fishing text-yellow-200 mb-4">Contact</h2>
      <p className="text-white mb-6">
        Have questions, feedback, or want to be a guest on the show?
      </p>
      <div className="flex justify-center gap-8 mb-4">
        <a
          href="mailto:magikarp@podcast.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-125 hover:text-yellow-300 text-white text-3xl"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-125 hover:text-pink-400 text-white text-3xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-orange-100 text-sm">
        We’ll get back to you as soon as we can!
      </p>
    </section>
  );
}