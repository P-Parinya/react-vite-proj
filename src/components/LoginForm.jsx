function LoginForm() {
  return (
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
  );
}

export default LoginForm;
