import React, { useState, useEffect } from "react";
import { AuthForm } from "./Components/AuthForm";
import signInImg from "./assets/images/login-01.jpg";
import { navigateToUrl } from 'single-spa';
import Logos from "./assets/icons/allogosmybodytech.svg";
import { users } from './mockUsers';
import { store, loginSuccess } from '@MyBodytech/mf-store-auth';

export default function Root() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      const fakeToken = 'este_es_un_token_quemado_pero_simula_uno_real';
      localStorage.setItem('authToken', fakeToken);
      setCookie('user', JSON.stringify(user), 1);
      store.dispatch(loginSuccess({
        user,
        token: fakeToken,
      }));
      navigateToUrl('/home');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  return (
    <AuthForm
      isLogin={true}
      image={signInImg}
      title={"Ingresa a My BodyTech"}
      logo={Logos}
    >
      <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label className="text-[14px]">Usuario:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="text-[14px]">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </div>
    </AuthForm>
  );
}