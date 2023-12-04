/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import StarRating from "./StarRating";

const Evaluations = ({ evaluation }) => {
  if (!evaluation) {
    return <div>You have not evaluated any Professor yet.</div>;
  }
  return (
    <div>
      <div className="mb-4 border p-4 rounded max-w-[350px] mx-auto my-10 custom-bg">
        {evaluation.teacher && (
          <div className="mb-4">
            <div className="flex align-middle items-center justify-center  w-fit mb-4">
              <img
                src={`/imgs/${evaluation.teacher.image}`}
                alt="student_image"
                className="m max-w-[40px]"
              />
              <h1 className="font-bold text-xl">Teacher's infos </h1>
            </div>
            <div className="">
              <span className="font-bold">Full name: </span>
              {evaluation.teacher.name}
            </div>
            <div>
              <span className="font-bold">email: </span>
              {evaluation.teacher.email}
            </div>
          </div>
        )}
        {!evaluation.teacher && (
          <div className="mb-4">
            <div className="flex align-middle items-center justify-center  w-fit mb-4">
              <img
                src={
                  evaluation.student.image === "student.png"
                    ? `/imgs/student.png`
                    : evaluation.student.image
                }
                alt="student_image"
                className="m max-w-[40px]"
              />
              <h1 className="font-bold text-xl">Reviewer's infos (student)</h1>
            </div>
            <div className="">
              <span className="font-bold">Full name: </span>
              {evaluation.student.name}
            </div>
            <div>
              <span className="font-bold">email: </span>
              {evaluation.student.email}
            </div>
          </div>
        )}
        <div className="">
          <h1 className="font-bold text-xl">

            {!evaluation.teacher ? `His/Her reviews ` : `Your review`}
          </h1>
          <div className="flex items-center">
            <span className="font-bold">Attitude in class</span>{" "}
            <StarRating value={evaluation.attitude} />
          </div>
          <div className="flex items-center">
            <span className="font-bold">Approach to the material:</span>{" "}
            <StarRating value={evaluation.approach} />
          </div>
          <div className="flex items-center">
            <span className="font-bold">Style of teaching:</span>
            <StarRating value={evaluation.style} />
          </div>
          <div className="flex items-center">
            <span className="font-bold">The course</span>{" "}
            <StarRating value={evaluation.course} />
          </div>
          <div className="flex items-center">
            <span className="font-bold">Extra work</span>{" "}
            <StarRating value={evaluation.extraWork} />
          </div>
          <div className="flex items-center">
            <span className="font-bold">TP / TD</span>{" "}
            <StarRating value={evaluation.tp_td} />
          </div>
          <div className="flex items-center">
            <span className="font-bold">The exam</span>{" "}
            <StarRating value={evaluation.exam} />
          </div>
          <div className="flex items-center">
            <span className="font-bold">Average rating</span>{" "}
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
          </div>
          {/* Add other evaluation details as needed */}
          <div className="flex">
            {" "}
            <span className="font-bold">Comment:&nbsp;&nbsp;</span>{" "}
            {evaluation.comment}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluations;
