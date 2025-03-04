import React from "react";

const ReviewCard = ({ img, name }) => {
  return (
    <div className="bg-slate-50 border-2 border-black md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,0.24)_0px_3px_8px]">
      <div >
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          at, quis aliquam adipisci, quos tempore obcaecati, praesentium eius
          cum est quaerat? Provident ipsum laboriosam nulla sunt. Architecto
          totam quam et!
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <img className=" rounded-full w-1/4" src={img} alt="" />
        <h3 className="font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
