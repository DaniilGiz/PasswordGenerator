import { RouteObject } from "react-router";
import { PasswordGenerator } from "../Pages/PasswordGenerator/PasswordGenerator";
import { Calculator } from "../Pages/Calculator/Calculator";

const routePaths = {
  home: {
    path: "/"
  },
  calculator: {
    path: "/calculator"
  }
};

const routes: RouteObject[] = [
  {
    element: <PasswordGenerator/>,
    path: routePaths.home.path
  },
  {
    element: <Calculator/>,
    path: routePaths.calculator.path
  }
];

export { routes, routePaths };