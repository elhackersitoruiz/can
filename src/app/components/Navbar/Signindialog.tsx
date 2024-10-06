import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReCAPTCHA from "react-google-recaptcha";

const Signin: React.FC = () => {
    // const mascota = {
    //     especie: "dasdsa",
    //     nombre: "Firulais",
    //     raza: "Labrador",
    //     fechaNacimiento: "2021-05-14",
    //     color: "Marrón",
    //     sexo: "Macho"
    // };

    const propietario = {
        nombre: "Juan Pérez",
        direccion: "Av. Principal 123, Ciudad",
        dni: "12345678A",
        telefono: "123-456-789"
    };

    const desparasitaciones = [
        { producto: "Drontal", fecha: "2024-02-20", peso: "20kg", proximaDesparasitacion: "2024-08-20" },
        { producto: "Milbemax", fecha: "2024-06-10", peso: "21kg", proximaDesparasitacion: "2024-12-10" }
    ];

    const cirugias = [
        { fechaCirugia: "2023-11-15", fechaRetiradaPuntos: "2023-11-25", tipoCirugia: "Esterilización" },
        { fechaCirugia: "2022-08-05", fechaRetiradaPuntos: "2022-08-15", tipoCirugia: "Extracción de tumor" }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [captchaValido, setCaptchaValido] = useState(false);
    const [usuarioValido, setUsuarioValido] = useState(true);
    const [mascota, setMascota] = useState({
        especie: "foo",
        nombre: "bar",
        raza: "baz",
        fecha_nacimiento: "2021-05-14",
        talla: "foo",
        peso: "foo",
        color: "foo",
        sexo: "bar"
    });
    const [vacunas, setVacunas] =  useState([
        { fecha_aplicacon: '2024-01-10', fecha_revacunacion: '2025-01-10', nombre: "Rabia", descripcion: "Vacuna anual contra la rabia." },
        { fecha_aplicacon: '2024-01-10', fecha_revacunacion: '2025-01-10', nombre: "Moquillo", descripcion: "Vacuna para prevenir el moquillo canino." }
    ]);
    const captcha = useRef(null);


    useEffect(() => {
        // This will run only once when the component mounts
        console.log("Component mounted");
        fetch('http://localhost:8000/mascota/3/')
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setMascota(data); // Step 3: Update the mascota state with fetched data
                setVacunas(data.vacunas)
                console.log(data);
                //setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching the mascota:', error);
                //setError(error);
                //setLoading(false);
            });
        // fetch('http://localhost:8000/vacunas/')
        //     .then((response) => {
        //         if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     }).then((data) => {
        //         console.log(data);
        //         setVacunas(data);
        //         //setLoading(false);
        //     })
        }, []); // The empty array ensures it runs once, like componentDidMount
    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const handleCaptcha = (value: any) => {
        setCaptchaValido(!!value);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (captchaValido) {
            console.log('Usuario válido');
            setUsuarioValido(true);
        } else {
            console.log('Por favor acepta el captcha');
            setUsuarioValido(false);
        }
    };

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden md:block">
                    <button
                        type="button"
                        className="flex justify-end text-xl font-medium bg-bg[#39b0ec] text-[#39b0ec] py-4 px-4 lg:px-8 navbutton rounded-full hover:text-white hover:bg-[#39b0ec]"
                        onClick={openModal}>
                        Iniciar Sesión
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >

                                
                                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-md space-y-8">
                                            <div className="flex items-center justify-center">
                                                <Image src="/images/Logo/Logoperro.png" alt="logo" width={46} height={46} />
                                                <Link href="/" className="text-2xl font-semibold text-black ml-4">
                                                    Cat & Fel
                                                </Link>
                                            </div>

                                        {usuarioValido ? (
                                                <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-teal-600">Carnet de Control de Vacunación</h1>

      {/* Apartado: Identificación de la Mascota */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Identificación de la Mascota</h2>
        <div className="border p-6 rounded-lg shadow-md bg-gray-100">
          <p className="mb-2"><strong>Especie:</strong>{mascota.especie}</p>
          <p className="mb-2"><strong>Nombre:</strong> {mascota.nombre}</p>
          <p className="mb-2"><strong>Raza:</strong> {mascota.raza}</p>
          <p className="mb-2"><strong>Fecha de Nacimiento:</strong> {mascota.fecha_nacimiento}</p>
          <p className="mb-2"><strong>Talla:</strong> {mascota.talla}</p>
          <p className="mb-2"><strong>Peso:</strong> {mascota.peso}</p>
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
                <td className="px-6 py-4">{vacuna.fecha_aplicacion}</td>
                <td className="px-6 py-4">{vacuna.fecha_revacunacion}</td>
                <td className="px-6 py-4">{vacuna.nombre}</td>
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
                                        
                                        
                                    ) : (
                                                <>
                                                    <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-lightgrey">
                                                        Inicia sesión en tu cuenta
                                                    </h2>
                                                    <form className="mt-8 space-y-6" onSubmit={submit}>
                                                        <div className="-space-y-px rounded-md shadow-sm">
                                                            <div>
                                                                <label htmlFor="email-address" className="sr-only">
                                                                    Correo electrónico
                                                                </label>
                                                                <input
                                                                    id="email-address"
                                                                    name="email"
                                                                    type="email"
                                                                    autoComplete="email"
                                                                    required
                                                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-lightgrey border-opacity-40 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                    placeholder="Correo electrónico"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="password" className="sr-only">
                                                                    Contraseña
                                                                </label>
                                                                <input
                                                                    id="password"
                                                                    name="password"
                                                                    type="password"
                                                                    autoComplete="current-password"
                                                                    required
                                                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-lightgrey border-opacity-40 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                    placeholder="Contraseña"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center">
                                                                <input
                                                                    id="remember-me"
                                                                    name="remember-me"
                                                                    type="checkbox"
                                                                    className="h-4 w-4 rounded border-lightgrey text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                                    Recordarme
                                                                </label>
                                                            </div>

                                                            <div className="text-sm">
                                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                    ¿Olvidaste tu contraseña?
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div className="recaptcha">
                                                            <ReCAPTCHA
                                                                sitekey="6Lf8YUoqAAAAAN43ogNY8IRPCZ2afgRgL7lPmD-3"
                                                                onChange={handleCaptcha}
                                                            />
                                                        </div>

                                                        {!captchaValido && (
                                                            <div className="error text-red-500">Por favor acepta el Captcha.</div>
                                                        )}

                                                        <div>
                                                            <button
                                                                type="submit"
                                                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#39b0ec] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                            >
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                                </span>
                                                                Iniciar sesión
                                                            </button>
                                                        </div>
                                                    </form>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Cerrar
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Signin;
