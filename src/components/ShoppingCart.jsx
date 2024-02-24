import { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import images from '../../public/images.json';
import Card from "./Card";
export default function ShoppingCart() {
    const { cart, setCart } = useContext(DataContext);
    const { items, setItems } = useContext(DataContext);
    const [cartTotal, setCartTotal] = useState(0);
    
    useEffect(() => {
        total();
    }, [cart]);
    
    const total = () => {
        let totalVal = 0;
        for(let i = 0; i < cart.length; i++){
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };

    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
    }
    return (
        <>
            <h2 className="font-bold text-2xl text-center my-4">Carrito de compras</h2>
            {cart && cart.length > 0 ? (
                cart.map((cartItem) => (
                    <div key={cartItem.id} className="cart-item">
                        <Card
                            title={cartItem.title}
                            description={cartItem.description}
                            precio={cartItem.price}
                            image={cartItem.image}
                            onClick={() => removeFromCart(cartItem)}
                        />
                    </div>
                ))
            ) : (
                <p className="text-center">Tu carrito está vacío</p>
            )}
        </>
    )
}
