import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import dva from "./dva/index.ts";
import global from "./models/global";
import global2 from "./models/global2";

const app = dva();
app.model(global);
app.model(global2);
app.start();

ReactDOM.render(
  <Provider store={app.store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
