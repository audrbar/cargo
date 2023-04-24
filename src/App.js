import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { GlobalProvider } from './Components/GlobalContext';
import Routes from './Components/Routes';

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
