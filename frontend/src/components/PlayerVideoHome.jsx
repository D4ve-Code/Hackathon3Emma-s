import React from "react";

import Clip from "../assets/videos/videoFaqHomePage.mp4";

const PlayerVideoHome = () => {
  return (
    <>
      <video width="100%" height="100%" controls>
        <source src={Clip} type="video/mp4" />
      </video>
    </>
  );
};

export default PlayerVideoHome;
