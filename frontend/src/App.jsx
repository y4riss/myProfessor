import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Professors from "./views/Professors";
import Home from "./views/Home";
import { userContext } from "./context/userProvider";
import Login from "./views/Login";

const App = () => {
  const { setUser } = useContext(userContext);
  const signInBtn = useRef();
  const handleCallbackResponse = (response) => {
    const jwt = response.credential;
    const data = jwtDecode(jwt);
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  useEffect(() => {
    try {
      /* global google */

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
      console.log("error");
    }
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login signInBtn={signInBtn} />} />
          <Route path="/professors" element={<Professors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
