import logo from '../assets/images/logo-bg-remove.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
export default function NavBar() {
    return (
        <>
            <nav className="w-full navbar navbar-expand-lg navbar-light bg-light flex justify-around">
                <div>
                    <NavLink to="/" className="nav-link"><img src={logo} alt="Logo" width={100} height={75} /></NavLink>
                </div>
                <ul className='list-none flex justify-between items-center'>
                    <li className='nav-item mx-3 hover:border-b-2 hover:border-gray-400'>
                        <a href="#" className='font-bold'>HOMBRE</a>
                    </li>
                    <li className='nav-item mx-3 hover:border-b-2 hover:border-gray-400'>
                        <a href="#" className='font-bold'>MUJER</a>
                    </li>
                    <li className='nav-item mx-3 hover:border-b-2 hover:border-gray-400'>
                        <a href="#" className='font-bold'>NIÑOS</a>
                    </li>
                    <li className='nav-item mx-3 hover:border-b-2 hover:border-gray-400'>
                        <a href="#" className='font-bold'>PERSONALIZAR</a>
                    </li>
                    <li className='nav-item mx-3 hover:border-b-2 hover:border-gray-400'>
                        <a href="#" className='font-bold'>LANZAMIENTOS</a>
                    </li>
                    <li className='nav-item mx-3 hover:border-b-2 hover:border-gray-400'>
                        <a href="#" className='font-bold'>DESCUENTOS</a>
                    </li>
                </ul>
                <div className='flex justify-between items-center'>
                    <form action="#" method="post">
                        <div className='relative'>
                            <label htmlFor="search-input"></label>
                            <input type="text" name="search-input" id="search-input" placeholder='Buscar' className='rounded border-slate-400 px-4 py-2 bg-gray-100 focus:outline-none'/>
                            <div className='absolute pin-r pin-t mt-3 mr-4 right-0 top-0 text-slate-900'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-4">
                                    <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </form>
                    <div className='flex justify-between'>
                        <div className='mx-4'>
                            <button type='button'>
                                <FontAwesomeIcon icon={faHeart}/>
                            </button>
                        </div>
                        <div className=''>
                            <NavLink to="/cart">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
