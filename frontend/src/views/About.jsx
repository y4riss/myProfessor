/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { userContext } from "../context/userProvider";

const Home = () => {
  const { user } = useContext(userContext);

  if (!user) {
    return <div>Only ensem's students can access this page</div>;
  }

  return (
    <div>
      <Navbar />
      <div>About page</div>
    </div>
  );
};

export default Home;
