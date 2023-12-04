
import './App.css';
import Edificios from './components/Edificios';
import Login from './components/Login';
import Reclamos from './components/Reclamos';
import AgregarPersona from './components/AgregarPersona'
import UnidadesPorEdificio from './components/UnidadesPorEdificio';
import HabilitadosPorEdificio from './components/HabilitadosPorEdificio';
import DueniosPorEdificio from './components/DueniosPorEdificio';
import HabitantesPorEdificio from './components/HabitantesPorEdificio';



function App() {
  return (
    <div className="App">
      <HabitantesPorEdificio/>
    </div>
  );
}

export default App;
