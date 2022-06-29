// import React from 'react';
import { useRoutesConfig } from "./hooks/useRoutes";

import './assets/css/index.css';

import Topbar from '@/layout/topBar/Topbar';
const App = () => {
  const element = useRoutesConfig();
  return (
    <div>
      <Topbar />
      {element}
    </div>
  );
};

export default App;
