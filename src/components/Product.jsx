import { useParams } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import { DataContext } from "./DataContext";
import { useContext } from "react";
export default function Product() {
    const params = useParams();
    const { items, setItems } = useContext(DataContext);
    const products = items.images.filter(item => item.id == params.nombreParam);
    console.log(products);
    return (
        <>
            <Header />
            <div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-12">
                    {products.map((item) => params.nombreParam.includes(item.id) ?  
                        <div key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div className="px-6 py-4">
                                <p className="text-xl text-center font-bold p-2">
                                    {item.title}
                                </p>
                                <p className="text-xl">
                                    <span className="font-bold">Descripción:</span> {item.description}
                                </p>
                                <p className="text-xl">
                                    <span className="font-bold">Precio:</span> S/. {item.price}
                                </p>
                            </div>
                        </div> : null
                    )}  
                </div>
            </div>
            <Footer />
        </>
    )
}
