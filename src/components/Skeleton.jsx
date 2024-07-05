import React from "react";

const Skeleton = () => {
  return (
    <div className="flex  h-60 md:w-52 flex-col gap-4">
      <div className="skeleton w-60 md:h-96 h-full md:w-80"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export default Skeleton;
