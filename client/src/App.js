import MainRouter from './MainRouter';
import Loader from './loader/Loader';
import { useSelector } from'react-redux';
import ToastModal from './toast/ToastModal';
import { ToastContainer } from 'react-toastify';

function App() {
  
  let getLoader = useSelector((state) => state.loader)
  return (
    <div clas sName="App">
      {getLoader && <Loader/>}
      <ToastContainer/>
      <MainRouter/>
    </div>
  );
}

export default App;
