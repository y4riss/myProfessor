/* eslint-disable react/prop-types */
import { useState } from "react";

const Search = ({ professors, setProfessors }) => {
  const [input, setInput] = useState("");

  const filterBySearch = () => {
    let updatedList = [...professors];
    updatedList = updatedList.filter(
      (item) => item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
    );

    setProfessors(updatedList);
    console.log(updatedList);
  };
  return (
    <div className="mb-3 xl:w-96 mt-4">
        <h1 className="font-bold py-2" >Search for a professor</h1>
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Type here..."
          aria-label="Search"
          aria-describedby="button-addon2"
          onKeyUp={filterBySearch}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />


      </div>
    </div>
  );
};

export default Search;
