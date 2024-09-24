"use client";
import React from 'react';

const Carnet = () => {
  console.log("Componente Carnet renderizado");
  // Datos de ejemplo para mostrar en el carnet
  const mascota = {
    especie: "Perro",
    nombre: "Firulais",
    raza: "Labrador",
    fechaNacimiento: "2021-05-14",
    color: "Marrón",
    sexo: "Macho"
  };

  const propietario = {
    nombre: "Juan Pérez",
    direccion: "Av. Principal 123, Ciudad",
    dni: "12345678A",
    telefono: "123-456-789"
  };

  const vacunas = [
    { fechaVacunacion: "2024-01-10", fechaRevacunacion: "2025-01-10", tipo: "Rabia", descripcion: "Vacuna anual contra la rabia." },
    { fechaVacunacion: "2024-03-15", fechaRevacunacion: "2025-03-15", tipo: "Moquillo", descripcion: "Vacuna para prevenir el moquillo canino." }
  ];

  const desparasitaciones = [
    { producto: "Drontal", fecha: "2024-02-20", peso: "20kg", proximaDesparasitacion: "2024-08-20" },
    { producto: "Milbemax", fecha: "2024-06-10", peso: "21kg", proximaDesparasitacion: "2024-12-10" }
  ];

  const cirugias = [
    { fechaCirugia: "2023-11-15", fechaRetiradaPuntos: "2023-11-25", tipoCirugia: "Esterilización" },
    { fechaCirugia: "2022-08-05", fechaRetiradaPuntos: "2022-08-15", tipoCirugia: "Extracción de tumor" }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-teal-600">Carnet de Control de Vacunación</h1>

      {/* Apartado: Identificación de la Mascota */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Identificación de la Mascota</h2>
        <div className="border p-6 rounded-lg shadow-md bg-gray-100">
          <p className="mb-2"><strong>Especie:</strong> {mascota.especie}</p>
          <p className="mb-2"><strong>Nombre:</strong> {mascota.nombre}</p>
          <p className="mb-2"><strong>Raza:</strong> {mascota.raza}</p>
          <p className="mb-2"><strong>Fecha de Nacimiento:</strong> {mascota.fechaNacimiento}</p>
          <p className="mb-2"><strong>Color:</strong> {mascota.color}</p>
          <p className="mb-2"><strong>Sexo:</strong> {mascota.sexo}</p>
        </div>
      </div>

      {/* Apartado: Identificación del Propietario */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Identificación del Propietario</h2>
        <div className="border p-6 rounded-lg shadow-md bg-gray-100">
          <p className="mb-2"><strong>Nombre y Apellidos:</strong> {propietario.nombre}</p>
          <p className="mb-2"><strong>Dirección:</strong> {propietario.direccion}</p>
          <p className="mb-2"><strong>DNI:</strong> {propietario.dni}</p>
          <p className="mb-2"><strong>Teléfono:</strong> {propietario.telefono}</p>
        </div>
      </div>

      {/* Apartado: Tabla de Vacunas */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Vacunas</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Fecha de Vacunación</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Fecha de Revacunación</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Tipo de Vacuna</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {vacunas.map((vacuna, index) => (
              <tr key={index} className="bg-gray-100 border-b border-gray-200">
                <td className="px-6 py-4">{vacuna.fechaVacunacion}</td>
                <td className="px-6 py-4">{vacuna.fechaRevacunacion}</td>
                <td className="px-6 py-4">{vacuna.tipo}</td>
                <td className="px-6 py-4">{vacuna.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Apartado: Tabla de Desparasitación */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Desparasitación</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Producto</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Fecha</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Peso</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Próxima Desparasitación</th>
            </tr>
          </thead>
          <tbody>
            {desparasitaciones.map((desparasitacion, index) => (
              <tr key={index} className="bg-gray-100 border-b border-gray-200">
                <td className="px-6 py-4">{desparasitacion.producto}</td>
                <td className="px-6 py-4">{desparasitacion.fecha}</td>
                <td className="px-6 py-4">{desparasitacion.peso}</td>
                <td className="px-6 py-4">{desparasitacion.proximaDesparasitacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Apartado: Tabla de Cirugías */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Cirugías</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Fecha de Cirugía</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium text">Fecha de Retirada de Puntos</th>
              <th className="px-6 py-3 bg-teal-500 text-left text-sm font-medium texts">Tipo de Cirugía</th>
            </tr>
          </thead>
          <tbody>
            {cirugias.map((cirugia, index) => (
              <tr key={index} className="bg-gray-100 border-b border-gray-200">
                <td className="px-6 py-4">{cirugia.fechaCirugia}</td>
                <td className="px-6 py-4">{cirugia.fechaRetiradaPuntos}</td>
                <td className="px-6 py-4">{cirugia.tipoCirugia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Carnet;