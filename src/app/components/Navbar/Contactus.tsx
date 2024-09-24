import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';

const Contactusform = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValues, setInputValues] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });
    const [captchaValido, setCaptchaValido] = useState<boolean | null>(null);
    const captcha = useRef<ReCAPTCHA | null>(null);
    const [loading, setLoading] = useState(false); // Estado para manejar el envío

    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({ ...prevState, [name]: value }));
    };

    const handleCaptcha = () => {
        setCaptchaValido(true);
        console.log('El usuario ha verificado el captcha.');
    };

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (!captchaValido) {
            console.log('Por favor acepta el Captcha');
            setCaptchaValido(false);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/enviar-mensaje', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputValues),
            });

            if (response.ok) {
                alert('Mensaje enviado correctamente');
                setIsOpen(false);
                setInputValues({ nombre: '', correo: '', mensaje: '' });
                setCaptchaValido(null);
            } else {
                console.error('Error al enviar el mensaje');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        } finally {
            setLoading(false);
        }
    };

    const isDisabled = Object.values(inputValues).some(value => value === '') || !captchaValido;

    return (
        <>
            <div className="flex items-center pr-2 sm:pr-0">
                <button
                    type="button"
                    className="text-xl font-semibold bg-transparent py-4 px-6 rounded-full hover:bg-navyblue hover:text-white"
                    onClick={() => setIsOpen(true)}
                >
                    Contáctanos
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
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
                                    <div className="py-8 px-4 mx-auto max-w-screen-md">
                                        <div className="flex items-center justify-center">
                                            <Link href="/" className="text-2xl sm:text-4xl font-semibold text-black">
                                                Desgy Solutions
                                            </Link>
                                        </div>
                                        <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 sm:text-xl">
                                            ¿Quieres contactarnos? ¿Deseas enviarnos un comentario?
                                        </p>
                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div>
                                                <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Tu Nombre
                                                </label>
                                                <input
                                                    id="nombre"
                                                    name="nombre"
                                                    value={inputValues.nombre}
                                                    onChange={handleChange}
                                                    type="text"
                                                    required
                                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="Nombre..."
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Tu Correo Electrónico
                                                </label>
                                                <input
                                                    id="correo"
                                                    name="correo"
                                                    value={inputValues.correo}
                                                    onChange={handleChange}
                                                    type="email"
                                                    required
                                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="correo@ejemplo.com"
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="mensaje" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Tu Mensaje
                                                </label>
                                                <textarea
                                                    id="mensaje"
                                                    name="mensaje"
                                                    value={inputValues.mensaje}
                                                    onChange={handleChange}
                                                    required
                                                    className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="Deja un comentario..."
                                                />
                                            </div>
                                            <div className="recaptcha">
                                                <ReCAPTCHA
                                                    ref={captcha}
                                                    sitekey="6Lf8YUoqAAAAAN43ogNY8IRPCZ2afgRgL7lPmD-3"
                                                    onChange={handleCaptcha}
                                                />
                                            </div>
                                            {captchaValido === false && (
                                                <div className="error text-red-500">Por favor acepta el Captcha.</div>
                                            )}
                                            <button
                                                type="submit"
                                                disabled={isDisabled || loading}
                                                className="py-3 px-5 text-sm font-medium w-full text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                {loading ? 'Enviando...' : 'Enviar mensaje'}
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
};

export default Contactusform;
