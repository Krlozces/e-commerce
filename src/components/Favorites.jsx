import { NavLink } from "react-router-dom";

export default function Favorites() {
    return (
        <>
            <h2 className="text-black">Favoritos</h2>
            <span>¿Quieres ver tus favoritos? <NavLink to="#">Únete</NavLink> <NavLink to="/login">Inicia Sesión</NavLink></span>
        </>
    )
}
