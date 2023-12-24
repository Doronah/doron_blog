import {createBrowserRouter} from "react-router-dom";
import {App} from "./App";
import {Home} from "./pages/home";
import {Posts} from "./pages/posts";
import {PostPage} from "./pages/post";
import {ContactPage} from "./pages/contact";
import React from "react";
import {Admin} from "./pages/admin";
import { About } from "./pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <PostPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/admin',
        element: <Admin />
      }
    ],
  },
]);