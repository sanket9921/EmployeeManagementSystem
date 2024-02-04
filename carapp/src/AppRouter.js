import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import AddCar from "./component/AddCar";
import ShowCars from "./component/ShowCars";
import UpdateCar from "./component/UpdateCar";
import App from "./component/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <AddCar />,
      },
      {
        path: "showcar",
        element: <ShowCars />,
      },
      {
        path: "updateCar/:carName",
        element: <UpdateCar />,
      },
    ],
  },
]);

export default router;
