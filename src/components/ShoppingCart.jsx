import { useContext } from "react";
import { DataContext } from "./DataContext";
export default function ShoppingCart() {
    const { cartItems, setCartItems } = useContext(DataContext);
   
    const removerItem = (id) => {
        setCartItems(prevData => prevData.map(item => 
            item.id === id ? { ...item, status: 'un-selected'} : item));
        decrementar();

        // Obtener la lista de libros seleccionados del localStorage
        const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];

        // Filtrar el libro a ser removido
        const updatedItems = selectedItems.filter((shoes) => shoes.id !== id);

        // Actualizar el localStorage con la nueva lista
        localStorage.setItem('selectedItems', JSON.stringify(updatedItems));
        console.log('Updated Cart in localStorage:', JSON.parse(localStorage.getItem('selectedItems')) || []);
    }

    const filteredItems = libros.filter( item => item.status === 'selected');
    
    return (
        <>
            <h2>Carrito de compras</h2>
        </>
    )
}
