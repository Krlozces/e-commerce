import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sneaker01 from '../assets/images/Sneaker01.jpg';
import Sneaker02 from '../assets/images/Sneaker03.jpg';
import Sneaker03 from '../assets/images/Sneaker04.jpg';
import Sneaker05 from '../assets/images/Sneaker05.jpg';
import Sneaker06 from '../assets/images/Sneaker06.jpg';
import Sneaker07 from '../assets/images/Sneaker07.jpg';
import Sneaker08 from '../assets/images/Sneaker08.jpg';
export default function SneakerCard() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        lazyLoad: true,
    };

    const items = [
        {
            id: 1,
            image: Sneaker01
        },
        {
            id: 2,
            image: Sneaker02
        },
        {
            id: 3,
            image: Sneaker03
        },
        {
            id: 4,
            image: Sneaker05
        },
        {
            id: 5,
            image: Sneaker06
        },
        {
            id: 6,
            image: Sneaker07
        },
        {
            id: 7,
            image: Sneaker08
        }
    ]
    return (
        <>
            <div className="w-[90%] mx-auto rounded overflow-hidden shadow-lg my-4">
                <Slider {...settings}>
                    {items.map((item) => (
                        <div key={item.id} className="p-4 border mx-2">
                            <img loading="lazy" className="w-full" src={item.image} alt={`Sneaker ${item.id}`} />
                            <p className="font-bold text-xl mb-2">{`Sneaker ${item.id}`}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
