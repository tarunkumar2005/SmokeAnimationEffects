import React from 'react';
import "./content-extra.css";

const MiddleSection = () => {
  return (
    <>
      <div className="section1 xl:w-[25%] max-[767px]:w-[100%] flex flex-col gap-[1%] font-sora">
        <div className="text1 flex flex-col max-[767px]:items-center px-[5%]">
          <span><span className="xl:text-lg max-[767px]:text-xl md:text-[18px] max-[767px]:mb-[5%]">Transform</span></span>
          <span><span className="xl:text-lg max-[767px]:text-xl max-[767px]:mb-[10%]">Your Website</span></span>
        </div>
        <div className="text2 flex flex-col max-[767px]:hidden px-[5%] text-[#EEE5FF]">
          <span className="xl:text-lg max-[767px]:text-base md:text-[17px]">With Motion Art</span>
          <span className="xl:text-lg max-[767px]:text-base md:text-[17px]">Effect</span>
        </div>
        <div className="text2 justify-center mb-[10%] max-[767px]:flex md:hidden px-[5%] text-[#EEE5FF]">
          <span className="text-lg">With Motion Art Effect</span>
        </div>
      </div>
      <div className="section2 xl:w-[52%] md:w-[60%] max-[767px]:w-[100%] max-[767px]:mb-[10%]">
        <div className="text1 w-[100%] flex flex-col px-[2%] max-[767px]:items-center font-sora text-[#EEE5FF]">
          <h1 className="xl:text-[65px] max-[767px]:text-[38px] md:text-[40px] md:leading-[60px] min-[1025px]:text-[55px] min-[1025px]:leading-[75px] max-[767px]:text-center max-[767px]:leading-[55px] xl:leading-[85px]">Attract Your Visitors Attention With Colorful</h1>
          <span className="text-[65px] max-[767px]:text-center md:text-[40px] min-[1025px]:text-[55px] min-[1025px]:leading-[75px] md:leading-[60px] max-[767px]:text-[38px] ">Motion Art Effect</span>
        </div>
      </div>
      <div className="section3 w-[20%]">
      </div>
    </>
  );
};

export default MiddleSection;