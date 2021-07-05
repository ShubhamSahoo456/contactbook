import react from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch,Route } from 'react-router';

import Home from './home';
import AddContact from './Addcontact';
import Editcontact from './Editcontact';
import Navbar from './Navbar';


const App =()=>{


  return(
    <>
      <ToastContainer />
      <Navbar/>
      <Switch>
        <Route exact path="/" component={()=><Home />}/>
        <Route exact path="/addcontact" component={()=><AddContact />}/>
        <Route exact path="/editcontact/:id" component={()=><Editcontact />}/>
      </Switch>
    </>
  )
}

export default App;