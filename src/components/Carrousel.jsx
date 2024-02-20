import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Carrousel() {
    const data = [
        {
            id: 1,
            title:'Slide 1',
            text:'Hasta 40% OFF en catálogo seleccionado.',
        },
        {
            id: 2,
            title:'Slide 2',
            text:'Encuentra la nueva camiseta alterna de Melgar.'
        },
        {
            id: 3,
            title:'Slide 3',
            text:'PhantomX precisión sobresaliente'
        }
    ]
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <>
            <div className="w-full bg-gray-200 p-2">
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.id} className="w-1/3 px-2">
                            <p className="text-center"><span className="font-bold">{item.title}:</span> {item.text}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            
        </>
    )
}
