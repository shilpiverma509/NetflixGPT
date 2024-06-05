import React from "react";
import langConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchInputBar = () => {
  const { lang } = useSelector((store) => store.config);
  return (
    <div className="pt-[5%] flex justify-center">
      <form className=" z-10  w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={langConstants?.[lang].gptSearchPlaceholder}
          className=" col-span-9 p-4 m-4 text-wrap"
        />
        <button className="m-4 col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg">
          {langConstants?.[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchInputBar;
