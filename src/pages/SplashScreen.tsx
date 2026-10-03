import React, { useEffect, useState } from "react";
import reactLogo from "./../assets/react.svg";
import { useNavigate } from "react-router-dom";

export const SplashScreen = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  // 1. Lógica del cronómetro (Progreso)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 30); // 30ms * 100 = ~3 segundos de carga
    
    return () => clearInterval(timer);
  }, []);

  // 2. Lógica de Navegación (Separada para evitar el error de HashRouter)
  useEffect(() => {
    if (progress === 100) {
      // Usamos un pequeño delay para que el usuario vea el 100% un instante
      const redirectTimeout = setTimeout(() => {
        navigate("/login");
      }, 200);
      return () => clearTimeout(redirectTimeout);
    }
  }, [progress, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-950 text-white select-none">
      {/* Logo con animación de pulso suave */}
      <div className="mb-6 animate-bounce">
        <img src={reactLogo} alt="Logo" className="h-24 w-24 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
      </div>

      <h1 className="text-5xl font-extrabold tracking-tighter mb-8 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
        INTEGRA
      </h1>

      <div className="w-72">
        <div className="flex justify-between mb-2">
          <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-500">
            {progress < 100 ? "Iniciando sistema..." : "Carga completada"}
          </span>
          <span className="text-xs font-mono text-blue-400">
            {progress}%
          </span>
        </div>

        {/* Contenedor de la barra */}
        <div className="w-full bg-slate-800/50 rounded-full h-1.5 p-[2px] border border-slate-700/50 shadow-inner">
          {/* Barra de progreso con brillo */}
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <p className="mt-12 text-slate-600 text-[10px] uppercase tracking-[0.2em]">
        Desktop Application v1.0
      </p>
    </div>
  );
};
