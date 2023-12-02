/* eslint-disable react/prop-types */
import { useRef } from "react";

const StarSelector = ({ handleClick, index }) => {
  const starsDiv = useRef();

  const handleHover = (e) => {
    const id = parseInt(e.target.id);
    const div = starsDiv.current;

    div.classList.remove("clicked");
    for (let i = 1; i <= 5; i++) {
      div.children[i - 1].classList.remove("text-yellow-500");
    }
    for (let i = 1; i <= id; i++) {
      div.children[i - 1].classList.add("text-yellow-500");
    }
  };

  const handleMouseLeave = (e) => {
    const id = parseInt(e.target.id);
    const div = starsDiv.current;
    if (!div.classList.contains("clicked")) {
      for (let i = 1; i <= id; i++) {
        div.children[i - 1].classList.remove("text-yellow-500");
      }
    }
  };
  return (
    <div className={`stars_${index} flex`} ref={starsDiv}>
      <div
        className=" text-3xl cursor-pointer"
        id="1"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        ★
      </div>
      <div
        className=" text-3xl cursor-pointer"
        id="2"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        ★
      </div>
      <div
        className=" text-3xl cursor-pointer"
        id="3"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        ★
      </div>
      <div
        className=" text-3xl cursor-pointer"
        id="4"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        ★
      </div>
      <div
        className=" text-3xl cursor-pointer"
        id="5"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        ★
      </div>
    </div>
  );
};

export default StarSelector;
