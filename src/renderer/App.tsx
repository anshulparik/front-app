import './App.css';
import './Global.css';

import { createRoutes } from './routes';

export default function App() {
  const content = createRoutes();
  return content;
}
