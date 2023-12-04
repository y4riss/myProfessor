import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { userContext } from "../context/userProvider";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Header
          img={"/imgs/header.webp"}
          title="myProfessor - your feedback matters"
          description="myProfessor is a student-built app that allows users to evaluate
            teachers on factors like communication and teaching effectiveness.
            It provides valuable feedback for teachers to enhance their
            performance and fosters a culture of continuous improvement in our
            school community"
          btn={"Give your feedback now !"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
