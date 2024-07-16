import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import supabase from './supabase';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <SessionContextProvider supabaseClient={supabase} >
    <App />
  </SessionContextProvider>
  </React.StrictMode>
);
