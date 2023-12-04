/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { userContext } from "../context/userProvider";
import { useNavigate } from "react-router-dom";

const Login = ({ signInBtn }) => {
  const { user } = useContext(userContext);

  const navigate = useNavigate();

  useEffect(() => {
    const addStudent = async () => {
      await fetch("http://localhost:3000/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    };

    if (user) {
      addStudent();
      navigate("/");
    }
  }, [user]);
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">
          <img src="/imgs/ensem.jpg" alt="ensem" />
          Sign in using your ENSEM's account
        </h2>
        <div
          className="flex w-full items-center justify-center  "
          ref={signInBtn}
        ></div>
      </div>
    </div>
  );
};

export default Login;
