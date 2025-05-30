import { createBrowserRouter } from "react-router-dom";
import {About} from '../pages/about';
import {Character} from '../pages/character';
import {Location} from '../pages/location';
import { Top } from '../pages/top';
import {Trailer} from '../pages/trailer';

export const routes = createBrowserRouter([
  {
    children: [
      { path: "/top", element: <Top /> },
      { path: "/about", element: <About /> },
      { path: "/character", element: <Character /> },
      { path: "/location", element: <Location /> },
      { path: "/trailer", element: <Trailer /> },
    ],
  },
]);
