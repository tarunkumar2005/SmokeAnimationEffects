import React from 'react';
import "./content-extra.css";

const BrowserSupport = () => {
  return (
    <>
          <div className="browserinner max-[767px]:w-[85%] md:w-[95%] flex items-center flex-col rounded-3xl border-2 border-[#FFFFFF10] md:px-[10%] min-[1025px]:px-[20%] md:py-[8%] max-[767px]:px-[10%] max-[767px]:py-[15%] xl:px-[3%] xl:py-[2%]">
            <h1 className="text-[#EEE5FF] xl:mb-[2%] md:mb-[5%] max-[767px]:text-center font-sora md:text-[30px] md:leading-[50px] max-[767px]:text-[20px] max-[767px]:leading-[40px] max-[767px]:mb-[10%] xl:text-[25px]">Supported by All Popular Browsers</h1>
            <p className="text-[#EEE5FFBD] xl:leading-[30px] max-[767px]:text-center text-center w-[85%] md:text-[18px] md:leading-[30px] max-[767px]:w-[100%] font-outfit xl:text-[19px] xl:mb-[2%] md:mb-[8%] max-[767px]:mb-[20%]">Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
            <div className="image w-[60%] h-full">
              <img src="./src/assets/images/motionarteffect-img8.png" className="w-full h-full object-cover" alt=""></img>
            </div>
          </div>
    </>
  );
};

export default BrowserSupport;