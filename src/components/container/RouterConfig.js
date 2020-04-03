import * as React from "react"
import HomePage from "./HomePage";
import MainPage from "./MainPage";

export const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <HomePage/>
    },
    {
        path: "/bubblegum",
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: "/shoelaces",
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>
    },
    {
        path: "/mainPage",
        sidebar: () => <div>mainPage</div>,
        main: () => <MainPage/>
    }
];
