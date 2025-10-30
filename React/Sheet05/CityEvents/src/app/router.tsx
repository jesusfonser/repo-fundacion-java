import { createBrowserRouter } from "react-router";
import Home from "./features/home/routes/Home.tsx";
import Explore from "./features/explore/routes/Explore.tsx";
import Help from "./features/help/routes/Help.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import ErrorPage from "./features/error/routes/Error.tsx"


export const router = createBrowserRouter([
    {
        path: "/", element: <RootLayout></RootLayout>, errorElement: <ErrorPage></ErrorPage>, children: [
            { index: true, element: <Home></Home> },
            { path: "explore", element: <Explore></Explore> },
            { path: "help", element: <Help></Help>}
    ]}
])