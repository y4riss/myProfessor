/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { userContext } from "../context/userProvider";
import { useParams } from "react-router-dom";
import StarRating from "../components/Evaluation/StarRating";
import EvaluationForm from "../components/Evaluation/EvaluationForm";

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
            <img src={`/${professor.image}`} alt="img" width={200} />
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
              {professor.evaluations.map((evaluation) => (
                <div key={evaluation.id} className="mb-4 border p-4 rounded">
                  <p>
                    Attitude in class:{" "}
                    <StarRating value={evaluation.attitude} />
                  </p>
                  <p>
                    Approach to the material:{" "}
                    <StarRating value={evaluation.approach} />
                  </p>
                  <p>
                    Style of teaching: <StarRating value={evaluation.style} />
                  </p>
                  <p>
                    The course: <StarRating value={evaluation.course} />
                  </p>
                  <p>
                    Extra work: <StarRating value={evaluation.extraWork} />
                  </p>
                  <p>
                    TP / TD: <StarRating value={evaluation.tp_td} />
                  </p>
                  <p>
                    Exam: <StarRating value={evaluation.exam} />
                  </p>
                  <p>
                    Average Rating:{" "}
                    <StarRating
                      value={
                        (evaluation.attitude +
                          evaluation.approach +
                          evaluation.style +
                          evaluation.extraWork +
                          evaluation.tp_td +
                          evaluation.exam) /
                        6
                      }
                    />
                  </p>
                  {/* Add other evaluation details as needed */}
                  <p>Comment: {evaluation.comment}</p>
                  <p>Student Email: {evaluation.studentEmail}</p>
                </div>
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
