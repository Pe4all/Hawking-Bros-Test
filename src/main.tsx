import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./form/Form.tsx";
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Form />
    </Provider>
  </React.StrictMode>,
);
