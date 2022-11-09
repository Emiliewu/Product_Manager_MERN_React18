import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Main />} />
      
      <Route exact path="/detail/:id" element={ <Detail />} />
      
      <Route exact path="/edit/:id" element={<Update />} />
 
     </Routes>
    </div>
  );
}

export default App;
