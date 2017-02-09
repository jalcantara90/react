import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server'; // el atributo renderToString lo que hace es renderizar la aplicación a un string
import { StaticRouter } from 'react-router-dom';

import Pages from './pages/containers/Page.jsx';

function requestHandler (request, response) {
  const context = {};

  const html = renderToString(
    <StaticRouter location={request.url} context={context}>
      <Pages />
    </StaticRouter>
  );

  response.setHeader('Content-Type', 'text/html'); // con esto nos aseguramos que el navegador sepa interpretar HTML

  if (context.url) {
    response.writeHead(301, {
      Location: context.url
    });
    response.end();
  }

  // if (context.url) {
  //   response.writeHead(404);
  //
  //    html = renderToString(
  //         <StaticRouterlocation={request.url}context={context}>
  //           <Pages />
  //         </StaticRouter>,
  //   );
  // }

  response.write(html);
  response.end();
}

const server = http.createServer(requestHandler);

server.listen(3000);
