import './App.css';
import Entete from './components/Entete';
import Introduction from './components/Introduction';
import Departments from './components/Departments';
import Sponsors from './components/Sponsors';
import Platforms from './components/Platforms';
import Carteliste from './components/Carteliste';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Entete />
      <Introduction />
      <Departments />
      <Sponsors />
      <Platforms />
      <Carteliste />
      <Footer />

    </div>
  );
}

export default App;
