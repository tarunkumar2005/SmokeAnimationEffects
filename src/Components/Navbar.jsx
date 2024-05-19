import React from 'react';
import "./content-extra.css";

const Navbar = () => {
  return (
    <>
      <div className="logo cursor-pointer w-[20%] max-[767px]:p-[5%] md:py-[3%] min-[1025px]:w-[20%] md:w-[30%] max-[767px]:w-[50%] h-[6%]">
        <img src="./src/assets/images/MotionArtEffect-logo.png" className="w-full h-full object-cover" alt="" />
      </div>
      <div className="purchasebutton flex justify-center items-center min-[1025px]:flex md:hidden max-[767px]:hidden">
        <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" className="xl:px-10 max-[767px]:px-2  rounded-lg shadow-xl font-sora bg-white xl:py-4 max-[767px]:py-2 hover:bg-transparent border-2 border-[#0D051F] hover:border-2 hover:text-white hover:border-white" target="_blank" >
          <span className="xl:text-base max-[767px]:text-xs font-medium">Purchase Now</span>
        </a>
      </div>
    </>
  );
};

export default Navbar;