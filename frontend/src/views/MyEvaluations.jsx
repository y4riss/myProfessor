/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { userContext } from "../context/userProvider";
import Evaluations from "../components/Evaluation/Evaluations";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const MyEvaluations = () => {
  const { user } = useContext(userContext);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    if (user) {
      const getStudent = async () => {
        const res = await fetch(`http://localhost:3000/student/${user.email}`);
        const json = await res.json();
        setStudent(json);
      };
      getStudent();
      console.log(student);
    }
  }, [user]);
  if (!user) {
    return <div>Only ensem's students can access this page</div>;
  }

  return (
    <div>
      <Navbar />

      {student && (
        <div className="">
          <div className="text-lg font-semibold  dark-div  w-full flex items-center justify-center p-10">
            <h1 className="font-bold text-6xl text-white ">Your Reviews</h1>
          </div>
          {!student.evaluations.length && (
            <div className="h-screen flex align-middle items-center justify-center text-6xl flex-col gap-10">
              No reviews yet.
              <Link to="/professors" className="btn btn-primary btn-lg">
                Review now !
              </Link>
            </div>
          )}
          {student.evaluations.map((evaluation, index) => (
            <Evaluations key={index} evaluation={evaluation} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MyEvaluations;
