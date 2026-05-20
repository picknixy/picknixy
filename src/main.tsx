import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Remove static prerender tags to avoid duplicates from react-helmet
const pTitle = document.getElementById('prerender-title');
if (pTitle) pTitle.remove();
const pDesc = document.getElementById('prerender-desc');
if (pDesc) pDesc.remove();
const pCan = document.getElementById('prerender-can');
if (pCan) pCan.remove();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
