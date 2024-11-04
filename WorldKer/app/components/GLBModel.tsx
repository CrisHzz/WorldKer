import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

interface ModelProps {
  url: string;
  position?: [number, number, number];
  scale?: [number, number, number];
}

const Model: React.FC<ModelProps> = ({
  url,
  position = [0, 0, 0],
  scale = [2, 2, 2],
}) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} position={position} scale={scale} />;
};

interface GLBModelProps {
  position?: [number, number, number];
  scale?: [number, number, number];
}

const GLBModel: React.FC<GLBModelProps> = ({
  position = [0, 0, 0],
  scale = [7, 7, 7],
}) => {
  return (
    <Canvas
      camera={{
        fov: 10, // Cambia el FOV para hacer zoom (valores menores acercan la cámara)
        position: [-20, 2, 10], // Ajusta la posición de la cámara más cerca (el valor en Z determina el "zoom")
      }}
    >
      <ambientLight intensity={5} />
      <pointLight position={[10, 10, 10]} intensity={10} />
      <Model url="/RocketShip.glb" position={position} scale={scale} />
      <OrbitControls />
    </Canvas>
  );
};

export default GLBModel;
