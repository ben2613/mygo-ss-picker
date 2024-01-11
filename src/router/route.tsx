import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routerConfig";
import List from "@/pages/List/List";
import Fullscreen from "@/pages/Fullscreen/Fullscreen";

const router = createBrowserRouter([{
    path: ROUTES.Root,
    element: <List />
}, {
    path: ROUTES.Fullscreen,
    element: <Fullscreen />,
}
]);

export default router;
