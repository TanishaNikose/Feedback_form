import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Feedback from './Components/FeedbackForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Feedback />
  </StrictMode>,
)