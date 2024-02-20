import NavBar from "./NavBar";
import TopBar from './TopBar';
import Carrousel from './Carrousel';
export default function Header() {
    return (
        <>
            <div>
                <TopBar />
            </div>
            <div>
                <NavBar />
            </div>
            <div>
                <Carrousel />
            </div>
        </>
    )
}
