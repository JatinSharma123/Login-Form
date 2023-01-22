
import { ToastContainer } from 'react-toastify';
import Auth from './components/Auth.jsx';
import 'react-toastify/dist/ReactToastify.css';
import StateContext from './context/StateContext.js';
import StateProvider from './context/StateProvider.js';
function App() {
  return (
    <div className="App">
      <StateProvider>
        <ToastContainer />
        <Auth />
      </StateProvider>

    </div>
  );
}

export default App;
