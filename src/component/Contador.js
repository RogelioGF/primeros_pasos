// importamos useState, el hook para crear un state en nuestro componente
import React, {useState} from "react";

function Contador() {
    // useState recibe un parámetro: el valor inicial del estado (que será 0)
    // y devuelve un array de dos posiciones:
    //  la primera (count), tiene el valor del estado
    //  la segunda (setCount), el método para actualizar el estado
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>hiciste click {count} veces</p>
            {/* actualizamos el state al hacer click con setCount */}
            <button onClick={() => setCount(count + 1)}>Haz click y gozalooo</button>
        </div>
    );
}

export default Contador;