import logo from '../assets/images/logo-bg-remove.png';
import Footer from './Footer';
import Header from './Header';
export default function Login() {
    return (
        <>
            <Header />
            <div className='w-[40%] mx-auto flex flex-col justify-center items-center my-4 p-12'>
                <div className='my-4'>
                    <img src={logo} alt="Logo" width={100} height={75} />
                </div>
                <h2 className='font-bold text-center'>TU CUENTA PARA TODO LO RELACIONADO CON CT.COM.PE</h2>
                <form action="#" method="post" className='text-gray-400'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"></label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="* Correo Electrónico" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pass"></label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pass" type="password" placeholder="* Contraseña" />
                    </div>
                    <div className="mb-4 flex justify-between">
                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mantener abierta la sesión</label>
                        </div>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="mb-4">
                        <p className='text-center'>
                            Al iniciar sesión aceptas la <a href="#">Política de Privacidad</a> y los <a href="#">Términos y Condiciones</a>
                        </p>
                    </div>
                    <div className="mb-4 flex justify-center">
                        <button type="submit" className="bg-black w-full hover:bg-gray-200 hover:text-black text-white font-bold py-2 px-4 rounded">INICIAR SESIÓN</button>
                    </div>
                </form>
                <p className="my-2 text-gray-400">
                    ¿No eres miembro? <a href="#" className='text-black'>Únete</a>
                </p>
            </div>
            <Footer />
        </>
    )
}
