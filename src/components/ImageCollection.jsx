import Sneaker from '../assets/images/Sneaker01.jpg';
import Sneaker02 from '../assets/images/Sneaker02.jpg';
import Sneaker03 from '../assets/images/Sneaker03.jpg';
import Sneaker04 from '../assets/images/Sneaker04.jpg';

export default function ImageCollection() {
    return (
        <>
            <div className="grid grid-cols-8 relative h-96 w-full my-4">
                <div className="col-span-2 row-span-2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Sneaker02})` }}></div>
                <div className="col-span-2 row-span-2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Sneaker02})` }}></div>
                <div className="col-span-2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Sneaker03})` }}></div>
                <div className="col-span-2 row-start-2 col-start-5 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Sneaker04})` }}></div>
                <div className="col-span-2 row-span-2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Sneaker})` }}></div>
                <a href="#" className="absolute top-64 right-96 z-10 bg-white rounded py-2 px-4 font-semibold">DESCUBRE MÁS</a>
            </div>
            
        </>
    )
}
