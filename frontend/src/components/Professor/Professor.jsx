/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Professor = ({ prof }) => {
  return (
    <div className="professor w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex align-middle justify-center items-center">
      <div className="card w-60 bg-base-100 shadow-xl">
        <figure>
          <img src={`/imgs/${prof.image}`} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{prof.name}</h2>
          <p>{prof.description}</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" to={`/professors/${prof.id}`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professor;
