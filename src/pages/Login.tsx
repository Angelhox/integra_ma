import { useNavigate } from "react-router-dom";
import marLogo from "./../assets/png/MAR_logo.png";
export const Login = () => {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/main");
  }
  return (
    <div className="min-h-screen flex flex-row">
      {/* SECCIÓN IZQUIERDA: 40% - Branding/Logo */}
      <div className="hidden lg:flex lg:w-[40%] bg-brand-yellow-500 items-center justify-center p-12">
        <div className="text-center">
          {/* Aquí va el logo del cliente */}
          <div className="bg-white/20 p-8 rounded-2xl backdrop-blur-sm">
            {/* <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4"> */}
            <div className="w-52 h-52 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* <span className="text-indigo-600 font-bold text-4xl">LOGO</span>
               */}
              <img src={marLogo} alt="" />
            </div>
            <h1 className="text-white text-2xl font-bold italic">
              Servicio de soluciones
            </h1>
          </div>
        </div>
      </div>

      {/* SECCIÓN DERECHA: 60% - Formulario */}
      <div className="w-full lg:w-[60%] flex items-center justify-center bg-white p-8 sm:p-12">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center justify-center mb-10 lg:hidden text-center">
            {/* Logo visible solo en móviles */}
            {/* <span className="text-2xl font-bold text-indigo-600"> */}
            <div className="w-42 h-42 bg-brand-yellow-500 rounded-full flex items-center justify-center mb-3">
              <img src={marLogo} alt="" className="w-4/5 h-4/5" />
            </div>
            {/* </span> */}
          </div>

          <h2 className="text-3xl font-bold text-brand-blue-500 mb-2">
            Bienvenido
          </h2>
          <p className="text-gray-500 mb-8">
            Por favor, ingresa tus credenciales.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                // onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                // onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-sm font-semibold text-brand-blue-500 hover:text-brand-blue-600 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-yellow-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-brand-yellow-600 focus:ring-4 focus:ring-indigo-200 transition-all shadow-lg shadow-indigo-100"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
