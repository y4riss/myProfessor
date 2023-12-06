/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import StarSelector from "./StarSelector";
import { userContext } from "../../context/userProvider";

const EvaluationForm = ({ teacherId }) => {
  const { user } = useContext(userContext);
  const [formValues, setFormValues] = useState({
    attitude: 0,
    approach: 0,
    style: 0,
    course: 0,
    extraWork: 0,
    tp_td: 0,
    exam: 0,
  });
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formValues,
      comment,
      studentEmail: user.email,
      teacherId: teacherId,
    };

    const res = await fetch("https://myprofessorapi.onrender.com/eval", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();

    console.log(json);
    alert("Your evaluation has been submitted sucessfully");
  };

  const handleClick = (e, field, index) => {
    const id = parseInt(e.target.id);
    const div = document.querySelector(`.stars_${index}`);
    div.classList.add("clicked");
    for (let i = 1; i <= id; i++) {
      div.children[i - 1].classList.add("text-yellow-500");
      console.log(div.children[i - 1]);
    }
    setFormValues({ ...formValues, [field]: id });
  };

  return (
    <div className="max-w-xl mx-auto p-4 border my-4 font-bold bg-white">
      <form onSubmit={handleSubmit}>
        {/* Star Ratings */}
        <div className="mb-6">
          {Object.keys(formValues).map((field, index) => (
            <div key={field}>
              <div className="mb-4  flex gap-2 items-baseline justify-between w-56 p-2">
                <label className="block mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <StarSelector
                  index={index}
                  handleClick={(e) => handleClick(e, field, index)}
                />
              </div>
              <hr />
            </div>
          ))}
        </div>

        <div className="mb-6">
          <label className="block mb-2">Comment</label>
          <textarea
            value={comment}
            onChange={handleChange}
            className="w-full p-2 border rounded input input-bordered"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EvaluationForm;
