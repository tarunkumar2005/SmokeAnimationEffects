import React from 'react';
import "./content-extra.css";

const TurnYourCursor = () => {
  return (
    <>
          <div className="leftSection text-[#EEE5FF] xl:w-[60%] md:w-[60%] max-[767px]:w-[100%] max-[767px]:mb-[15%]">
            <h1 className="font-sora max-[767px]:text-[25px] md:text-[30px] md:leading-[50px] max-[767px]:leading-[45px] xl:leading-[60px] max-[767px]:text-center xl:text-[40px] mb-[2%] max-[767px]:mb-[5%]">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
            <p className="font-outfit text-[#EEE5FFBD] md:text-[18px] md:leading-[30px] xl:leading-[30px] max-[767px]:text-[16px] max-[767px]:text-center xl:text-[19px] mb-[5%] max-[767px]:mb-[10%]">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            <div className="cursorbutton flex max-[767px]:justify-center w-full h-fit">
              <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" className="px-12 max-[767px]:px-6 rounded-2xl shadow-xl font-sora max-[767px]:py-5 py-4" target="_blank" >
                <div className="textbutton flex justify-center items-center gap-[5%] font-sora text-[20px]">
                  <span className="whitespace-nowrap">Purchase From Envato</span>
                  <span className="material-symbols-outlined arrow-cursor-button-part">arrow_forward</span>
                </div>
              </a>
            </div>
          </div>
          <div className="rightSection xl:w-[33%] md:w-[40%] max-[767px]:w-[100%]">
            <div className="rightSectionImage w-full h-full">
              <img src="./src/assets/images/motionarteffect-img5.png" className="w-full h-full object-cover" alt=""></img>
            </div>
          </div>
    </>
  );
};

export default TurnYourCursor;