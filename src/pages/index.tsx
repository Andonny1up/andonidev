import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./Home";
import AboutMe from "./AboutMe.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element: <Home/>},
            {path: "/porfolio", element: <div>Porfolio</div>},
            {path: "/quien-es-andoni-barba-dev", element: <AboutMe/>}
        ]
    }
])

export default router