import React from 'react';
import "./content-extra.css";

const ApplySectionText = () => {
  return (
    <>
          <div className="applysectiontext1 text-[#EEE5FF] font-sora w-[55%] max-[767px]:w-[100%] text-center h-fit mb-[5%] md:mb-[10%] max-[767px]:mb-[20%]">
            <h1 className="xl:leading-[60px] max-[767px]:leading-[50px] max-[767px]:text-[26px] xl:text-[40px] md:text-[30px] md:leading-[50px]">Apply On Any Section Or Enable For Whole Page</h1>
          </div>
          <div className="applysectionpart2 w-full h-fit flex max-[767px]:items-center flex-row max-[767px]:flex-col gap-[2%]">
            <div className="applycont w-[49%] max-[767px]:w-[95%] h-fit border-2 max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center rounded-3xl border-[#FFFFFF10] max-[767px]:py-[10%] md:py-[7%] max-[767px]:px-[10%] py-[3%] px-[5%]">
              <h1 className="text-[#EEE5FF] font-sora text-[25px] mb-[5%] max-[767px]:text-[20px] max-[767px]:leading-[40px] leading-[45px]">Apply On Section</h1>
              <p className="text-[#EEE5FFBD] font-outfit text-[19px] mb-[5%] leading-[30px] max-[767px]:text-[16px] max-[767px]:text-center">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
              <div className="applyimage w-full h-full">
                <img src="./src/assets/images/motionarteffect-img11.png" className="w-full h-full object-cover" alt=""></img>
              </div>
            </div>
  
            <div className="applycont w-[49%] max-[767px]:w-[95%] h-fit border-2 max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center rounded-3xl border-[#FFFFFF10] max-[767px]:py-[10%] md:py-[7%] max-[767px]:px-[10%] py-[3%] mt-[5%] md:mt-[10%] px-[5%]">
              <h1 className="text-[#EEE5FF] font-sora text-[25px] mb-[5%] max-[767px]:text-[20px] max-[767px]:leading-[40px] leading-[45px]">Apply On Page</h1>
              <p className="text-[#EEE5FFBD] font-outfit text-[19px] mb-[5%] leading-[30px] max-[767px]:text-[16px] max-[767px]:text-center">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
              <div className="applyimage w-full h-full">
                <img src="./src/assets/images/motionarteffect-img10.png" className="w-full h-full object-cover" alt=""></img>
              </div>
            </div>
          </div>
    </>
  );
};

export default ApplySectionText;