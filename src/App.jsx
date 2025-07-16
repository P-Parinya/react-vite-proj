function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main greeting card */}
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Hello World!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Welcome to your React + Vite + Tailwind CSS v4 application
          </p>
          
          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-white/80 text-sm">Powered by Vite for instant development</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-semibold text-white mb-2">Beautiful UI</h3>
              <p className="text-white/80 text-sm">Styled with Tailwind CSS</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Modern React</h3>
              <p className="text-white/80 text-sm">Built with React 18 and hooks</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-white/70 text-sm">
          <p>Built with ❤️ using React, Vite, and Tailwind CSS v4</p>
        </div>
      </div>
    </div>
  )
}

export default App
