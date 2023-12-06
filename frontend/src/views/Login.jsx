/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from "react";
import { userContext } from "../context/userProvider";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { user } = useContext(userContext);

  const navigate = useNavigate();
  const { setUser } = useContext(userContext);
  const signInBtn = useRef();
  const handleCallbackResponse = (response) => {
    console.log(response);
    const jwt = response.credential;
    const data = jwtDecode(jwt);
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  useEffect(() => {
    /* global google */

    try {
      if (google) {
        google.accounts.id.initialize({
          client_id: import.meta.env.VITE_CLIENT_ID,
          callback: handleCallbackResponse,
          hd: "ensem.ac.ma",
        });

        google.accounts.id.renderButton(signInBtn.current, {
          theme: "filled_blue",
          size: "large",
        });
      }
    } catch (error) {
      console.log(error);
    }
    const addStudent = async () => {
      await fetch("https://myprofessorapi.onrender.com/student", {
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
  }, [user, google]);
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
