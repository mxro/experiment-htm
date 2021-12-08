
const { html } = require('htm/preact');

exports.Index = (props) => {
    return html`
      <div class="app">
        <h1>This is an app on ${props.url}</h1>
        <p>Current server time: ${new Date + ''}</p>
      </div>
    `;
}