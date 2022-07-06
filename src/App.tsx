// import React from 'react';
import { BackTop } from 'antd';

import { useRoutesConfig } from "./hooks/useRoutes";

import './assets/css/index.css';

import Topbar from '@/layout/topBar/Topbar';
const App = () => {
  const element = useRoutesConfig();
  return (
    <div>
      <Topbar />
      {element}
      <BackTop duration={200} />
    </div>
  );
};

export default App;
