import { useState } from "react";
import StarSelector from "./StarSelector";

const EvaluationForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
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
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Evaluation Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Star Ratings */}
        <div className="mb-6">
          {Object.keys(formValues).map((field, index) => (
            <div
              key={field}
              className="mb-4  flex gap-2 items-baseline justify-between w-52 p-2"
            >
              <label className="block mb-2">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <StarSelector
                index={index}
                handleClick={(e) => handleClick(e, field, index)}
              />
            </div>
          ))}
        </div>

        <div className="mb-6">
          <label className="block mb-2">Comment</label>
          <textarea
            value={comment}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EvaluationForm;
