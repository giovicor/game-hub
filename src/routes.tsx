import ErrorBoundaryPage from "./pages/ErrorBoundaryPage";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: ErrorBoundaryPage,
    children: [
      { index: true, Component: HomePage },
      { path: "games/:id", Component: GameDetailPage },
    ],
  },
]);

export default router;
