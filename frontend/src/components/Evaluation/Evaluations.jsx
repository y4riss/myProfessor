/* eslint-disable react/prop-types */
import StarRating from "./StarRating";

const Evaluations = ({ evaluation }) => {
  if (!evaluation) {
    return <div>You have not evaluated any Professor yet.</div>;
  }
  return (
    <div>
      <div className="mb-4 border p-4 rounded">
        {evaluation.teacher && (
          <div>
            <p>Professor evaluated : {evaluation.teacher.name}</p>
          </div>
        )}
        {!evaluation.teacher && (
          <div>
            <div>Student name : {evaluation.student.name}</div>
          </div>
        )}
        <p>
          Attitude in class: <StarRating value={evaluation.attitude} />
        </p>
        <p>
          Approach to the material: <StarRating value={evaluation.approach} />
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
      </div>
    </div>
  );
};

export default Evaluations;
