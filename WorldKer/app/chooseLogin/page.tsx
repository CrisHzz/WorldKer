"use client";
import { useRouter } from 'next/navigation';
import './chooseLogin.css';

const ChooseLogin: React.FC = () => {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <div className="choose-container">
      <h1>Elige una opción para iniciar sesión</h1>
      <div className="button-group">
        <button onClick={() => handleRedirect('/empresa-login')}>Empresa</button>
        <button onClick={() => handleRedirect('/login')}>Usuario</button>
      </div>
    </div>
  );
};

export default ChooseLogin;

