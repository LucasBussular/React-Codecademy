import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myList = (
  <ul>
    <li>lucas</li>
    <li>pereira</li>
    <li>bussular</li>
  </ul>
);

root.render(myList);