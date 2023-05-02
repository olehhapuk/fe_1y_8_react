import { createRoot } from 'react-dom/client';

import './index.css';
import App from './components/App';

const rootElem = document.querySelector('#root');

createRoot(rootElem).render(<App />);
