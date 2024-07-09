import React from "react";
import user from "../assets/images/user.svg";
import cart from "../assets/images/cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='w-[1210px] max-w-full h-[39px] justify-between items-center inline-flex'>
      <p className="text-teal-900 text-[32px] font-normal font-['Inria Serif']">
        Elegant Furnitures
      </p>
      <div className='justify-start items-center gap-10 flex'>
        <div className='justify-start items-start gap-8 flex'>
          <div className='p-2.5 justify-center items-center gap-2.5 flex'>
            <Link
              to='/'
              className="text-teal-900 text-base font-normal font-['Inter']"
            >
              Home
            </Link>
          </div>
          <div className='p-2.5 justify-center items-center gap-2.5 flex'>
            <p className="text-teal-900 text-base font-normal font-['Inter']">
              About Us
            </p>
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
  );
};

export default Header;
