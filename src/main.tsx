import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { EventsProvider } from './eventsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EventsProvider>
      <App />
    </EventsProvider>
  </React.StrictMode>,
)
