import React from "react"
import { Link } from "react-router-dom"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

export default () => (
  <h1 styles={styles}>
    Lista de Libros <Link to="/libros">Libros disponibles</Link>
  </h1>
)