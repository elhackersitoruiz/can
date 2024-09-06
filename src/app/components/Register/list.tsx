"use client";
import React, { useState } from 'react';

// Definimos un tipo para los datos de usuario
type Usuario = {
  nombrePropietario: string;
  dniPropietario: string;
  telefonoPropietario: string;
  direccionPropietario: string;
  nombreMascota: string;
};

// Datos de ejemplo para la lista de usuarios
const exampleUsuarios: Usuario[] = [
  {
    nombrePropietario: 'Juan Pérez',
    dniPropietario: '12345678',
    telefonoPropietario: '987654321',
    direccionPropietario: 'Calle Falsa 123',
    nombreMascota: 'Max'
  },
  {
    nombrePropietario: 'Ana Gómez',
    dniPropietario: '87654321',
    telefonoPropietario: '912345678',
    direccionPropietario: 'Avenida Siempre Viva 742',
    nombreMascota: 'Luna'
  },
  {
    nombrePropietario: 'Luis Martínez',
    dniPropietario: '45678901',
    telefonoPropietario: '998877665',
    direccionPropietario: 'Paseo del Prado 5',
    nombreMascota: 'Rocky'
  },
  {
    nombrePropietario: 'María Rodríguez',
    dniPropietario: '23456789',
    telefonoPropietario: '911223344',
    direccionPropietario: 'Gran Vía 10',
    nombreMascota: 'Bella'
  }
];

const ListadoUsuarios: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [usuarios, setUsuarios] = useState<Usuario[]>(exampleUsuarios);

  // Filtrar los usuarios basados en el término de búsqueda
  const filteredUsuarios = usuarios.filter((usuario) =>
    usuario.nombrePropietario.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.nombreMascota.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.dniPropietario.includes(searchTerm)
  );

  // Función para manejar la eliminación de un usuario
  const handleDelete = (index: number) => {
    const updatedUsuarios = usuarios.filter((_, i) => i !== index);
    setUsuarios(updatedUsuarios);
  };

  // Función para manejar la edición de un usuario
  const handleEdit = (index: number) => {
    alert(`Editar usuario: ${usuarios[index].nombrePropietario}`);
    // Aquí podrías implementar la lógica de edición
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-teal-600">Listado de Usuarios Registrados</h1>

      {/* Buscador */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre de propietario, mascota o DNI..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Tabla de usuarios filtrados */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Nombre del Propietario</th>
              <th className="px-4 py-2 border-b">DNI</th>
              <th className="px-4 py-2 border-b">Teléfono</th>
              <th className="px-4 py-2 border-b">Dirección</th>
              <th className="px-4 py-2 border-b">Nombre de la Mascota</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsuarios.map((usuario, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{usuario.nombrePropietario}</td>
                <td className="px-4 py-2 border-b">{usuario.dniPropietario}</td>
                <td className="px-4 py-2 border-b">{usuario.telefonoPropietario}</td>
                <td className="px-4 py-2 border-b">{usuario.direccionPropietario}</td>
                <td className="px-4 py-2 border-b">{usuario.nombreMascota}</td>
                <td className="px-4 py-2 border-b flex space-x-2">
                  {/* Botón de Editar */}
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Editar
                  </button>
                  {/* Botón de Eliminar */}
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoUsuarios;
