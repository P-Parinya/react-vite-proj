import { Link } from "react-router";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex flex-col justify-center items-center p-4">
      <main className="flex-1 flex items-center justify-center w-full">
        <div className="bg-white/90 rounded-2xl shadow-lg border border-green-200 max-w-md w-full mx-4 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">Sign In</h2>
          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-green-50 border border-green-100 text-green-700 text-base focus:outline-none focus:ring-2 focus:ring-green-200 mb-2"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-green-50 border border-green-100 text-green-700 text-base focus:outline-none focus:ring-2 focus:ring-green-200 mb-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow bg-green-500 text-white hover:bg-green-600 hover:text-white text-base mt-2"
            >
              Login
            </button>
          </form>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Link
              to="/"
              className="inline-block font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow bg-green-100 text-green-700 border border-green-200 text-base hover:bg-green-200 hover:text-green-900"
            >
              ← Back
            </Link>
          </div>
        </div>
      </main>
      <footer className="w-full py-6 text-center text-green-700 text-sm bg-green-50 border-t border-green-100 mt-8">
        <p>Built with ❤️ using React, Vite, and Tailwind CSS v4</p>
      </footer>
    </div>
  );
}

export default Login;
