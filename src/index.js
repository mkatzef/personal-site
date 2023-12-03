import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Main />
          </div>
        } />
        <Route path="/myworld-vote" element={
          <meta http-equiv="refresh" content="0; URL=https://gnat-open-boa.ngrok-free.app/" />
        } />
        <Route path="*" element={
          <div>
            <p>
            What you talkin' bout, Willis? (404)
            </p>

            Did you mean <a href="/">index</a> or <a href="/myworld-vote">myworld.vote</a>?
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );  
}


ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
