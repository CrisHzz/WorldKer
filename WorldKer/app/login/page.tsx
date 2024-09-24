"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import './login.css';
import { useRouter } from 'next/navigation';

export default function Login(): JSX.Element {
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formData); // Aquí iría la lógica para el login
  };

  const router = useRouter();

  const goBack = (): void => {
    router.back();
  };

  return (
    <div className="container">
      <div className="main">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <label className="login-title">Iniciar Sesión</label>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Iniciar Sesión</button>
          </form>
          <button onClick={goBack}>Regresar</button>
        </div>
      </div>
    </div>
  );
}

