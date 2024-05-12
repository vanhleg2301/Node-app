import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./firebase/config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
