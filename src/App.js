import LoadingBar from 'react-top-loading-bar'
import './App.css';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";



import React, { Component,useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
const App = () => {
  const [progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API

  const page = 6;

    return (

      <BrowserRouter>
      <Navbar />
      <div>
      {/* Placing Key allows to ensure components are remounted */}
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      
      <Routes>
      <Route exact path="/" element={<News progress={setProgress} apiKey={apiKey} key="general" pageSize={page} country={'in'} />}> </Route>
      <Route exact path="/sports" element={<News progress={setProgress} apiKey={apiKey} key="sports" pageSize={page} country={'in'} category={'sports'}/>}> </Route>
      <Route exact path="/science" element={<News progress={setProgress} apiKey={apiKey} key="science" pageSize={page} country={'in'} category={'science'}/>}> </Route>
      <Route exact path="/business" element={<News progress={setProgress} apiKey={apiKey} key="business" pageSize={page} country={'in'} category={'business'}/>}> </Route>
      <Route exact path="/entertainment" element={<News progress={setProgress} apiKey={apiKey} key="entertainment" pageSize={page} country={'in'} category={'entertainment'}/>}> </Route>
      <Route exact path="/health" element={<News progress={setProgress} apiKey={apiKey} key="health" pageSize={page} country={'in'} category={'health'}/>}> </Route>
      <Route exact path="/technology" element={<News progress={setProgress} apiKey={apiKey} key="technology" pageSize={page} country={'in'} category={'technology'}/>}> </Route>
      </Routes>


      </div>
     
    </BrowserRouter>

      
    )

}


export default App