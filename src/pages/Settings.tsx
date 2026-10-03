import {
  AlertTriangle,
  Filter,
  PackageMinus,
  Plus,
  Search,
  ShieldAlert,
} from "lucide-react";
import React, { useMemo, useState } from "react";
type Product = {
  id: string;
  name: string;
  category: string;
  compatibility: string;
  stock: number;
  minStock: number;
  price: number;
};
const INITIAL_PRODUCTS: Product[] = [
  {
    id: "R001",
    name: "Filtro de Aceite John Deere",
    category: "Filtros",
    compatibility: "Serie 5E, 6J",
    stock: 15,
    minStock: 5,
    price: 25.5,
  },
  {
    id: "R002",
    name: "Bomba de Agua Perkins 4.236",
    category: "Motor",
    compatibility: "Massey Ferguson 290",
    stock: 2,
    minStock: 4,
    price: 110.0,
  },
  {
    id: "R003",
    name: "Correa del Alternador Dentada",
    category: "Correas",
    compatibility: "New Holland TS6",
    stock: 0,
    minStock: 3,
    price: 18.0,
  },
  {
    id: "R004",
    name: "Cruceta de Cardán 35mm",
    category: "Transmisión",
    compatibility: "Universal, Case IH",
    stock: 8,
    minStock: 2,
    price: 45.0,
  },
];
export const Settings = () => {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedCompatibility, setSelectedCompatibility] = useState("Todas");
  const metrics = useMemo(() => {
    let outOfStock = 0;
    let lowStock = 0;
    products.forEach((p) => {
      if (p.stock === 0) outOfStock++;
      else if (p.stock <= p.minStock) lowStock++;
    });
    return { outOfStock, lowStock, totalProducts: products.length };
  }, [products]);
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.compatibility.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "Todas" || product.category === selectedCategory;
      const matchesCompatibility =
        selectedCompatibility === "Todas" ||
        product.compatibility.includes(selectedCompatibility);
      return matchesSearch && matchesCategory && matchesCompatibility;
    });
  }, [products, searchTerm, selectedCategory, selectedCompatibility]);
  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Integra</h1>
          <p className="text-sm text-gray-500">Configuracion del sistema</p>
        </div>
        <button
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition"
          onClick={() => alert("Abrir modal de nueva configuracion")}
        >
          <Plus size={18} />
          Nueva Configuración
        </button>
      </div>
      {/* 1. Sección de indicadores (KPIs)  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-red-100 text-red-600 rounded-lg">
            <ShieldAlert size={24} />
          </div>
          <div className="text-sm text-gray-500 font-medium">
            <p>Sin Stock (Critico)</p>
            <h3 className="text-2xl font-bold text-red-600">
              {metrics.outOfStock}
            </h3>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
            <AlertTriangle size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">
              Stock Mínimo / Reponer
            </p>
            <h3 className="text-2xl font-bold text-amber-600">
              {metrics.lowStock}
            </h3>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
            <PackageMinus size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">
              Total de Catálogo
            </p>
            <h3 className="text-2xl font-bold text-blue-600">
              {metrics.totalProducts}
            </h3>
          </div>
        </div>
      </div>
      {/* Barra de busqueda y filtros */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 ">
        {/* Buscador inteligengte */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar por código, nombre o compatibilidad (ej. John Deere)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          />
        </div>
        {/* Filtro de categoría */}
        <div className="flex items-center gap-2">
          <Filter size={16} className="text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Todas">Cualquier Tractor / Marca</option>
            <option value="John Deere">John Deere</option>
            <option value="Massey Ferguson">MAssey Ferguson</option>
            <option value="New Holland">New Holland</option>
          </select>
        </div>
        {/* Filtro de Compatibilidad Rápida */}
        <select
          value={selectedCompatibility}
          onChange={(e) => setSelectedCompatibility(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="Todas">Cualquier Tractor / Marca</option>
          <option value="John Deere">John Deere</option>
          <option value="Massey Ferguson">Massey Ferguson</option>
          <option value="New Holland">New Holland</option>
        </select>
      </div>
      {/* Tabla de Productos */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 ont-semibold text-gray-500 uppercase tracking-wider">
              <th className="p-4">Código</th>
              <th className="p-4">Descripción Repuesto</th>
              <th className="p-4">Categoría</th>
              <th className="p-4">Compatibilidad Maquinaria</th>
              <th className="p-4">Precio</th>
              <th className="p-4">Stock</th>
              <th className="p-4">REstado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {filteredProducts.map((product) => {
              const isOut = product.stock === 0;
              const isLOw = product.stock <= product.minStock;
              return (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50/75 transition-coloors"
                >
                  <td className="p-4 font-mono font-medium text-gray-600">
                    {product.id}
                  </td>
                  <td className="p-4 font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="p-4 text-gray-500">{product.category}</td>
                  <td className="p-4">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {product.compatibility}
                    </span>
                  </td>
                  <td className="p-4 text-right font-medium">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="p-4 text-center font-semibold">
                    {product.stock} u.
                  </td>
                  <td className="p-4 text-center">
                    {isOut ? (
                      <span className="bg-red-50 text-red-700 border border-red-200 px-2 py-1 rounded-full text-xs font-medium">
                        Agotado
                      </span>
                    ) : isLOw ? (
                      <span className="bg-amber-50 text-amber-700 border border-amber-200 px-2 py-1 rounded-full text-xs font-medium">
                        Bajo Stock
                      </span>
                    ) : (
                      <span className="bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full text-xs font-medium">
                        Óptimo
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-gray-400">
                  No se encontraron repuestos que coincidan con la búsqueda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div> 
  );
};
