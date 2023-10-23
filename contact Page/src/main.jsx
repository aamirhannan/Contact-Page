import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.css'
import './index.css'
import Navigation from './components/Navigation/Navigation.jsx'
import ContactHeader from './components/ContactHeader/ContactHeader.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation/>
    <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
    </main>
  </React.StrictMode>,
)
