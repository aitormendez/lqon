import { useStore } from '@nanostores/react';
import { isAnimating } from './stores'; // Asegúrate de que la ruta sea correcta

const Menu = () => {
  const animating = useStore(isAnimating);

  const handleAnimationStart = () => {
    isAnimating.set(true);
  };

  return (
    <button
      className="text-white p-4 rounded bg-black m-4"
      onClick={handleAnimationStart}
    >
      Start Animation
    </button>
  );
};

export default Menu;
