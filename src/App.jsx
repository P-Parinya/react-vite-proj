import { Link } from 'react-router';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="bg-white/90 rounded-2xl shadow-lg border border-green-200 max-w-3xl w-full mx-4 p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-green-700 mb-4">Hello World!</h2>
          <p className="text-lg md:text-2xl text-green-600 mb-8 font-light">
            Welcome to your React + Vite + Tailwind CSS v4 application
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-lg p-6 border border-green-100 bg-green-50">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">Lightning Fast</h3>
              <p className="text-green-600 text-sm">Powered by Vite for instant development</p>
            </div>
            <div className="rounded-lg p-6 border border-green-100 bg-green-50">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">Beautiful UI</h3>
              <p className="text-green-600 text-sm">Styled with Tailwind CSS</p>
            </div>
            <div className="rounded-lg p-6 border border-green-100 bg-green-50">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">Modern React</h3>
              <p className="text-green-600 text-sm">Built with React 18 and hooks</p>
            </div>
          </div>

          {/* Login button */}
          <div className="flex justify-center">
            <Link to="/login" className="font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow bg-green-500 text-white hover:bg-green-600 hover:text-white">
              Login
            </Link>
          </div>
        </div>
      </main>
      <footer className="w-full py-6 text-center text-green-700 text-sm bg-green-50 border-t border-green-100">
        <p>Built with ❤️ using React, Vite, and Tailwind CSS v4</p>
      </footer>
    </div>
  );
}

export default App
