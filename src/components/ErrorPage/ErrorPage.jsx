const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      <div className="relative text-center p-10 rounded-3xl bg-gray-800/60 backdrop-blur-lg shadow-[0_0_40px_rgba(255,105,180,0.2)]">
        {/* Floating emoji */}
        <div className="text-7xl animate-bounce mb-4">🌸</div>

        {/* Error Number */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          404
        </h1>

        {/* Short message */}
        <p className="text-gray-400 mt-2 text-lg">Oops! Page not found</p>

        {/* Button */}
        <a
          href="/"
          className="mt-8 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(255,105,180,0.5)] transition-all duration-300"
        >
          Take Me Home 💫
        </a>

        {/* Decorative glow */}
        <div className="absolute -z-10 inset-0 rounded-3xl bg-gradient-to-tr from-pink-500/10 to-purple-500/10 blur-2xl"></div>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} John Wick — made with ❤️
      </p>
    </div>
  );
};

export default ErrorPage;
