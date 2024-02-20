import { NavLink } from "react-router-dom";
export default function TopBar() {
  return (
    <>
        <div className="w-full bg-gray-200 p-2">
            <ul className="list-none flex justify-end">
                <li>
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#"></a>
                </li>
                <li className="px-4 border-r-2 border-slate-900">
                    <a href="#">Ayuda</a>
                </li>
                <li className="px-4">
                    <NavLink to="/login" className="nav-link">Iniciar sesión</NavLink>
                </li>
            </ul>
        </div>
    </>
  );
}
