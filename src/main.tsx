import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {LanguageProvider} from "./components/context/LanguageProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LanguageProvider>
            <App/>
        </LanguageProvider>
    </StrictMode>,
)
