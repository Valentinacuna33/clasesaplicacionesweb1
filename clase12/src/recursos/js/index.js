const contenedorProductos= document.getElementById('contenedor-productos')
//console.log(contenedorProductos)

contenedorProductos.textContent.innerHtml= 'Producto 1'

contenedorProductos.innerHTML=`
 <article>
    <ul>
        <h3>Collar perro tachas</h3>
             <picture>
                <img src="./recursos/imagenes/producto/correa.jpg" alt="Correa para perro">
            </picture>
                <p>
                    Correa de 5mts para perro
                </p>
                 <ul>
                    <li>Talles S M L</li>
                    <li>Precio $ 10000</li>
                </ul>
</article>
`
//DOM 
