/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/userProvider";
import Professor from "../components/Professor/Professor";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Professors = () => {
  const { user } = useContext(userContext);

  const [professors, setProfessors] = useState(null);

  useEffect(() => {
    const getProfessors = async () => {
      const res = await fetch("http://localhost:3000/professors");
      const data = await res.json();
      setProfessors(data);
    };
    getProfessors();
  }, []);

  if (!user) {
    return <div>Only ensem's students can access this page</div>;
  }

  return (
    <div>
      <Navbar />

      <div className="flex flex-wrap  container mx-auto mt-8 ">
        {professors &&
          professors.map((prof) => <Professor key={prof.id} prof={prof} />)}
      </div>
      <Footer />
    </div>
  );
};

export default Professors;
