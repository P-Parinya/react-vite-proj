import { Link } from 'react-router';

function LoginButton() {
  return (
    <Link to="/login" className="font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow bg-green-500 text-white hover:bg-green-600 hover:text-white">
      Login
    </Link>
  );
}

export default LoginButton;
