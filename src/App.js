import React from 'react';
import { ConfigProvider } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Story from './pages/Story';
import NotFound from './pages/404';

function App() {
  return (
    <ConfigProvider theme={{token: {colorPrimary: '#00b96b'}}}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story/:storyId" element={<Story />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
