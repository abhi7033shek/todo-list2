import { useState } from 'react';
import MainSection from './MainSection';
import './App.css';
import SideNav from "./SideNav";

function App() {
  const [active,setActive] = useState("")
  return (
    <div id='main'>
      <header>
        <div className='row'>
          <div className='col-md-2'>
            <SideNav change={setActive}/>
          </div>
          <div className='col-md-4'>
            
            <MainSection active={active}/>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
