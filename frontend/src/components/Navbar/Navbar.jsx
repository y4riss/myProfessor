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
    // fixed top-0 w-full
    <div className="bg-white px-48 text-black p-6 text-xl font-thin flex justify-end ">
      <div className="container flex items-center justify-between ">
        <div className="logo">
          <Link to="/" className="font-bold hover:text-primary">
            myProfessor
          </Link>
        </div>
        <nav className="flex items-center gap-10">
          <div className="">
            {user && (
              <div className="flex items-center gap-4">
                <img
                  src={user.picture}
                  alt="User Profile"
                  className="rounded-full w-10"
                  referrerPolicy="no-referrer"
                />
                <p className="mr-2 font-bold">{user.name}</p>
              </div>
            )}
          </div>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/professors" className="hover:text-primary">
                Professors
              </Link>
            </li>
            <li>
              <Link to="/myevaluations" className="hover:text-primary">
                My Reviews
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            {user && (
              <li>
                <button
                  onClick={handleSignOut}
                  className=" btn btn-primary text-white"
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
