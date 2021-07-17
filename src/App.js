import React from 'react'
import {Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Shop from './components/shop/shop';
import History from './history'
 
const App = () => {
  return (
    <Router history={History}>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        {/* <Route path='/shop/:id' exact component={ShopItems} /> */}
      </Switch>  
    </Router>
  )
}

const Home = () => {
  return (
    <>
      This is the home component
    </>
  )
}

export default App
