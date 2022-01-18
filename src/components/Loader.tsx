import Spinner from "react-spinner-material";
import React from "react";

const Loader = () => {
  return (
    <div>
      <Spinner radius={30} color={"#333"} stroke={2} visible={true} />
    </div>
  );
};

export default Loader;
