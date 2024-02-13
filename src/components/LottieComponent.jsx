import { useLottie } from "lottie-react";

function LottieComponent({ json, loop }) {
  const options = {
    animationData: json,
    loop: loop,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
}

export default LottieComponent;
