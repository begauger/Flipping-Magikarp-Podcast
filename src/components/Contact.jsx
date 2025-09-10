import { useState } from "react";
import { FaEnvelope, FaInstagram, FaRegCopy, FaCheck } from "react-icons/fa";

export default function Contact() {
  const [showEmail, setShowEmail] = useState(false);
  const [showInsta, setShowInsta] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "flippingmagikarps@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section className="max-w-xl mx-auto my-16 px-4 py-10 bg-gradient-to-b from-blue-900 via-blue-700 to-orange-400 rounded-2xl shadow-none border-none text-center">
      <h2 className="text-2xl font-fishing text-yellow-200 mb-4">Contact</h2>
      <p className="text-white mb-6">
        Have questions, feedback, or want to be a guest on the show?
      </p>
      <div className="flex justify-center gap-8 mb-4">
        <div
          className="flex flex-col items-center"
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => setShowEmail(false)}
        >
          <a
            
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:text-yellow-300 text-white text-3xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <div
            className={`mt-2 flex items-center gap-2 transition-opacity duration-200 ${
              showEmail ? "opacity-100" : "opacity-0 pointer-events-none select-none"
            }`}
            style={{ userSelect: showEmail ? "all" : "none" }}
          >
            <span className="text-white/80 text-sm font-semibold">{email}</span>
            <button
              onClick={handleCopy}
              className="ml-1 p-1 rounded hover:bg-blue-800 transition"
              tabIndex={showEmail ? 0 : -1}
              aria-label="Copy email"
              type="button"
            >
              {copied ? (
                <FaCheck className="text-green-400" />
              ) : (
                <FaRegCopy className="text-white/70" />
              )}
            </button>
          </div>
        </div>
        <div
          className="flex flex-col items-center"
          onMouseEnter={() => setShowInsta(true)}
          onMouseLeave={() => setShowInsta(false)}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125 hover:text-pink-400 text-white text-3xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <span
            className={`mt-2 text-white/80 text-sm font-semibold transition-opacity duration-200 ${
              showInsta ? "opacity-100" : "opacity-0 pointer-events-none select-none"
            }`}
          >
            @FlippingMagikarp
          </span>
        </div>
      </div>
      <p className="text-orange-100 text-sm">
        We’ll get back to you as soon as we can!
      </p>
    </section>
  );
}