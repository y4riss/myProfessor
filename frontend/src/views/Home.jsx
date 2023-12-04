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
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <header className="grid grid-cols-2 px-48 py-32">
          <section className="grid justify-start gap-8">
            <div className="title">
              <h1 className="font-bold text-7xl">myProfessor - your feedback matters</h1>
            </div>
            <div className="paragraph">
              <p className="text-xl">
                myProfessor is a student-built app that allows users to evaluate
                teachers on factors like communication and teaching
                effectiveness. It provides valuable feedback for teachers to
                enhance their performance and fosters a culture of continuous
                improvement in our school community
              </p>
            </div>
            <div className="button">
              <button className="btn btn-primary text-lg btn-lg">
                Give your feedback now !
              </button>
            </div>
          </section>
          <section className=" flex justify-end">
            <div className="img rounded overflow-hidden w-3/4">
              <img src="/imgs/header.webp" alt="header_image" />
            </div>
          </section>
        </header>
      </div>
    </div>
  );
};

export default Home;
