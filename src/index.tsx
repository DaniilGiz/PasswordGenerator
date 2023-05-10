import { createElement, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = lazy(() => import("./App"));

(() => {
  const body = document.body;
  if (body) {
    const container = document.getElementById("root");
    if (container != null) {
      const root = createRoot(container);
      root.render(createElement(App));
    }
  }
})();
