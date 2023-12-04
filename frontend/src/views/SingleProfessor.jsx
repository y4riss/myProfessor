/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { userContext } from "../context/userProvider";
import { useParams } from "react-router-dom";
import EvaluationForm from "../components/Evaluation/EvaluationForm";
import Evaluations from "../components/Evaluation/Evaluations";

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
          <div className="max-w-xl mx-auto p-4">
            <img src={`/imgs/${professor.image}`} alt="img" width={200} />
            <h1 className="text-2xl font-bold mb-4">{professor.name}</h1>
            <p className="mb-4">{professor.description}</p>

            {/* professor Details */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">
                Professor's Details
              </h2>
              <p>Email: {professor.email}</p>
              <p>
                Start Year: {new Date(professor.startYear).toLocaleDateString()}
              </p>
              {/* Add other professor details as needed */}
            </div>

            {/* Evaluations */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Evaluations</h2>
              {professor.evaluations.map((evaluation, index) => (
                <Evaluations key={index} evaluation={evaluation} />
              ))}
            </div>
          </div>
        </div>
      )}
      <EvaluationForm teacherId={id} />
    </div>
  );
};

export default SingleProfessor;
