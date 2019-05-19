// BookList.js

import React, { Component } from "react"
import { Link } from "react-router-dom"
import datos from "./books.json.js" // traemos todos los libros

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      nombre: "hola",
      carrito: []
    }
  }

comprar = (e) =>{

  e.preventDefault();
  e.persist();

    alert(e.target.value)
    this.setState({
      triggerAnimation: 'fadein',
      carrito: this.state.carrito.concat(e.target.id+e.target.value)

    })
  }

    render() {

    return (

    <div className="App">
            <span class={this.state.triggerAnimation}>  
              {this.state.carrito}
            </span>

    <h1>Listado de Libros</h1>
    <ul className="">

    {
        datos.libros.map((libro, index) => (
        <li className="">

          <Link to={`/libros/${libro.id}`}>
            <h3 key={index}>{libro.name}</h3>
          </Link>
          <button href="#" onClick={this.comprar} id={index} value={libro.name}>Comprar</button><span>{this.state.tareas}</span>
        </li>
      )

      )
    }
    </ul>
  </div>


    );
  }

}


export default App