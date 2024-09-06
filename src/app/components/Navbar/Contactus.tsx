import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const Contactusform = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Estado para los valores de entrada
    const [inputValues, setInputValues] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });

    // Manejador de cambio de valores de entrada
    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({ ...prevState, [name]: value }));
    };

    // Manejador del clic del botón de enviar
    const handleClick = () => {
        alert(`Nombre: ${inputValues.nombre}, Correo electrónico: ${inputValues.correo}, Mensaje: ${inputValues.mensaje}`);
        setIsOpen(false);
    };

    // Manejador de envío del formulario
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario a un servidor o servicio de correo.
    };

    // Verificar si algún campo está vacío
    const isDisabled = Object.values(inputValues).some((value) => value === '');

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                <div className='hidden lg:block'>
                    <button type="button" className='justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white' onClick={openModal}>
                        Contáctanos
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-shrink-0 items-center justify-center">
                                            <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                                Desgy Solutions
                                            </Link>
                                        </div>
                                        <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                                            ¿Quieres contactarnos? ¿Deseas enviarnos un comentario?
                                        </p>
                                        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tu Nombre</label>
                                                <input
                                                    id="nombre"
                                                    name="nombre"
                                                    value={inputValues.nombre}
                                                    onChange={handleChange}
                                                    type="text"
                                                    required
                                                    className="block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="Nombre..."
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tu Correo Electrónico</label>
                                                <input
                                                    id="correo"
                                                    name="correo"
                                                    value={inputValues.correo}
                                                    onChange={handleChange}
                                                    type="email"
                                                    required
                                                    className="block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="correo@ejemplo.com"
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="mensaje" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tu Mensaje</label>
                                                <textarea
                                                    id="mensaje"
                                                    name="mensaje"
                                                    value={inputValues.mensaje}
                                                    onChange={handleChange}
                                                    className="block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="Deja un comentario..."
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                onClick={handleClick}
                                                disabled={isDisabled}
                                                className="py-3 px-5 text-sm font-medium w-full text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                Enviar mensaje
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default Contactusform;
