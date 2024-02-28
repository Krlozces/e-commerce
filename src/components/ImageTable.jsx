import Sneaker from '../assets/images/Sneaker01.jpg';
import Sneaker02 from '../assets/images/Sneaker02.jpg';
import Sneaker03 from '../assets/images/Sneaker03.jpg';
import Sneaker04 from '../assets/images/Sneaker04.jpg';
import ImagesCarrousel from './ImagesCarrousel';
export default function ImageTable() {
    let images = [
        {
            id: 1,
            image: Sneaker
        },
        {
            id: 2,
            image: Sneaker03
        },
        {
            id: 3,
            image: Sneaker04
        }
    ];
    return (
        <>
            <div className="hidden lg:grid lg:grid-cols-8 grid-rows-[repeat(4,minmax(110px,_1fr))] grid-flow-row gap-2 my-4">
                <div className="col-span-4 row-span-4 bg-no-repeat bg-cover bg-center rounded" style={{ backgroundImage: `url(${Sneaker02})`  }}></div>

                <ImagesCarrousel setOfImages = { images }/>
                <ImagesCarrousel setOfImages = { images }/>
                <ImagesCarrousel setOfImages = { images }/>
                <ImagesCarrousel setOfImages = { images }/>
                <ImagesCarrousel setOfImages = { images }/>
                <ImagesCarrousel setOfImages = { images }/>
                <ImagesCarrousel setOfImages = { images }/>
                <ImagesCarrousel setOfImages = { images }/>

                {/* <div className="col-span-2 bg-cover bg-no-repeat bg-center rounded" style={{ backgroundImage: `url(${Sneaker})` }} ></div>
                
                <div className="col-span-2 rounded bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Sneaker03})` }}></div>

                <div className="col-span-2 rounded bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Sneaker03})`  }}></div>

                <div className="col-span-2 rounded bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Sneaker})` }} ></div>
                
                <div className="col-span-2 rounded bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Sneaker})` }} ></div>
                
                <div className="col-span-2 rounded bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Sneaker})` }} ></div>
                
                w-[220px] h-[220px] 
                <div className="col-span-2 rounded bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Sneaker})` }} ></div>

                <div className="col-span-2 rounded bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Sneaker})` }} ></div>  */}

            </div>
        </>
    )
}
