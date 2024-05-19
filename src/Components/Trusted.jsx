import React from 'react';
import "./content-extra.css";

const Trusted = () => {
  return (
    <>
      <div className="trustedSection1">
            <div className="text1 text-[#EEE5FF] max-[767px]:text-[22px] md:text-[22px] xl:text-[24px] font-outfit">
              <h1 className="max-[767px]:text-center">Trusted by thousands of users around the world</h1>
            </div>
          </div>
          <div className="trustedSection2 flex flex-row max-[767px]:flex-col max-[767px]:items-center max-[767px]:gap-[40px] max-[767px]:justify-center justify-between max-[767px]:mt-[20%] md:mt-[10%] md:flex-wrap mt-[5%] md:justify-center md:gap-[10%] w-full h-fit">
  
            <div className="box1 flex flex-row gap-[5%] xl:w-[25%] min-[1025px]:w-[25%] md:w-[40%] md:mb-[5%] max-[767px]:w-[80%]">
              <div className="img xl:w-[30%] min-[1025px]:w-[40%] h-full">
                <img src="./src/assets/images/motionarteffect-img2.png" className="w-full h-full object-cover" alt=""></img>
              </div> 
              <div className="part2 flex flex-col justify-center items-center gap-[10%]">
                <div className="stars">
                  <img src="./src/assets/images/motionarteffect-img4.png" alt=""></img>
                </div>
                <div className="review xl:text=[14px] min-[1025px]:text-[13px] font-sora text-[#EEE5FFBD]">
                  <span><strong>4.5</strong> Score, 9 Reviews</span>
                </div>
              </div>
            </div>
  
            <div className="box2 flex flex-row gap-[5%] xl:w-[25%] min-[1025px]:w-[25%] md:w-[40%] md:mb-[5%] max-[767px]:w-[80%]">
              <div className="img xl:w-[30%] min-[1025px]:w-[40%] h-full">
                <img src="./src/assets/images/motionarteffect-img1.png" className="w-full h-full object-cover" alt=""></img>
              </div> 
              <div className="part2 flex flex-col justify-center items-center gap-[10%]">
                <div className="stars">
                  <img src="./src/assets/images/motionarteffect-img4.png" alt=""></img>
                </div>
                <div className="review xl:text=[14px] min-[1025px]:text-[13px] font-sora text-[#EEE5FFBD]">
                  <span><strong>4.5</strong> Score, 9 Reviews</span>
                </div>
              </div>
            </div>
  
            <div className="box3 flex flex-row gap-[5%] xl:w-[25%] min-[1025px]:w-[25%] md:w-[40%] md:mb-[5%] max-[767px]:w-[80%]">
              <div className="img xl:w-[30%] min-[1025px]:w-[40%] h-full">
                <img src="./src/assets/images/motionarteffect-img3.png" className="w-full h-full object-cover" alt=""></img>
              </div> 
              <div className="part2 flex flex-col justify-center items-center gap-[10%]">
                <div className="stars">
                  <img src="./src/assets/images/motionarteffect-img4.png" alt=""></img>
                </div>
                <div className="review xl:text=[14px] min-[1025px]:text-[13px] font-sora text-[#EEE5FFBD]">
                  <span><strong>4.5</strong> Score, 9 Reviews</span>
                </div>
              </div>
            </div>
  
          </div>
    </>
  );
};

export default Trusted;