/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { userContext } from "../context/userProvider";
import { useParams } from "react-router-dom";
import EvaluationForm from "../components/Evaluation/EvaluationForm";
import Evaluations from "../components/Evaluation/Evaluations";
import Details from "../components/Professor/Details";

const SingleProfessor = () => {
  const { user } = useContext(userContext);
  const id = parseInt(useParams().id);
  const [professor, setProfessor] = useState(null);

  useEffect(() => {
    const getProfessor = async () => {
      const res = await fetch(`http://localhost:3000/professors/${id}`);
      const data = await res.json();
      setProfessor(data);
    };
    getProfessor();
  }, []);

  if (!user) {
    return <div>Only ensem's students can access this page</div>;
  }

  return (
    <div>
      <Navbar />

      {professor && (
        <div>
          <Details professor={professor} />
          <div>
            <div className="">
              {/* Evaluations */}

              <div className="">
                <div className="text-lg font-semibold  dark-div  w-full flex items-center justify-center p-10">
                  <h1 className="font-bold text-6xl text-white ">
                    Students Reviews
                  </h1>
                </div>
                {professor.evaluations.map((evaluation, index) => (
                  <Evaluations key={index} evaluation={evaluation} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <EvaluationForm teacherId={id} />
    </div>
  );
};

export default SingleProfessor;
