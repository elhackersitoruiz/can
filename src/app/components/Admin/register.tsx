"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CarnetVacunacion = () => {
  const router = useRouter(); // Hook para manejar la navegación

  // Estado para el formulario de registro de datos
  const [formData, setFormData] = useState({
    nombreUsuario: '',
    email: '',
    contrasena: '',
    nombreMascota: '',
    especieMascota: '',
    razaMascota: '',
    fechaNacimientoMascota: '',
    colorMascota: '',
    sexoMascota: '',
    nombrePropietario: '',
    direccionPropietario: '',
    dniPropietario: '',
    telefonoPropietario: '',
    tallaMascota: '',
    pesoMascota: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Aca deberias hacer el post request y segun la respuesta que encuentres deberias
    // redirigir al usuario a la pagina de carnet o mandar error x lo que sea.
    // Como redirigir de una pagina de react a otra pagina de react.
    // Aquí puedes manejar el envío del formulario, como hacer una solicitud POST a tu servidor
    console.log('Datos del formulario:', formData);
  };

  const handleCancel = () => {
    // Limpia el formulario y redirige al usuario a la página anterior
    setFormData({
      nombreUsuario: '',
      email: '',
      contrasena: '',
      nombreMascota: '',
      especieMascota: '',
      razaMascota: '',
      fechaNacimientoMascota: '',
      colorMascota: '',
      sexoMascota: '',
      nombrePropietario: '',
      direccionPropietario: '',
      dniPropietario: '',
      telefonoPropietario: '',
      tallaMascota: '',
      pesoMascota: '',
    });
    router.back(); // Navega a la página anterior
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-teal-600">Registro de Datos</h1>

      {/* Apartado: Datos de la Mascota */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Datos de la Mascota</h2>
        <form method="POST" className="border p-6 rounded-lg shadow-md bg-gray-100" action="http://localhost:8000/register_pet/">
          <div className="mb-4">
            <label htmlFor="nombreMascota" className="block text-sm font-medium text-gray-700">Nombre de la Mascota</label>
            <input
              type="text"
              id="nombreMascota"
              name="nombreMascota"
              value={formData.nombreMascota}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="especieMascota" className="block text-sm font-medium text-gray-700">Especie</label>
            <input
              type="text"
              id="especieMascota"
              name="especieMascota"
              value={formData.especieMascota}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="razaMascota" className="block text-sm font-medium text-gray-700">Raza</label>
            <input
              type="text"
              id="razaMascota"
              name="razaMascota"
              value={formData.razaMascota}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fechaNacimientoMascota" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
            <input
              type="date"
              id="fechaNacimientoMascota"
              name="fechaNacimientoMascota"
              value={formData.fechaNacimientoMascota}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="colorMascota" className="block text-sm font-medium text-gray-700">Color</label>
            <input
              type="text"
              id="colorMascota"
              name="colorMascota"
              value={formData.colorMascota}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="colorMascota" className="block text-sm font-medium text-gray-700">Talla</label>
            <input
              type="text"
              id="tallaMascota"
              name="tallaMascota"
              value={formData.tallaMascota}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="colorMascota" className="block text-sm font-medium text-gray-700">Peso</label>
            <input
              type="text"
              id="pesoMascota"
              name="pesoMascota"
              value={formData.pesoMascota}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sexoMascota" className="block text-sm font-medium text-gray-700">Sexo</label>
            <input
              type="text"
              id="sexoMascota"
              name="sexoMascota"
              value={formData.sexoMascota}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Datos del Propietario */}
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Datos del Propietario</h2>
          <div className="mb-4">
            <label htmlFor="nombrePropietario" className="block text-sm font-medium text-gray-700">Nombre y Apellidos</label>
            <input
              type="text"
              id="nombrePropietario"
              name="nombrePropietario"
              value={formData.nombrePropietario}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="direccionPropietario" className="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              id="direccionPropietario"
              name="direccionPropietario"
              value={formData.direccionPropietario}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dniPropietario" className="block text-sm font-medium text-gray-700">DNI</label>
            <input
              type="text"
              id="dniPropietario"
              name="dniPropietario"
              value={formData.dniPropietario}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefonoPropietario" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="tel"
              id="telefonoPropietario"
              name="telefonoPropietario"
              value={formData.telefonoPropietario}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Registro de Usuario */}
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Registro de Usuario</h2>
          <div className="mb-4">
            <label htmlFor="nombreUsuario" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="nombreUsuario"
              name="nombreUsuario"
              value={formData.nombreUsuario}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contrasena" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600"

            >
              Registrarse
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarnetVacunacion;
