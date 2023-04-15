import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
