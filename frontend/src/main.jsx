import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './App.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import store from './store/index.js'
import 'animate.css';
import Loading from './components/Loading.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Suspense>
  </Provider>
)
