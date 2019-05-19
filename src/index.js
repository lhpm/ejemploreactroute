import React from "react"
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Lista from "./BookList"
import Detalles from "./BookDetail"
import * as serviceWorker from './serviceWorker'

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/libros" component={Lista} exact />
      <Route path="/libros/:libroId" component={Detalles} exact />
    </Switch>
  </HashRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));