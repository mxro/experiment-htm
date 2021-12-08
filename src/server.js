const express = require('express');
const renderToString = require('preact-render-to-string');
const { Index } = require('./index');

const { html } = require('htm/preact');


const app = express();
app.get('/', (request, response) => {
  // render your app to an HTML string
  const body = renderToString(html`<${Index} url=${request.url} />`);
  
  // wrap it in an HTML document and send it back
  response.send(`<!DOCTYPE html><html><body>${body}</body></html>`);
});

app.listen(80);
