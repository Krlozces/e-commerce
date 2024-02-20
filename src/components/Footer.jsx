import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    return (
        <>
            <div className="bg-black py-4 w-full">
                <ul className="list-none flex text-slate-400 font-thin justify-evenly">
                    <li className="p-4">
                        <a href="#" className="border-r px-4 hover:text-slate-200">Comunícate con Nosotros</a>
                    </li>
                    <li className="p-4">
                        <a href="#" className="border-r px-4 hover:text-slate-200">Nuestros Datos</a>
                    </li>
                    <li className="p-4">
                        <a href="#" className="border-r px-4 hover:text-slate-200">Términos y Condiciones</a>
                    </li>
                    <li className="p-4">
                        <a href="#" className="border-r px-4 hover:text-slate-200">Política de Privacidad</a>
                    </li>
                    <li className="p-4">
                        <a href="#" className="px-4 hover:text-slate-200">Preguntas Frecuentes</a>
                    </li>
                </ul>
                <div className="flex justify-around">
                    <p className="text-slate-400 text-center">©2024 - &#64;Krlozces Todos los derechos reservados.</p>
                    <div className="flex justify-evenly w-40">
                        <div className="">
                            <a href="#" className="text-white text-2xl"><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                        <div>
                            <a href="#" className="text-white text-2xl"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                        <div>
                            <a href="#" className="text-white text-2xl"><FontAwesomeIcon icon={faXTwitter} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
