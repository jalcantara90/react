import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home.jsx';
import About from './about.jsx';
import Error404 from './Error404.jsx';

function Pages() {
  return (
    <main role="application">
        <Switch>
            <Route
              strict
              path="/" // definición de la ruta donde vamos a mostrar el componente deseado
              exact // con esto definimos que debe ser exacta la ruta, si no al definir /about también podría hacer Match con /
              component={Home} // definición del componente que vamos a mostrar en la ruta
            />
            <Route
              path="/about"
              exact
              component={About}
            />
            <Route component={Error404} />
        </Switch>
    </main>
  )
}

export default Pages;
