import React, { useRef } from "react";

const DashHomeSlider = () => {
  const sliderRef = useRef();

  return (
    <div>
      <div
        ref={sliderRef}
        className="w-full flex gap-[1.2rem] px-[1%] py-[1rem] overflow-hidden scroll-smooth"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((e, index) => (
          <div
            key={index}
            className="card min-w-[25rem] px-[1rem] pt-[1rem] pb-[2rem] relative flex flex-col justify-center items-center gap-[0.8rem] bg-gray-800 border-gray-900 border-[0.3rem] rounded-xl cursor-pointer hover:scale-[1.03] group/trainerCard transition-all"
          >
            <figure className="w-[8rem] overflow-hidden">
              <img
                src={TrainerPic}
                alt="Trainer"
                className="border-gray-900 border-[0.3rem] rounded-full object-cover"
              />
            </figure>

            <figcaption className="flex flex-col gap-[1rem] text-[1.7rem] leading-[1.7rem] font-quick font-semibold text-center">
              <span className="text-white">Muhammad Sufiyan</span>
            </figcaption>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashHomeSlider;
