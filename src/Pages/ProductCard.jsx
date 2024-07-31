import React from "react";
import image1 from "../assets/image 1.png"

function ProductCard({title, subTitle, guide, description }) {
  return (
    <div className="w-full bg-customColorbg">
      <div className="flex pt-20 pl-40 pr-40 justify-between gap-10">
        <div className="w-1/2 mb-20 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl">{title}</h1>
            <p>{subTitle}</p>
          </div>
          <div className="relative">
            <h1 className="text-2xl">Plant Care Guide</h1>
            <hr className="border-t-2 mt-5 border-inputColorbg" />
            <div className="flex pt-5 w-full">
              <div className="w-1/2">Water</div>
              <div className="w-1/2">{guide.water}</div>
            </div>
            <hr className="border-t-2 mt-5 border-inputColorbg" />
            <div className="flex pt-5">
              <div className="w-1/2">Light</div>
              <div className="w-1/2">{guide.light}</div>
            </div>
            <hr className="border-t-2 mt-5 border-inputColorbg" />
            <div className="flex pt-5">
              <div className="w-1/2">Tips</div>
              <div className="w-1/2">{guide.tips}</div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Description</h1>
            <hr className="border-t-2 mt-5 border-inputColorbg" />
            <p className="pt-5">{description}</p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={image1} width={350} alt="Plant" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
