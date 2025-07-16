import { Link } from 'react-router';

function BackButton() {
  return (
    <Link
      to="/"
      className="inline-block font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow bg-green-100 text-green-700 text-base hover:bg-green-200 hover:text-green-900"
    >
      ← Back
    </Link>
  );
}

export default BackButton;
