import Favorites from "./Favorites";
import ShoppingCart from "./ShoppingCart";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
export default function Cart() {
    return (
        <>
            <Header />
            <div className="grid grid-cols-3 gap-6 my-12">
                <div className="col-span-2 ml-6">
                    <div className="border border-gray-400 rounded p-12">
                        <h2 className="text-red-600 text-xl font-bold">Envío gratuito para miembros</h2>
                        <p className="text-gray-400">
                            Hazte miembro de CT.com.pe para disfrutar de envíos rápidos y gratuitos.
                            <a href="" className="text-black">Únete</a> o <NavLink to="/login" className="text-black">Inicia Sesión</NavLink>
                        </p>
                    </div>
                    <ShoppingCart />
                    <Favorites />
                </div>
                <div className="rounded border mr-6">
                    <h2 className="text-black font-bold text-xl text-center my-4">Resumen</h2>
                    <div className="p-12 flex justify-center flex-col">
                        <ul className="list-disc ml-8 w-64">
                            <li className="flex justify-between py-2">
                                <p className="text-left">Precio con IGV</p>
                                <span className="text-right">{0}</span>
                            </li>
                            <li className="flex justify-between py-2">
                                <p>Opciones añadidas</p>
                                <span>{0}</span>
                            </li>
                            <li className="flex justify-between py-2">
                                <p>Envío</p>
                                <span>{0}</span>
                            </li>
                            <li className="flex justify-between py-2">
                                <p>Descuento de envío</p>
                                <span>{0}</span>
                            </li>
                            <li className="flex justify-between py-2">
                                <p>Descuentos de la orden</p>
                                <span>{0}</span>
                            </li>
                            <li className="flex justify-between py-2">
                                <p>IGV(18%)</p>
                                <span>{0}</span>
                            </li>
                        </ul>
                        <hr />
                        <ul>
                            <li className="text-black font-bold flex justify-between p-4">
                                <p >Total de la orden</p>
                                <span>{0}</span>
                            </li>
                        </ul>
                        <hr />
                        <div className="flex justify-center">
                            <button className="rounded-full px-4 py-2 bg-slate-400 w-[80%] my-6">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
} 