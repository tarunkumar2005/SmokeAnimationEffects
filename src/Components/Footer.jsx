import React from 'react';
import "./content-extra.css";

const Footer = () => {
  return (
    <>
      <footer className="w-screen xl:h-fit xl:min-h-[5vh] flex justify-center md:h-[10vh] md:items-center max-[767px]:items-center max-[767px]:h-[20vh]">
        <div className="footerdata xl:w-[80%] text-[#EEE5FFB8] md:w-[80%] font-outfit text-[14px] font-normal justify-between flex flex-row max-[767px]:flex-col items-center h-[50%] max-[767px]:justify-center max-[767px]:gap-[20%]">
          <div className="part1 max-[767px]:text-center">
            <h1>&copy; 2024 Copyright. All rights reserved by Tarun Kumar</h1>
          </div>
          <div className="part2 flex flex-row gap-[20%] max-[767px]:gap-[35%] max-[767px]:justify-center">
            <a href="#">Documentation</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;