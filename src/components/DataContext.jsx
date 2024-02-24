import {createContext, useState, useEffect} from 'react';
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../images.json');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error al cargar los items:', error);
            }
        };

        fetchData();
    }, []);

    return(
        <>
        <DataContext.Provider value={{ items, setItems, cart, setCart }}>
            {children}
        </DataContext.Provider>
        </>
    )
}
