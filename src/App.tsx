// import React from 'react';
import fetch from '@/service'
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    console.log(fetch);
  })
  return (
    <div>
      hello react
    </div>
  );
}

export default App;
