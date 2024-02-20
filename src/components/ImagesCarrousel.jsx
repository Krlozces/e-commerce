import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ImagesCarrousel({ setOfImages }) {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        fade: true
    };
    
    return (
        <>
        <div className="col-span-2 bg-cover bg-no-repeat bg-center rounded self-center">
            <Slider {...settings}>
                {setOfImages.map((item) => (
                    <div key={item.id}>
                        <img
                                className="w-full h-full object-cover object-center rounded"
                                src={item.image}
                                alt={`Sneaker ${item.id}`}
                            />
                    </div>
                ))} 
            </Slider>
        </div>
        </>
    )
}
