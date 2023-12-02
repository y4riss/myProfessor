/* eslint-disable react/prop-types */
// eslint-disable react/prop-types
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../context/userProvider";

const Navbar = () => {
  const { user, setUser } = useContext(userContext);

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.replace("/login");
  };

  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">
          {user && (
            <div className="flex items-center gap-4">
              <img
                src={user.picture}
                alt="User Profile"
                className="rounded-full w-8 h-8"
              />
              <p className="mr-2">{user.name}</p>
            </div>
          )}
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/" className="text-white ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/professors" className="text-white">
                Professors
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white">
                About
              </Link>
            </li>
            {user && (
              <li>
                <button
                  onClick={handleSignOut}
                  className="text-white bg-black p-2 rounded text-sm"
                >
                  Sign out
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
