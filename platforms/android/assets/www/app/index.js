import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {store} from "../store";

import Sample from "./Component/sample";

class App extends React.Component {
  render(){
    return (
      <div>
        <Sample/>
      </div>
    );
  }
}

render(
  <Provider store={store}>
  <App/>
  </Provider>,window.document.getElementById("app"));
