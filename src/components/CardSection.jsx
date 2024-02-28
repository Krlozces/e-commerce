import Slider from "react-slick";
import Card from "./Card";
import images from '../../public/images.json';
import { useContext } from 'react';
import { DataContext } from "./DataContext";
export default function CardSection() {
    const { cart, addToCart } = useContext(DataContext);
    
    const handleAddToCart = (product) => {
        addToCart(product);
    };
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            {/* Iteramos a través de los objetos y utilizamos sus atributos con el componente Card */}
            <Slider {...settings} className="w-[90%] mx-auto">
                {images.images.map((card) => (
                    <a href="#" key={card.id} className="hover:border hover:border-black">
                        <Card title={card.title} description={card.description} precio={card.price} image={card.image} handlerOnClick={(e) => { e.preventDefault(); handleAddToCart(card); }} val={"Add to cart"}/>
                    </a>
                ))}
            </Slider>
        </>    
    )
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", background: "red", marginRight:2 }} onClick={onClick}/>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", background: "black", margin:0 }} onClick={onClick}/>
    );
}