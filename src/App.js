import './App.css';
import { Component } from 'react';
import { Portfolio } from './Component/Portfolio/Portfolio';
import { Navbar } from './Component/Navbar/Navbar';
import { Home } from './Component/Home/Home';
import { Contact } from './Component/Contact/Contact';
import Layout from './Component/Layout/Layout';
import {About} from './Component/About/About'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import NotFound from './Component/NotFound/NotFound';
const Routes = createBrowserRouter([{
  path : '/' , element : <Layout/> , children: [
    {index : true , element : <Home/>},
    {path : 'portfolio' , element : <Portfolio/>},
    {path : 'about' , element : <About/>},
    {path : 'contact' , element : <Contact/>},
    {path : '*' , element : <NotFound/>},
  ]
}])

class App extends Component {
  render(){
    return (
      <div>
        <RouterProvider router={Routes}/>
      </div>
      );
    }
}

export default App;
