import React from "react";
import Page from "./views/Page";
import createStore from "./store/store";
import { Provider } from "react-redux";

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

export default App;
