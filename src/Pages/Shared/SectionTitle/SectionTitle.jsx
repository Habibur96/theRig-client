import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-14">
      <p className="text-yellow-600 text-lg mb-2">--- {subHeading} ---</p>
      <h3 className="text-3xl uppercase border-y-4 p-y-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
