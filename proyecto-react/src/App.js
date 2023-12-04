
import './App.css';
import Edificios from './components/Edificios';
import Login from './components/Login';
import Reclamos from './components/Reclamos';
import AgregarPersona from './components/AgregarPersona'
import UnidadesPorEdificio from './components/UnidadesPorEdificio';
import HabilitadosPorEdificio from './components/HabilitadosPorEdificio';
import DueniosPorEdificio from './components/DueniosPorEdificio';
import HabitantesPorEdificio from './components/HabitantesPorEdificio';
import DueniosPorUnidad from './components/DueniosPorUnidad';
import ReclamosPorEdificio from './components/ReclamosPorEdificio';
import ReclamosPorUnidad from './components/ReclamosPorUnidad';



function App() {
  return (
    <div className="App">
      <ReclamosPorUnidad/>
    </div>
  );
}

export default App;
