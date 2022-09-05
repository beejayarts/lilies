import React, { useEffect } from "react";

const MailSection = () => {
  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((response) => response.json());

    console.log(response);
  };

  fetchData();

  return (
    <section
      id="mealsSection"
      className="md:max-w-7xl xl:max-w-screen-2xl max-w-sm mx-auto  "
    >
      <div className="mail_section_container font-[poppins] pt-40 px-8 flex flex-col md:flex-row  items-center gap-12 justify-around ">
        <div className="left">
          <h3 className="text-lilybrown  mb-5   text-3xl md:text-4xl font-semibold">
            Get notified when we update!
          </h3>
          <p className="max-w-md text-white">
            Get notified when we add new items to our specials menu, update our
            price list of have promos!
          </p>
        </div>
        <div className="right">
          <form className="flex gap-4">
            <input
              placeholder="beejay@gmail.com"
              className="bg-white py-3 px-8 rounded-md focus:outline-none "
            />
            <button className="bg-lilybrown rounded-md py-3 px-6 font-[poppins]">
              Get notified
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MailSection;
