import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./Home";
import AboutMe from "./AboutMe/index.tsx";
import Portfolio from "./Portfolio/index.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element: <Home/>},
            {path: "/porfolio", element: <Portfolio/>},
            {path: "/quien-es-andoni-barba-dev", element: <AboutMe/>}
        ]
    }
])

export default router