import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ROUTES } from "./routerConfig";

const router = createBrowserRouter([{
    path: ROUTES.Root,
    element: <App />
}]);

export default router;
