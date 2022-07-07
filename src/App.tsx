// import React from 'react';
import { BackTop } from 'antd';

import { useRoutesConfig } from "./hooks/useRoutes";
import OperateBar from '@/layout/operateBar/OperateBar';

import './assets/css/index.css';

import Topbar from '@/layout/topBar/Topbar';
const App = () => {
  const element = useRoutesConfig();
  return (
    <div className="relative">
      <Topbar />
      {element}
      <BackTop duration={200} />
      <OperateBar />
    </div>
  );
};

export default App;
