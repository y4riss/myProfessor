import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { userContext } from "../context/userProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  },[]);

  return (
    <div>
      <Navbar />
      <div>Home page</div>
    </div>
  );
};

export default Home;
