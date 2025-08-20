import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserStore } from "./store/UserStore";
import { FilmStore } from "./store/FilmStore";

interface IContext {
    user: UserStore;
    film: FilmStore;
}

export const Context = createContext<IContext | null>(null);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <React.StrictMode>
        <Context.Provider
            value={{
                user: new UserStore(),
                film: new FilmStore(),
            }}
        >
            <App />
        </Context.Provider>
    </React.StrictMode>
);
