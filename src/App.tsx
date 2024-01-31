import React from 'react';
import ReactDOM from 'react-dom';

import "./index.scss";
import AppRoutes from './routes';

const App = () => (
  <AppRoutes />
);
ReactDOM.render(<App />, document.getElementById("app"));
