import {useEffect, useLayoutEffect} from 'react';
import './App.css';
import { BrowserRouter ,useLocation, useRoutes, Link } from 'react-router-dom';
import { routes } from './Router';

const AppRoutes = () => {
  const _routes = useRoutes(routes);
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const defaultPageTitle = "Data.gouv.mc";

    document.title = defaultPageTitle;
  }, [location.pathname]);

  return <>{_routes}</>;
};

const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <div className="app_nav">
          <Link to={"/"}>Home</Link>/
          <Link to={"/calculator"}>Calculator</Link>
        </div>
        <AppRoutes/>
      </div>
    </BrowserRouter>

  );
}

export default App;
