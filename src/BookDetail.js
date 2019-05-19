// BookDetail.js

import React from "react"
import { Link } from "react-router-dom"
import datos from "./books.json.js"
import Mensaje from './BookList'

const Detalles = props => {
  const { libroId } = props.match.params // aqui vienen los parametros
  const libro = FindBookById(libroId)

  if (!libro) { // si no existe el id del libro, mostraremos error
    return (
      <p>
        Lo sentimos, este libro no esta disponible...
        <Link to="/libros">Ir atras</Link>
      </p>
    )
  }

  // si existe el libro, tenemos lo que necesitamos!
  return (
    <div id={libroId} className="">
      <Link to="/libros">Ir atras</Link>
      <h1>{libro.name}</h1>
      <small>
        Una novela por {libro.author} en {libro.year}
      </small>
      <p>{libro.description}</p>
      <p>Este libro cuenta con {libro.likes} de likes.</p>
    </div>
  )
}

function FindBookById(libroId) {
  // los parametros vienen por defecto en formato string,
  // así que tenemos que convertir el id a formato número
  libroId = Number(libroId)

  // buscaremos el libro con el id que recibimos, y si no existe
  // devolveremos null para mostrarle al usuario que hubo un error
  return datos.libros.find(libro => libro.id === libroId) || null
}

export default Detalles