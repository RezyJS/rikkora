import { RIKKORA_VERSION } from '@rikkora/ui';
import './App.css';

export default function App() {
  return (
    <div
      data-rkr-theme='violet-smoke'
      className='app'
    >
      <h1>Rikkora UI</h1>
      <p>Library version: {RIKKORA_VERSION}</p>
    </div>
  );
}
