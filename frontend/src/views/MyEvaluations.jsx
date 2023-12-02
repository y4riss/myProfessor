/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { userContext } from "../context/userProvider";
import Evaluations from "../components/Evaluation/Evaluations";

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
      <h1>Your evaluations : </h1>

      {student && (
        <div>
          {student.evaluations.map((evaluation, index) => (
            <Evaluations key={index} evaluation={evaluation} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEvaluations;
