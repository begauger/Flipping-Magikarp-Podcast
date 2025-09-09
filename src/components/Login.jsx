import { FaUser, FaLock } from "react-icons/fa";

export default function Login({ onLogin }) {
  return (
    <section
      id="login"
      className="flex flex-col items-center justify-center min-h-[60vh] py-12"
    >
      <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-orange-400 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-fishing text-yellow-200 mb-6 text-center">
          Admin Login
        </h2>
        <form
          className="flex flex-col gap-6"
          onSubmit={e => {
            e.preventDefault();
            onLogin && onLogin();
          }}
        >
          <div className="flex items-center bg-white/80 rounded-lg px-4 py-3">
            <FaUser className="text-blue-700 mr-3" />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent outline-none w-full text-blue-900 font-semibold"
              required
            />
          </div>
          <div className="flex items-center bg-white/80 rounded-lg px-4 py-3">
            <FaLock className="text-orange-500 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-blue-900 font-semibold"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-yellow-400 text-blue-900 font-bold py-3 rounded-full shadow hover:bg-yellow-300 transition text-lg"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}