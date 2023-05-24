import React from "react";
import styles from "../styles/slider.module.css";

const Slider = ({ children, title }) => {
  return (
    <div>
      <h1 className="text-center font-proxima_bold text-xl text-[#48bb78] mt-7 md:mt-14">
        {title}
      </h1>
      <div className="w-full relative overflow-hidden p-16 my-10 h-fit">
        <div className={`${styles.logo} flex absolute left-0`}>
          <div className={`flex w-1/2 justify-around`}>{children}</div>
          <div className="flex w-1/2 justify-around">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;