import React, { useEffect, useState } from "react";
import { X, Package, Tractor, Warehouse, DollarSign } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  compatibility: string;
  stock: number;
  minStock: number;
  price: number;
}

interface ProductDrawerProps {
  mode: "create" | "edit";
  product?: Product | null;
  onClose: () => void;
  onSave: (product: Product) => void;
}

const EMPTY_PRODUCT: Product = {
  id: "",
  name: "",
  category: "",
  compatibility: "",
  stock: 0,
  minStock: 0,
  price: 0,
};

export default function ProductDrawer({
  mode,
  product,
  onClose,
  onSave,
}: ProductDrawerProps) {
  const [formData, setFormData] = useState<Product>(EMPTY_PRODUCT);

  useEffect(() => {
    if (mode === "edit" && product) {
      setFormData(product);
    } else {
      setFormData(EMPTY_PRODUCT);
    }
  }, [mode, product]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "stock" || name === "minStock" || name === "price"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSave(formData);
  };

  return (
    <aside className="w-420px shrink-0 bg-white border-l rounded-xl shadow-sm border-gray-100 flex flex-col h-full">
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {mode === "create" ? "Nuevo repuesto" : "Editar repuesto"}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {mode === "create"
              ? "Agregue un nuevo producto al catálogo."
              : "Modifique la información del producto."}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
        >
          <X size={20} />
        </button>
      </div>

      {/* FORMULARIO */}
      <form
        onSubmit={handleSubmit}
        className="overflow-y-auto flex-1 rounded-xl"
      >
        <div className="p-6 space-y-8 ">
          {/* INFORMACIÓN BÁSICA */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Package size={18} className="text-green-600" />

              <h3 className="text-sm font-semibold text-gray-900">
                Información básica
              </h3>
            </div>

            <div className="space-y-4">
              {/* Código */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Código
                </label>

                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder="Ej. NH-001"
                  disabled={mode === "edit"}
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm
                  focus:outline-none focus:ring-2 focus:ring-green-500
                  disabled:bg-gray-100 disabled:text-gray-500"
                />

                {mode === "edit" && (
                  <p className="text-xs text-gray-400 mt-1">
                    El código no puede modificarse.
                  </p>
                )}
              </div>

              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción del repuesto
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej. Filtro de aceite"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm
                  focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Categoría */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Categoría
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm
                  focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Seleccione una categoría</option>

                  <option value="Filtros">Filtros</option>

                  <option value="Motor">Motor</option>

                  <option value="Correas">Correas</option>

                  <option value="Transmisión">Transmisión</option>

                  <option value="Hidráulico">Hidráulico</option>

                  <option value="Eléctrico">Eléctrico</option>

                  <option value="Implementos">Implementos</option>

                  <option value="Otros">Otros</option>
                </select>
              </div>
            </div>
          </section>

          {/* COMPATIBILIDAD */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Tractor size={18} className="text-green-600" />

              <h3 className="text-sm font-semibold text-gray-900">
                Compatibilidad
              </h3>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Maquinaria compatible
              </label>

              <textarea
                name="compatibility"
                value={formData.compatibility}
                onChange={handleChange}
                rows={3}
                placeholder="Ej. New Holland TT4.90, TT4.75"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm
                resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <p className="text-xs text-gray-400 mt-1">
                Puede ingresar varios modelos separados por coma.
              </p>
            </div>
          </section>

          {/* INVENTARIO */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Warehouse size={18} className="text-green-600" />

              <h3 className="text-sm font-semibold text-gray-900">
                Inventario
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock actual
                </label>

                <input
                  type="number"
                  name="stock"
                  min="0"
                  value={formData.stock}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm
                  focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock mínimo
                </label>

                <input
                  type="number"
                  name="minStock"
                  min="0"
                  value={formData.minStock}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm
                  focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </section>

          {/* INFORMACIÓN COMERCIAL */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <DollarSign size={18} className="text-green-600" />

              <h3 className="text-sm font-semibold text-gray-900">
                Información comercial
              </h3>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Precio de venta
              </label>

              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
                  $
                </span>

                <input
                  type="number"
                  name="price"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg text-sm
                  focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700
            border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="px-5 py-2 text-sm font-medium text-white
            bg-green-600 hover:bg-green-700 rounded-lg transition"
          >
            {mode === "create" ? "Guardar repuesto" : "Guardar cambios"}
          </button>
        </div>
      </form>
    </aside>
  );
}
