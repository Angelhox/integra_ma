import { TrendingUp, SquareKanban, Plus } from "lucide-react";
import {
  TbCaretLeftFilled,
  TbCaretRightFilled,
  TbCashRegister,
  TbCategoryMinus,
  TbZoomMoney,
} from "react-icons/tb";
import { BarChart } from "../charts/BarChart";

export default function Dashboard() {
  return (
    <div className="h-full flex flex-col gap-4 min-h-0">
      {/* Encabezado */}
      <header className="shrink-0">
        <h1 className="text-2xl font-bold text-gray-800">Panel de Control</h1>
      </header>

      {/* ========================================================= */}
      {/* 1. TARJETAS - ALTURA NATURAL                              */}
      {/* ========================================================= */}

      <div className="shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Tarjeta número de productos */}
        <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <SquareKanban size={20} />
            </span>

            <span className="text-green-500 text-sm font-medium flex items-center">
              +12%
              <TrendingUp size={14} className="ml-1" />
            </span>
          </div>

          <h3 className="text-gray-500 text-sm font-medium">
            Número de productos
          </h3>

          <p className="text-2xl font-bold text-gray-900">398</p>
        </div>

        {/* Stock bajo */}
        <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-red-50 text-red-600 rounded-lg">
              <TbCategoryMinus size={20} />
            </span>

            <span className="text-red-500 text-sm font-medium">0 Pedidos</span>
          </div>

          <h3 className="text-gray-500 text-sm font-medium">Stock bajo</h3>

          <p className="text-2xl font-bold text-gray-900">12</p>
        </div>

        {/* Ventas de hoy */}
        <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <TbCashRegister size={20} />
            </span>

            <span className="text-gray-400 text-sm">5 Transacciones</span>
          </div>

          <h3 className="text-gray-500 text-sm font-medium">Ventas de hoy</h3>

          <p className="text-2xl font-bold text-gray-900">1,284</p>
        </div>

        {/* Por cobrar */}
        <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="p-2 bg-red-50 text-red-600 rounded-lg">
              <TbZoomMoney size={20} />
            </span>

            <span className="text-red-500 text-sm font-medium">5 Clientes</span>
          </div>

          <h3 className="text-gray-500 text-sm font-medium">Por cobrar</h3>

          <p className="text-2xl font-bold text-gray-900">7,584</p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. SECCIÓN MEDIA - OCUPA TODO EL ESPACIO RESTANTE        */}
      {/* ========================================================= */}

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* ======================================================= */}
        {/* GRÁFICO                                                 */}
        {/* ======================================================= */}

        <div className="lg:col-span-2 p-5 bg-white rounded-xl border border-gray-200 flex flex-col min-h-0">
          {/* Título */}
          <h3 className="font-semibold mb-4 text-gray-800 shrink-0">
            Rendimiento Mensual
          </h3>

          {/* Área del gráfico */}
          <div className="flex-1 min-h-0 w-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 ">
            <BarChart
              labels={[
                "Filtro de aceite",
                "Filtro combustible",
                "Aceite 15W40",
                "Aceite 15W40",
                "Aceite 15W40",
                "Aceite 15W40",
                "Aceite 15W40",
                "Aceite 15W40",
                "Aceite 15W40",
                "Aceite 15W40",
                "Aceite 15W40",
                "Aceite 15W40",
                "Aceite 15W40",
                "Correa",
                "Grasa",
              ]}
              values={[
                42, 35, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 22, 18,
              ]}
            />
          </div>
        </div>

        {/* ======================================================= */}
        {/* MOVIMIENTOS RECIENTES                                   */}
        {/* ======================================================= */}

        <div className="p-5 bg-white rounded-xl border border-gray-200 flex flex-col min-h-0">
          {/* Título */}
          <h3 className="font-semibold mb-4 text-gray-800 shrink-0">
            Movimientos Recientes
          </h3>

          {/* Lista con scroll */}
          <div className="flex-1 min-h-0 overflow-y-auto pr-1">
            <div className="space-y-4">
              <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                <TbCaretRightFilled size={20} className="mt-1 text-green-600" />

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    2 Filtros de combustible
                  </p>

                  <p className="text-xs text-gray-400">Entrada</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                <TbCaretRightFilled size={20} className="mt-1 text-green-600" />

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    1 Caneca de aceite de motor
                  </p>

                  <p className="text-xs text-gray-400">Entrada</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                <TbCaretLeftFilled size={20} className="mt-1 text-red-600" />

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    3 Pernos de arado
                  </p>

                  <p className="text-xs text-gray-400">Salida</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                <TbCaretLeftFilled size={20} className="mt-1 text-red-600" />

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    2 Filtros de combustible
                  </p>

                  <p className="text-xs text-gray-400">Salida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. ACCIONES RÁPIDAS - ALTURA NATURAL                     */}
      {/* ========================================================= */}

      <div className="shrink-0 flex justify-between items-center p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h3 className="text-gray-900 text-lg font-bold">Acciones rápidas</h3>

          <p className="text-sm font-bold text-gray-500">
            Operaciones frecuentes
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => alert("Abrir modal de nuevo producto")}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition"
          >
            <Plus size={18} />
            Nuevo Repuesto
          </button>

          <button
            onClick={() => alert("Abrir modal de nuevo producto")}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition"
          >
            <Plus size={18} />
            Nuevo Repuesto
          </button>

          <button
            onClick={() => alert("Abrir modal de nuevo producto")}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition"
          >
            <Plus size={18} />
            Nuevo Repuesto
          </button>
        </div>
      </div>
    </div>
  );
}
