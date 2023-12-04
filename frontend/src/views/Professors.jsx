/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/userProvider";
import Professor from "../components/Professor/Professor";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";

const Professors = () => {
  const { user } = useContext(userContext);

  const [professors, setProfessors] = useState(null);
  const [filteredProfessors, setFilteredProfessors] = useState(null);

  useEffect(() => {
    const getProfessors = async () => {
      const res = await fetch("http://localhost:3000/professors");
      const data = await res.json();
      setProfessors(data);
      setFilteredProfessors(data);
    };
    getProfessors();
  }, []);

  if (!user) {
    return <div>Only ensem's students can access this page</div>;
  }

  return (
    <div>
      <Navbar />
      <Header
        title="Discover Exceptional Educators"
        description={
          "Welcome to our Professors Directory, where learning meets excellence. Explore the profiles of our dedicated educators, each bringing unique expertise and passion to the classroom."
        }
        img="/imgs/header2.jpg"
        btn=""
        bg="custom-bg"
      />
      <div className="h-64 p-4 bg-black my-4 w-full dark-div flex items-center justify-center">
        <h1 className="text-white text-7xl font-bold text-center">
          Professors Section
        </h1>
      </div>
      <div className="flex">
        <div className="search w-fit  p-4">
          <Search
            professors={professors}
            setProfessors={setFilteredProfessors}
          />
        </div>
        <div className="flex flex-wrap  container mx-auto mt-8 professors-div ">
          {filteredProfessors &&
            filteredProfessors.map((prof) => (
              <Professor key={prof.id} prof={prof} />
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Professors;
