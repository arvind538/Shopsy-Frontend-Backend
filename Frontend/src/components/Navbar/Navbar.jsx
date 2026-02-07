import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Store/auth";
import { FaBars, FaTimes, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/" },
  { id: 3, name: "Service", link: "/" },
  { id: 4, name: "Contact", link: "/contact" },
  { id: 5, name: "Electronics", link: "/" },
  { id: 6, name: "Login", link: "/login" },
  { id: 7, name: "Register", link: "/register" },
];

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const filtered = Menu.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const value = search.toLowerCase();
    const match = Menu.find((item) =>
      item.name.toLowerCase().includes(value)
    );

    if (match) navigate(match.link);
    else navigate(`/products?search=${search}`);

    setSearch("");
    setSuggestions([]);
  };

  return (
    <header className="shadow-md bg-white dark:bg-gray-900 dark:text-white sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto gap-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <img src={Logo} alt="logo" className="w-9" />
          Online_<span className="text-orange-500">Shop</span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-xl relative">
          <form onSubmit={handleSearch} className="w-full">
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Search anything..."
              className="w-full border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-800 dark:border-gray-700"
            />
          </form>

          {suggestions.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white dark:bg-gray-800 shadow-lg rounded-md border dark:border-gray-700 overflow-hidden">
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    navigate(item.link);
                    setSearch("");
                    setSuggestions([]);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-orange-500 hover:text-white"
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <FaRegHeart className="text-xl cursor-pointer" />
          <FaShoppingCart className="text-xl cursor-pointer" />
          <DarkMode />
          <NavLink to="/contact">Contact</NavLink>
          {isLoggedIn ? (
            <NavLink to="/logout">Logout</NavLink>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink
                to="/register"
                className="bg-orange-500 text-white px-3 py-1 rounded-md"
              >
                Register
              </NavLink>
            </>
          )}

          <button
            className="md:hidden text-xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-center gap-8 pb-3 font-medium border-t pt-3 dark:border-gray-700">
        {Menu.slice(0, 5).map((item) => (
          <NavLink key={item.id} to={item.link} className="hover:text-orange-500">
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Search anything..."
              className="w-full border rounded-full px-4 py-2 outline-none dark:bg-gray-800 dark:border-gray-700"
            />
          </form>

          {Menu.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className="block border-b pb-2 dark:border-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;