import FeatureCards from '../components/FeatureCards';
import Datepicker from '../components/Datepicker';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="bg-white/90 rounded-2xl shadow-lg border border-green-200 max-w-3xl w-full mx-4 p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-green-700 mb-4">Hello World!</h2>
          <p className="text-lg md:text-2xl text-green-600 mb-8 font-light">
            Welcome to your React + Vite + Tailwind CSS v4 application
          </p>
          <div className="flex justify-center mb-8">
            <Datepicker />
          </div>
          <FeatureCards />
        </div>
      </main>
      <footer className="w-full py-6 text-center text-green-700 text-sm bg-green-50 border-t border-green-100">
        <p>Built with ❤️ using React, Vite, and Tailwind CSS v4</p>
      </footer>
    </div>
  );
}

export default Home;
