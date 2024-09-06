"use client";
import React, { useState } from 'react';

type EditState = {
  id: number | null;
  tipo: string;
  index: number;
};

const ListadoCarnetVacunacion = () => {
  const [vacunas, setVacunas] = useState([
    { id: 1, fechaVacunacion: "2024-01-10", fechaRevacunacion: "2025-01-10", tipo: "Rabia", descripcion: "Vacuna anual contra la rabia." },
    { id: 2, fechaVacunacion: "2024-03-15", fechaRevacunacion: "2025-03-15", tipo: "Moquillo", descripcion: "Vacuna para prevenir el moquillo canino." }
  ]);

  const [desparasitaciones, setDesparasitaciones] = useState([
    { id: 1, producto: "Drontal", fecha: "2024-02-20", peso: "20kg", proximaDesparasitacion: "2024-08-20" },
    { id: 2, producto: "Milbemax", fecha: "2024-06-10", peso: "21kg", proximaDesparasitacion: "2024-12-10" }
  ]);

  const [cirugias, setCirugias] = useState([
    { id: 1, fechaCirugia: "2023-11-15", fechaRetiradaPuntos: "2023-11-25", tipoCirugia: "Esterilización" },
    { id: 2, fechaCirugia: "2022-08-05", fechaRetiradaPuntos: "2022-08-15", tipoCirugia: "Extracción de tumor" }
  ]);

  const [isEditing, setIsEditing] = useState<EditState>({ id: null, tipo: "", index: -1 });

  const handleEliminar = (id: number, tipo: string) => {
    if (tipo === 'vacuna') {
      setVacunas(vacunas.filter(vacuna => vacuna.id !== id));
    } else if (tipo === 'desparasitacion') {
      setDesparasitaciones(desparasitaciones.filter(desparasitacion => desparasitacion.id !== id));
    } else if (tipo === 'cirugia') {
      setCirugias(cirugias.filter(cirugia => cirugia.id !== id));
    }
  };

  const handleEditar = (id: number, tipo: string, index: number) => {
    setIsEditing({ id, tipo, index });
  };

  const handleGuardar = () => {
    const { id, tipo, index } = isEditing;
    if (tipo === 'vacuna' && id !== null) {
      const inputs = document.querySelectorAll(`#vacuna-${id} input`);
      const updatedVacunas = [...vacunas];
      updatedVacunas[index] = {
        ...updatedVacunas[index],
        fechaVacunacion: (inputs[0] as HTMLInputElement).value,
        fechaRevacunacion: (inputs[1] as HTMLInputElement).value,
        tipo: (inputs[2] as HTMLInputElement).value,
        descripcion: (inputs[3] as HTMLInputElement).value,
      };
      setVacunas(updatedVacunas);
    } else if (tipo === 'desparasitacion' && id !== null) {
      const inputs = document.querySelectorAll(`#desparasitacion-${id} input`);
      const updatedDesparasitaciones = [...desparasitaciones];
      updatedDesparasitaciones[index] = {
        ...updatedDesparasitaciones[index],
        producto: (inputs[0] as HTMLInputElement).value,
        fecha: (inputs[1] as HTMLInputElement).value,
        peso: (inputs[2] as HTMLInputElement).value,
        proximaDesparasitacion: (inputs[3] as HTMLInputElement).value,
      };
      setDesparasitaciones(updatedDesparasitaciones);
    } else if (tipo === 'cirugia' && id !== null) {
      const inputs = document.querySelectorAll(`#cirugia-${id} input`);
      const updatedCirugias = [...cirugias];
      updatedCirugias[index] = {
        ...updatedCirugias[index],
        fechaCirugia: (inputs[0] as HTMLInputElement).value,
        fechaRetiradaPuntos: (inputs[1] as HTMLInputElement).value,
        tipoCirugia: (inputs[2] as HTMLInputElement).value,
      };
      setCirugias(updatedCirugias);
    }
    setIsEditing({ id: null, tipo: "", index: -1 });
  };

  const handleAgregar = (tipo: string) => {
    const nuevoRegistro = { id: Date.now() };

    if (tipo === 'vacuna') {
      setVacunas([...vacunas, { ...nuevoRegistro, fechaVacunacion: "", fechaRevacunacion: "", tipo: "", descripcion: "" }]);
    } else if (tipo === 'desparasitacion') {
      setDesparasitaciones([...desparasitaciones, { ...nuevoRegistro, producto: "", fecha: "", peso: "", proximaDesparasitacion: "" }]);
    } else if (tipo === 'cirugia') {
      setCirugias([...cirugias, { ...nuevoRegistro, fechaCirugia: "", fechaRetiradaPuntos: "", tipoCirugia: "" }]);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-teal-600">Listado para Editar o Eliminar</h1>

      {/* Listado: Vacunas */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Vacunas</h2>
        <button onClick={() => handleAgregar('vacuna')} className="mb-4 bg-green-500 text-white p-2 rounded">Agregar Vacuna</button>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Fecha de Vacunación</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Fecha de Revacunación</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Tipo de Vacuna</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Descripción</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {vacunas.map((vacuna, index) => (
              <tr key={vacuna.id} id={`vacuna-${vacuna.id}`} className="bg-gray-100 border-b border-gray-200">
                {isEditing.id === vacuna.id && isEditing.tipo === 'vacuna' ? (
                  <>
                    <td className="px-6 py-4"><input type="date" defaultValue={vacuna.fechaVacunacion} className="border p-1" /></td>
                    <td className="px-6 py-4"><input type="date" defaultValue={vacuna.fechaRevacunacion} className="border p-1" /></td>
                    <td className="px-6 py-4"><input type="text" defaultValue={vacuna.tipo} className="border p-1" /></td>
                    <td className="px-6 py-4"><input type="text" defaultValue={vacuna.descripcion} className="border p-1" /></td>
                    <td className="px-6 py-4">
                      <button onClick={handleGuardar} className="text-green-500 mr-4">Guardar</button>
                      <button onClick={() => setIsEditing({ id: null, tipo: "", index: -1 })} className="text-red-500">Cancelar</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4">{vacuna.fechaVacunacion}</td>
                    <td className="px-6 py-4">{vacuna.fechaRevacunacion}</td>
                    <td className="px-6 py-4">{vacuna.tipo}</td>
                    <td className="px-6 py-4">{vacuna.descripcion}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEditar(vacuna.id, 'vacuna', index)} className="text-blue-500 mr-4">Editar</button>
                      <button onClick={() => handleEliminar(vacuna.id, 'vacuna')} className="text-red-500">Eliminar</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Listado: Desparasitaciones */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Desparasitaciones</h2>
        <button onClick={() => handleAgregar('desparasitacion')} className="mb-4 bg-green-500 text-white p-2 rounded">Agregar Desparasitacion</button>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Producto</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Fecha</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Peso</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Próxima Desparasitacion</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {desparasitaciones.map((desparasitacion, index) => (
              <tr key={desparasitacion.id} id={`desparasitacion-${desparasitacion.id}`} className="bg-gray-100 border-b border-gray-200">
                {isEditing.id === desparasitacion.id && isEditing.tipo === 'desparasitacion' ? (
                  <>
                    <td className="px-6 py-4"><input type="text" defaultValue={desparasitacion.producto} className="border p-1" /></td>
                    <td className="px-6 py-4"><input type="date" defaultValue={desparasitacion.fecha} className="border p-1" /></td>
                    <td className="px-6 py-4"><input type="text" defaultValue={desparasitacion.peso} className="border p-1" /></td>
                    <td className="px-6 py-4"><input type="date" defaultValue={desparasitacion.proximaDesparasitacion} className="border p-1" /></td>
                    <td className="px-6 py-4">
                      <button onClick={handleGuardar} className="text-green-500 mr-4">Guardar</button>
                      <button onClick={() => setIsEditing({ id: null, tipo: "", index: -1 })} className="text-red-500">Cancelar</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4">{desparasitacion.producto}</td>
                    <td className="px-6 py-4">{desparasitacion.fecha}</td>
                    <td className="px-6 py-4">{desparasitacion.peso}</td>
                    <td className="px-6 py-4">{desparasitacion.proximaDesparasitacion}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEditar(desparasitacion.id, 'desparasitacion', index)} className="text-blue-500 mr-4">Editar</button>
                      <button onClick={() => handleEliminar(desparasitacion.id, 'desparasitacion')} className="text-red-500">Eliminar</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Listado: Cirugías */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Cirugías</h2>
        <button onClick={() => handleAgregar('cirugia')} className="mb-4 bg-green-500 text-white p-2 rounded">Agregar Cirugía</button>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Fecha de Cirugía</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Fecha de Retirada de Puntos</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Tipo de Cirugía</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cirugias.map((cirugia, index) => (
              <tr key={cirugia.id} id={`cirugia-${cirugia.id}`} className="bg-gray-100 border-b border-gray-200">
                {isEditing.id === cirugia.id && isEditing.tipo === 'cirugia' ? (
                  <>
                    <td className="px-6 py-4"><input type="date" defaultValue={cirugia.fechaCirugia} className="border p-1" /></td>
                    <td className="px-6 py-4"><input type="date" defaultValue={cirugia.fechaRetiradaPuntos} className="border p-1" /></td>
                    <td className="px-6 py-4"><input type="text" defaultValue={cirugia.tipoCirugia} className="border p-1" /></td>
                    <td className="px-6 py-4">
                      <button onClick={handleGuardar} className="text-green-500 mr-4">Guardar</button>
                      <button onClick={() => setIsEditing({ id: null, tipo: "", index: -1 })} className="text-red-500">Cancelar</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4">{cirugia.fechaCirugia}</td>
                    <td className="px-6 py-4">{cirugia.fechaRetiradaPuntos}</td>
                    <td className="px-6 py-4">{cirugia.tipoCirugia}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEditar(cirugia.id, 'cirugia', index)} className="text-blue-500 mr-4">Editar</button>
                      <button onClick={() => handleEliminar(cirugia.id, 'cirugia')} className="text-red-500">Eliminar</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoCarnetVacunacion;
