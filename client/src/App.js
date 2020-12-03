import React, { Component } from 'react'
import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {RestaurantContextProvider} from './context/RestaurantsContext';
const App=()=>{
  return(
    <RestaurantContextProvider>
    <div className='container'>
    
      <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/restaurants/:id/update' component={UpdatePage} />
        <Route exact path='/restaurants/:id' component={RestaurantDetailPage} />
        </Switch>
      </Router>
      
      
      
      </div>
      </RestaurantContextProvider>
  )
}

export default App;