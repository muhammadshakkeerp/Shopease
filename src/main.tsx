import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App
            id={0}
            title={""}
            img={""}
            offerAvailable={false}
            price={0}
            quantity={0} thumbImg={""}          />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
