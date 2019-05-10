import React from "react";
import { Provider } from "react-redux";
import "./config/ReactotronConfig";

import store from "./store";
import TodoList from "./TodoList";

console.tron.log("testeando");

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
