function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-100 via-green-400 to-green-700">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main greeting card */}
        <div className="backdrop-blur-lg rounded-xl p-8 md:p-12 shadow-2xl border bg-white/15 border-white/20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Hello World!
          </h1>
          <p className="text-xl md:text-2xl text-neutral-50 mb-8 font-light">
            Welcome to your React + Vite + Tailwind CSS v4 application
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="backdrop-blur-sm rounded-lg p-6 border bg-white/10 border-white/15">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-neutral-50 text-sm">Powered by Vite for instant development</p>
            </div>
            <div className="backdrop-blur-sm rounded-lg p-6 border bg-white/10 border-white/15">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-semibold text-white mb-2">Beautiful UI</h3>
              <p className="text-neutral-50 text-sm">Styled with Tailwind CSS</p>
            </div>
            <div className="backdrop-blur-sm rounded-lg p-6 border bg-white/10 border-white/15">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Modern React</h3>
              <p className="text-neutral-50 text-sm">Built with React 18 and hooks</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg bg-green-500 text-white hover:bg-green-600">
              Get Started
            </button>
            <button className="bg-transparent border-2 font-semibold py-3 px-8 rounded-full transition-colors duration-200 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
              Learn More
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-neutral-800 text-sm">
          <p>Built with ❤️ using React, Vite, and Tailwind CSS v4</p>
        </div>
      </div>
    </div>
  )
}

export default App
