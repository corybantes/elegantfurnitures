import React from "react";
import facebook from "../assets/images/facebook.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";
import google from "../assets/images/google.svg";
import insta from "../assets/images/insta.svg";
import rectangle1 from "../assets/images/rectangle1.svg";
import rectanglef from "../assets/images/rectanglef.svg";

const Footer = () => {
  return (
    <div className='w-[1440px] h-[487px] px-[100px] pt-[60px] pb-8 bg-teal-900 justify-center items-center inline-flex'>
      <div className='self-stretch flex-col justify-start items-center gap-10 inline-flex'>
        <div className='flex-col justify-start items-start gap-[60px] flex'>
          <div className='w-[1240px] justify-between items-start inline-flex'>
            <div className='flex-col justify-start items-start gap-10 inline-flex'>
              <div className='flex-col justify-start items-start gap-6 flex'>
                <p className="text-white text-2xl font-medium font-['Montserrat']">
                  Contact
                </p>
                <div className='flex-col justify-start items-start gap-4 flex'>
                  <p className="text-white text-base font-normal font-['Montserrat']">
                    For your orders contact us on
                  </p>
                </div>
              </div>
              <div className='flex-col justify-start items-start gap-8 flex'>
                <div className='flex-col justify-start items-start gap-4 flex'>
                  <div className='flex-col justify-start items-start gap-8 flex'>
                    <p className="text-white text-base font-normal font-['Montserrat']">
                      elegantfurnitures@gmail.com
                    </p>
                  </div>
                  <p className="text-white text-base font-normal font-['Montserrat']">
                    +2347013781800
                  </p>
                </div>
              </div>
            </div>
            <div className='flex-col justify-start items-center gap-[60px] inline-flex'>
              <div className='flex-col justify-start items-start gap-4 flex'>
                <p className="w-[296px] text-center text-white text-[32px] font-normal font-['Inria Serif']">
                  Elegant Furnitures
                </p>
                <p className="self-stretch text-center text-white text-base font-normal font-['Montserrat']">
                  We speak your personality!
                </p>
              </div>
              <div className='justify-start items-start gap-10 inline-flex'>
                <p className="text-white text-base font-normal font-['Montserrat']">
                  Home
                </p>
                <p className="text-white text-base font-normal font-['Montserrat']">
                  Specials
                </p>
                <p className="text-white text-base font-normal font-['Montserrat']">
                  About
                </p>
                <p className="text-white text-base font-normal font-['Montserrat']">
                  Contact Us
                </p>
              </div>
              <div className='flex-col justify-start items-start gap-4 flex'>
                <div className='justify-start items-start gap-10 inline-flex'>
                  <div className='w-7 h-7 relative'>
                    <img
                      className='w-7 h-7 left-0 top-0 absolute bg-teal-900/opacity-80 rounded-[5px]'
                      src={rectanglef}
                      alt=''
                    />
                    <img
                      className='w-6 h-6 left-[2px] top-[2px] absolute'
                      src={facebook}
                      alt=''
                    />
                  </div>
                  <div className='w-7 h-7 relative'>
                    <img
                      className='w-7 h-7 left-0 top-0 absolute bg-teal-900/opacity-80 rounded-[5px]'
                      src={linkedin}
                      alt=''
                    />
                  </div>
                  <div className='w-7 h-7 relative'>
                    <img
                      className='w-7 h-7 left-0 top-0 absolute bg-teal-900/opacity-80 rounded-[5px]'
                      src={rectanglef}
                      alt=''
                    />
                    <img
                      className='w-6 h-6 left-[2px] top-[2px] absolute'
                      src={insta}
                      alt=''
                    />
                  </div>
                  <div className='w-7 h-7 relative'>
                    <img
                      className='w-7 h-7 left-0 top-0 absolute bg-teal-900/opacity-80 rounded-[5px]'
                      src={rectanglef}
                      alt=''
                    />
                    <img
                      className='w-6 h-6 left-[2px] top-[2px] absolute'
                      src={twitter}
                      alt=''
                    />
                  </div>
                  <div className='w-7 h-7 relative'>
                    <img
                      className='w-7 h-7 left-0 top-0 absolute bg-teal-900/opacity-80 rounded-[5px]'
                      src={rectanglef}
                      alt=''
                    />
                    <img
                      className='w-6 h-6 left-[2px] top-[2px] absolute'
                      src={google}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-col justify-start items-start gap-8 inline-flex'>
              <p className="text-white text-2xl font-medium font-['Montserrat']">
                Our Office
              </p>
              <div className='flex-col justify-start items-start gap-8 flex'>
                <p className="w-[265px] text-white text-base font-normal font-['Montserrat']">
                  Visit us at any of our offices
                </p>
                <div className='self-stretch h-16 flex-col justify-start items-start gap-1 flex'>
                  <p className="self-stretch text-white text-base font-medium font-['Montserrat']">
                    Head office
                  </p>
                  <p className="self-stretch text-white text-base font-normal font-['Montserrat']">
                    10, Adetokunbo Ademola Cresent, maitama, Abuja.
                  </p>
                </div>
                <div className='self-stretch h-16 flex-col justify-start items-start gap-1 flex'>
                  <p className="self-stretch text-white text-base font-medium font-['Montserrat']">
                    Branch office
                  </p>
                  <p className="self-stretch text-white text-base font-normal font-['Montserrat']">
                    20, Lamil Adeoya Cresent, Ikeja, Lagos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className='w-[1240px] h-0.5 bg-red-50/opacity-20'
            src={rectangle1}
            alt=''
          />
        </div>
        <div className='w-[1240px] justify-between items-start inline-flex'>
          <p className="text-white text-base font-normal font-['Montserrat']">
            Copyright 2023. All Rights Reserved
          </p>
          <p className="text-white text-base font-normal font-['Montserrat']">
            Privacy policy
          </p>
          <p className="text-white text-base font-normal font-['Montserrat']">
            Terms of service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
