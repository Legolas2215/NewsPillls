
import './App.css';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";



import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  page = 6;
  render() {
    return (

      <BrowserRouter>
      <Navbar />
      <div>
      {/* Placing Key allows to ensure components are remounted */}
      
      <Routes>
      <Route exact path="/" element={<News key="general" pageSize={this.page} country={'in'} />}> </Route>
      <Route exact path="/sports" element={<News key="sports" pageSize={this.page} country={'in'} category={'sports'}/>}> </Route>
      <Route exact path="/science" element={<News key="science" pageSize={this.page} country={'in'} category={'science'}/>}> </Route>
      <Route exact path="/business" element={<News key="business" pageSize={this.page} country={'in'} category={'business'}/>}> </Route>
      <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.page} country={'in'} category={'entertainment'}/>}> </Route>
      <Route exact path="/health" element={<News key="health" pageSize={this.page} country={'in'} category={'health'}/>}> </Route>
      <Route exact path="/technology" element={<News key="technology" pageSize={this.page} country={'in'} category={'technology'}/>}> </Route>
      </Routes>


      </div>
     
    </BrowserRouter>

      
    )
  }
}

