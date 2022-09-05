import React from "react";
import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";

const Meals = () => {
  return (
    <section
      id="mealsSection"
      className="md:max-w-7xl xl:max-w-screen-2xl max-w-sm mx-auto  "
    >
      <div className="hero_section_container pt-40 px-8 flex flex-col  items-center gap-12 justify-between ">
        <div className="heading mb-8 max-w-md text-center">
          <h3 className="text-white  mb-5   text-3xl md:text-4xl font-semibold">
            Special Meals of the day!
          </h3>
          <p className="text-white">
            Check our sepecials of the day and get discounts on all our meals
            and swift delivery to what ever location within Ilorin.
          </p>
        </div>
        <div className="body md:flex gap-20">
          <div className="img1 mb-8 text-center  w-40 md:w-60">
            <img src={food1} alt="" className="mb-8 rounded-full w-full" />
            <h4 className="text-lilybrown mb-4  text-2xl md:text-3xl font-bold">
              Stir fry Pasta
            </h4>
            <p className="text-white">
              Stir fry pasta yada yada yada because of Sesan
            </p>
          </div>
          <div className="img2 mb-8  text-center w-40 md:w-60">
            <img src={food2} alt="" className="mb-8 rounded-full w-full" />
            <h4 className="text-lilybrown  mb-4  text-2xl md:text-3xl font-bold">
              Meat ball
            </h4>
            <p className="text-white">
              Stir fry pasta yada yada yada because of Sesan
            </p>
          </div>
          <div className="img3 mb-8 text-center  w-40 md:w-60">
            <img src={food3} alt="" className="mb-8 rounded-full w-full" />
            <h4 className="text-lilybrown  mb-4   text-2xl md:text-3xl font-bold">
              Burger Meal
            </h4>
            <p className="text-white">
              Stir fry pasta yada yada yada because of Sesan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meals;
