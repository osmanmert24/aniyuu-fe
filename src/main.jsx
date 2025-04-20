import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
+     <CookiesProvider>
+       <RouterProvider router={router} />
+     </CookiesProvider>
+   </StrictMode>
    
  
)
