import { Html, useProgress, Text } from "@react-three/drei";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <div>{progress} % loaded</div>;
  console.log(progress);
}

export default Loader;
