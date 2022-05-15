import LoadingBar from 'react-top-loading-bar'
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
  state ={
    progress :0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  apiKey = process.env.REACT_APP_NEWS_API

  page = 6;
  render() {
    return (

      <BrowserRouter>
      <Navbar />
      <div>
      {/* Placing Key allows to ensure components are remounted */}
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      
      <Routes>
      <Route exact path="/" element={<News progress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.page} country={'in'} />}> </Route>
      <Route exact path="/sports" element={<News progress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.page} country={'in'} category={'sports'}/>}> </Route>
      <Route exact path="/science" element={<News progress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.page} country={'in'} category={'science'}/>}> </Route>
      <Route exact path="/business" element={<News progress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.page} country={'in'} category={'business'}/>}> </Route>
      <Route exact path="/entertainment" element={<News progress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.page} country={'in'} category={'entertainment'}/>}> </Route>
      <Route exact path="/health" element={<News progress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.page} country={'in'} category={'health'}/>}> </Route>
      <Route exact path="/technology" element={<News progress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.page} country={'in'} category={'technology'}/>}> </Route>
      </Routes>


      </div>
     
    </BrowserRouter>

      
    )
  }
}

