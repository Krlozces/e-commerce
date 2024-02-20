import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Announcement from './Announcement';
import SneakerCard from './SneakerCard';
import ImageCollection from './ImageCollection';
import CardSection from './CardSection';
export default function Home() {
    return (
    <>
        <header>
            <Header />
        </header>
        <main>
            <Content mainText={'EN FORMA COMPLETA PARA LA CANCHA'} subText={'CLÁSICOS SIEMPRE CON ESTILO'} button1={'CLÁSICOS DE HOMBRE'} link1={'#'} button2={'CLÁSICOS DE MUJER'} link2={'#'} />
            <Announcement />
            <SneakerCard />
            <ImageCollection />
            <CardSection />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    )
}
