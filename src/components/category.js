import React from "react";

const Category = () => {
  return (
    <nav className='self-stretch h-[105px] flex-col justify-start items-center gap-8 inline-flex'>
      <p className="self-stretch text-center text-neutral-900 text-2xl font-medium font-['Montserrat']">
        Category
      </p>
      <div className='self-stretch justify-start items-center gap-4 inline-flex'>
        <div className='px-6 py-3 rounded-[40px] border border-zinc-500/opacity-60 justify-center items-center gap-2.5 flex'>
          <p className="text-zinc-500/opacity-60 text-base font-medium font-['Montserrat']">
            Office Furnitures
          </p>
        </div>
        <p
          className='px-6 py-3 rounded-[40px] border border-zinc-500/opacity-60
          justify-center items-center gap-2.5 flex'
        >
          <p className="text-zinc-500/opacity-60 text-base font-medium font-['Montserrat']">
            Workspace
          </p>
        </p>
        <div className='px-6 py-3 rounded-[40px] border border-zinc-500/opacity-60 justify-center items-center gap-2.5 flex'>
          <p className="text-zinc-500/opacity-60 text-base font-medium font-['Montserrat']">
            Kitchen
          </p>
        </div>
        <div className='px-6 py-3 rounded-[40px] border border-zinc-500/opacity-60 justify-center items-center gap-2.5 flex'>
          <p className="text-zinc-500/opacity-60 text-base font-medium font-['Montserrat']">
            Kitchen
          </p>
        </div>
        <div className='px-6 py-3 rounded-[40px] border border-zinc-500/opacity-60 justify-center items-center gap-2.5 flex'>
          <p className="text-zinc-500/opacity-60 text-base font-medium font-['Montserrat']">
            Bedroom
          </p>
        </div>
        <div className='px-6 py-3 rounded-[40px] border border-zinc-500/opacity-60 justify-center items-center gap-2.5 flex'>
          <p className="text-zinc-500/opacity-60 text-base font-medium font-['Montserrat']">
            Sitting room
          </p>
        </div>
        <div className='px-6 py-3 rounded-[40px] border border-zinc-500/opacity-60 justify-center items-center gap-2.5 flex'>
          <p className="text-zinc-500/opacity-60 text-base font-medium font-['Montserrat']">
            Lounge
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Category;
