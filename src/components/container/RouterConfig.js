import * as React from "react"
import HomePage from "./HomePage";
import MainPage from "./MainPage";
import MainStage from "./MainStage";

export const routes = [

    {
        path: "/mainStage/bubblegum",
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: "/mainStage/shoelaces",
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>
    },

];
