import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Logo / Brand */}
      <h1 className="text-xl font-bold">📚 Book Finder</h1>

      {/* Links */}
      <div className="flex gap-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/favorites" className="hover:text-yellow-300">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
