import { useParams, Link } from "react-router-dom";

const productsList = [
    {
        id: 1,
        name: 'Televisor',
        price: 123,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita, repellat assumenda tempora temporibus placeat?'
    },
    {
        id: 2,
        name: 'Radio',
        price: 456,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita, repellat assumenda tempora temporibus placeat?'
    },
    {
        id: 3,
        name: 'Telefono',
        price: 789,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita, repellat assumenda tempora temporibus placeat?'
    },
];


function Products() {
    const id = Number(useParams().id);

    let product = productsList.find(oneProd => oneProd.id === id);

    return(
        <>  
            <h2>Soy el componente 'Products'</h2>
            <Link to="/products/1">Product 1</Link><br />
            <Link to="/products/2">Product 2</Link><br />
            <Link to="/products/3">Product 3</Link><br />

            {/* RENDERIZADO CONDICIONAL  --> If producto then render */}
            {
                product && 
                <>
                    <p><b>ID: </b>{id}</p>
                    <p><b>Nombre: </b>{product.name}</p>
                    <p><b>Precio: </b>{product.price}</p>
                    <p><b>Descripcion: </b>{product.description}</p>
                </>
            }
            {
                !product &&
                <>
                    <p>No hay productos con ese id!</p>
                </>
            }
            
        </>
    );


};

export default Products;