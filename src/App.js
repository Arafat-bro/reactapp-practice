import React, {createContext} from 'react';
import './App.css';
import Keep from './Components/Keep/Keep';
import ComA from './ComA';
import UseEffect from './UseEffect';
import Api from './AxiosApi/Api';
import Router from './Router/Router';
import { BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const FirstName = createContext();
const LastName = createContext();


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Keep />

      <FirstName.Provider value={"Arafat"}>

        <LastName.Provider value={"Bro"}>
          <ComA></ComA>
        </LastName.Provider>
        
      </FirstName.Provider>

      <UseEffect />

      <Api></Api>

      
      <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
export { FirstName,LastName };