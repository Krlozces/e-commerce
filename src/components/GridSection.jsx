import HeaderGrid from "./HeaderGrid";
import images from '../../public/images.json';
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
export default function GridSection() {
    return (
        <>
            <Header />
            <HeaderGrid title={"Shop all Men's styles"} />
            <div className="flex flex-wrap justify-center">
                {images.images.map((item) => (
                    <Card 
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        precio={item.price}
                        image={item.image}
                        handlerOnClick={""}
                        val={item.description}
                    />
                ))}
            </div>
            <Footer />
        </>
    )
}
