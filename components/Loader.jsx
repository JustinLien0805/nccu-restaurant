import React from "react";
import { InfinitySpin } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 ">
      <InfinitySpin width="200" color="#3dd1bb" />
    </div>
  );
};

export default Loader;
