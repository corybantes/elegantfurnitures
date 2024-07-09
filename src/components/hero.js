import React from "react";
import Frame894 from "../assets/images/Frame894.svg";
import Frame892 from "../assets/images/Frame892.svg";
import line4 from "../assets/images/line4.svg";
import back from "../assets/images/back.svg";
import cart from "../assets/images/cart.svg";
import user from "../assets/images/user.svg";

const Hero = () => {
  return (
    <div className='w-[1440px] h-[911px] relative bg-green-50'>
      <div className='w-[798px] h-[1024px] left-0 top-0 absolute bg-teal-900'>
        <div className='p-2.5 left-[110px] top-[206px] absolute justify-center items-center gap-2.5 inline-flex'>
          <p className="w-[466px] text-green-50 text-6xl font-bold font-['Inria Serif']">
            Furniture that speaks your personality
          </p>
        </div>
        <div className='p-2.5 left-[110px] top-[466px] absolute justify-center items-center gap-2.5 inline-flex'>
          <p className="w-[466px] text-green-50 text-2xl font-normal font-['Inter']">
            Breathe new life into your space with elegant design by discovering
            the perfect embodiment of your unique style today.
          </p>
        </div>
        <div className='px-3 py-1.5 left-[120px] top-[660px] absolute bg-green-50 rounded-[14px] flex-col justify-start items-start gap-2.5 inline-flex'>
          <div className='px-2.5 py-1.5 justify-center items-center gap-2.5 inline-flex'>
            <p className="text-teal-900 text-base font-semibold font-['Inter']">
              Explore Now
            </p>
            <div className='h-[37px] pl-[9px] pr-2 pt-[9px] pb-1 bg-teal-900 rounded-md justify-center items-center flex'>
              <img src={back} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-[662px] h-[595px] left-[668px] top-[178px] absolute bg-slate-500' />
      <img
        className='w-[662px] h-[596px] left-[658px] top-[190px] absolute'
        src={Frame894}
        alt=''
      />
      <div className='w-[1210px] left-[115px] top-[32px] absolute justify-between items-center inline-flex'>
        <p className="text-white text-[32px] font-normal font-['Inria Serif']">
          Elegant Furnitures
        </p>
        <div className='justify-start items-center gap-10 flex'>
          <div className='justify-start items-start gap-8 flex'>
            <div className='p-2.5 justify-center items-center gap-2.5 flex'>
              <p className="text-green-50 text-base font-normal font-['Inter']">
                Home
              </p>
            </div>
            <div className='p-2.5 justify-center items-center gap-2.5 flex'>
              <div>
                <span className="text-green-50 text-base font-normal font-['Inter']">
                  Abou
                </span>
                <span className="text-teal-900 text-base font-normal font-['Inter']">
                  t Us
                </span>
              </div>
            </div>
            <div className='p-2.5 justify-center items-center gap-2.5 flex'>
              <p className="w-[67px] text-teal-900 text-base font-normal font-['Inter']">
                Contact
              </p>
            </div>
          </div>
          <img className='w-[18px] h-[18px] relative' src={cart} alt='' />
        </div>
        <div className='w-6 h-6 relative'>
          <div className='w-4 h-5 left-[4px] top-[2px] absolute'>
            <img src={user} alt='' />
          </div>
        </div>
      </div>
      <div className='w-[490px] h-[19px] left-[737px] top-[818px] absolute'>
        <img className='w-[93px] top-[10px] absolute' src={Frame892} alt='' />

        <p className="left-[137px] absolute text-teal-900 text-base font-semibold font-['Inter']">
          1
        </p>
        <p className="left-[189px] absolute text-teal-900 text-xs font-normal font-['Inter']">
          2
        </p>
        <p className="left-[241px] absolute text-teal-900 text-xs font-normal font-['Inter']">
          3
        </p>
        <p className="left-[293px] absolute text-teal-900 text-xs font-normal font-['Inter']">
          4
        </p>
        <p className="left-[345px] absolute text-teal-900 text-xs font-normal font-['Inter']">
          5
        </p>
        <img className='left-[393px] top-[10px] absolute' src={line4} alt='' />
      </div>
    </div>
  );
};

export default Hero;
