import { createBrowserRouter } from "react-router";
import Home from "./features/home/routes/Home.tsx";
import Help from "./features/help/routes/Help.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import ErrorPage from "./features/error/routes/Error.tsx"
import ExploreLayout from "./layouts/ExploreLayout.tsx";


export const router = createBrowserRouter([
    {
        path: "/", element: <RootLayout></RootLayout>, errorElement: <ErrorPage></ErrorPage>, children: [
            { index: true, element: <Home></Home>} ,
            {
                path: "explore", element: <ExploreLayout></ExploreLayout>, children: [
                    { path: "categories", element: <ExploreCategories></ExploreCategories> },
                    { path: "cities", element: <ExploreCities></ExploreCities>}
            ] },
            { path: "help", element: <Help></Help>}
    ]}
])