import './App.css';
import Accordian from './Components/Accordian/Accordian';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className='body'>
      <h1 className='title'>Grab LAPTOP</h1>
      <Shop></Shop>
      <Accordian></Accordian>
    </div>
  );
}

export default App;
