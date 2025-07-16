import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex flex-col justify-center items-center p-4">
      <main className="flex-1 flex items-center justify-center w-full">
        <div className="bg-white/90 rounded-2xl shadow-lg border border-green-200 max-w-md w-full mx-4 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">Sign In</h2>
          <LoginForm />
        </div>
      </main>
      <footer className="w-full py-6 text-center text-green-700 text-sm bg-green-50 border-t border-green-100 mt-8">
        <p>Built with ❤️ using React, Vite, and Tailwind CSS v4</p>
      </footer>
    </div>
  );
}

export default Login;
