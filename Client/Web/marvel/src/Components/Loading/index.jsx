import React from "react";
import Lottie from "react-lottie";

import hero from "../../Assets/Animacoes/super_hero.json";
import "./loading.css";

const options = {
  loop: true,
  autoplay: true,
  animationData: hero,
};

const LoadingGlobal = () => (
  <div className="loading-container">
    <Lottie options={options} height={200} width={200} />
  </div>
);

export default LoadingGlobal;
