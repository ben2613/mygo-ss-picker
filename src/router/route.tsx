import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routerConfig";
import List from "../pages/List/List";

const router = createBrowserRouter([{
    path: ROUTES.Root,
    element: <List />
}]);

export default router;
