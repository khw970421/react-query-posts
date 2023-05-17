import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './assets/scss/common.scss'
import './assets/scss/reset.scss'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();
import HttpInstance from './api/user.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App /></QueryClientProvider>
  </React.StrictMode>,
)

HttpInstance.setUpInterceptors()