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
      setError('Combinación del nombre de usuario y contraseña no válida');
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
      <div className="flex flex-col gap-4 items-center w-[26rem]">
        <div className="flex flex-col w-full">
          <label className="text-[12px]">Usuario:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-3 border border-gray-300 rounded-md text-[14px]"
            placeholder="Ingrese su usuario"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-[12px]">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-2 px-3 border border-gray-300 rounded-md text-[14px]"
            placeholder="*********"
          />
        </div>
        {error &&
          <div className="w-full bg-red-50 rounded-md flex py-3 px-6 mt-[-5px]">
            <p className="text-neutral-600 font-extralight text-[12px]">
              {error}
            </p>
          </div>
        }

        <button
          className="px-16 py-3 my-6 text-white bg-neutral-700 rounded-md text-[12px] hover:bg-neutral-800"
          onClick={handleLogin}
        >
          Ingresar
        </button>
      </div>
    </AuthForm>
  );
}