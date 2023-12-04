/* eslint-disable react/prop-types */
const Details = ({ professor }) => {
  if (!professor) {
    return <div>Loading...</div>;
  }

  let evaluation = professor.evaluations;
  const calculateRating = () => {
    let rating = 0;
    const eval_length = evaluation.length;
    for (let i = 0; i < eval_length; i++) {
      rating +=
        (evaluation[i].attitude +
          evaluation[i].approach +
          evaluation[i].style +
          evaluation[i].extraWork +
          evaluation[i].tp_td +
          evaluation[i].exam) /
        6;
    }
    return Math.round((rating / eval_length) * 100) / 100;
  };
  const rating = calculateRating();
  return (
    <header className="grid grid-cols-2 px-48 py-32 gap-10 custom-bg">
      <section className="">
        <div className="img rounded overflow-hidden w-full max-h-[550px]  flex justify-end">
          <img
            src={`/imgs/${professor.image}`}
            alt="header_image"
            className="rounded min-w-full"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <div>
          <div className="mb-20">
            <div className="title">
              <h1 className="font-bold text-7xl mb-2">{professor.name}</h1>
            </div>
            <div className="paragraph">
              <p className="text-xl">{professor.description}</p>
            </div>
          </div>
          <div className="email flex mt-4">
            <span className="font-bold ">Email : &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <p>{professor.email}</p>
          </div>
          <div className="date flex mt-4">
            <span className="font-bold ">
              Year of joining : &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <p>{new Date(professor.startYear).toLocaleDateString()}</p>
          </div>
          <div className="date flex mt-4">
            <span className="font-bold ">
              Average rating : &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <p>{rating ? `${rating}/5` : "No reviews yet"}</p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Details;
