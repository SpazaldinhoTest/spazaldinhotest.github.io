
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Log to help with debugging
console.log("Application starting, looking for root element...");
const root = document.getElementById("root");

if (root) {
  console.log("Root element found, rendering application");
  createRoot(root).render(<App />);
} else {
  console.error("Root element not found");
}
