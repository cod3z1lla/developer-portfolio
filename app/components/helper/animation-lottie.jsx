"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;