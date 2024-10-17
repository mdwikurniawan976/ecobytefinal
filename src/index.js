import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RouterList } from './utility/RouteList';
import './utility/bootstrap/css/bootstrap.min.css'
// import 'antd/dist/antd.css';
import './utility/font/font.css'
import './index.css'
import '@yaireo/tagify/dist/tagify.css';
import 'aos/dist/aos.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={RouterList}/>
  </React.StrictMode>
);

