import React from 'react';
import Navbar from './Navbar';
import MiddleSection from './MiddleSection';
import QouteLine from './QouteLine';
import Trusted from './Trusted';
import TurnYourCursor from './TurnYourCursor';
import ApplySectionText from './ApplySectionText';
import BrowserSupport from './BrowserSupport';
import AllRounder from './AllRounder';
import "./content-extra.css";

const Content = () => {
  return (
    <div className="content 2xl:w-[65%] md:w-[95%] max-[767px]:w-[100%] h-fit overflow-y-auto">

      <div className="navabar flex justify-between py-[2%] mb-[6%]">
        <Navbar />
      </div>

      <div className="middlesection flex max-[767px]:flex-col max-[767px]:mt-[20%] md:mt-[10%] xl:mt-[5%] max-[767px]:items-center max-[767px]:justify-center w-full h-fit mb-[2%]">
        <MiddleSection />
      </div>

      <div className="qouteline flex justify-center items-center w-full h-fit xl:mb-[7%] max-[767px]:mb-[25%] md:mb-[10%]">
        <QouteLine />
      </div>

      <div className="trusted flex flex-col items-center w-full h-fit xl:mb-[10%] max-[767px]:mb-[25%]">
        <Trusted />
      </div>

      <div className="turnyourcursor w-full h-fit flex flex-row max-[767px]:flex-col mb-[10%] max-[767px]:mb-[30%]">
        <TurnYourCursor />
      </div>

      <div className="applysectiontext flex flex-col items-center w-full h-fit mb-[10%] max-[767px]:mb-[10%]">
        <ApplySectionText />
      </div>

      <div className="browserSupport w-full max-[767px]:w-[100%] h-fit xl:mb-[10%] md:mb-[20%] min-[1025px]:mb-[10%] max-[767px]:mb-[20%] flex justify-center">
        <BrowserSupport />
      </div>

      <div className="allrounder w-full h-fit mb-[10%]">
        <AllRounder />
      </div>

    </div>
  );
};

export default Content;