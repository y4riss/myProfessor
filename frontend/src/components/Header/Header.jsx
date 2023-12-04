/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Header = ({ img, title, description, btn, bg }) => {
  return (
    <header className={`grid grid-cols-2 px-48 py-32 gap-10 ${bg}`}>
      <section className="grid justify-start gap-8">
        <div className="title">
          <h1 className="font-bold text-7xl">{title}</h1>
        </div>
        <div className="paragraph">
          <p className="text-xl">{description}</p>
        </div>
        {btn && (
          <div className="button">
            <Link to="/professors" className="btn btn-primary text-lg btn-lg">
              {btn}
            </Link>
          </div>
        )}
      </section>
      <section className="">
        <div className="img rounded overflow-hidden w-full max-h-[550px]  flex justify-end">
          <img src={img} alt="header_image" className="rounded min-w-full" />
        </div>
      </section>
    </header>
  );
};

export default Header;
