import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product/:id',
    element: <Detail />
  },
  {
    path: '/post',
    element: <Post />
  }
])

export default router