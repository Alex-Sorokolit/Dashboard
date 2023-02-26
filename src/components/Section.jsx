import React from "react";

const Section = ({ children }) => {
  return (
    <section className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white  dark:bg-secondary-dark-bg drop-shadow-md rounded-lg">
      {children}
    </section>
  );
};

export default Section;
