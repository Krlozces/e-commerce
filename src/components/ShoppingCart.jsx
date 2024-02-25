import { useContext, useEffect } from "react";
import { DataContext } from "./DataContext";
import Card from "./Card";
export default function ShoppingCart() {
    const { cart, setCart } = useContext(DataContext);
    const { cartTotal, setCartTotal, removeFromCart } = useContext(DataContext);
    
    useEffect(() => {
        total();
    }, [cart]);
    
    const total = () => {
        let totalVal = 0;
        for(let i = 0; i < cart.length; i++){
            totalVal += parseFloat(cart[i].price);
        }
        setCartTotal(totalVal);
    };

    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
    };

    return (
        <>
            <h2 className="font-bold text-2xl text-center my-4">Carrito de compras</h2>
            <div className="flex justify-between flex-wrap">
                {cart && cart.length > 0 ? (
                    cart.map((cartItem) => (
                        <div key={cartItem.id} className="w-[280px]">
                            <Card
                                title={cartItem.title}
                                description={cartItem.description}
                                precio={cartItem.price}
                                image={cartItem.image}
                                handlerOnClick={() => handleRemoveFromCart(cartItem)}
                                val={"Remove from Cart"}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center font-semibold">Tu carrito está vacío</p>
                )}
            </div>
        </>
    )
}
