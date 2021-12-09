import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, 
Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Info from './components/pages/Info';
import Bike from './components/pages/Bike';
import Sup from './components/pages/Sup';
import VarausBike from './components/pages/VarausBike';
import VarausSup from './components/pages/VarausSup';
import Kalusto from './components/pages/Kalusto';
import Hinnasto from './components/pages/Hinnasto';
import Yhteystiedot from './components/pages/Yhteystiedot';
import Tarinoita from './components/pages/Tarinoita';
import Ehdot from './components/pages/Ehdot';
import Kartta from './components/pages/Kartta';
import Kuvia from './components/pages/Kuvia';
import Videot from './components/pages/Videot';
import Vahvistus from './components/pages/Vahvistus';

function App() {
  return (
    <>
      <Router basename="/~AB5148/web_ohjelmointi_harkat/Harjoitustyo/">
      <Navbar />
      <Switch>
        <Route path='/'  exact component={Home} />
        <Route path='/info' component={Info} />
        <Route path='/bike' component={Bike} />
        <Route path='/sup' component={Sup} />
        <Route path='/varaa-bike' component={VarausBike} />
        <Route path='/varaa-sup' component={VarausSup} />
        <Route path='/kalusto' component={Kalusto} />
        <Route path='/hinnasto' component={Hinnasto} />
        <Route path='/yhteystiedot' component={Yhteystiedot} />
        <Route path='/tarinoita' component={Tarinoita} />
        <Route path='/kartta' component={Kartta} />
        <Route path='/ehdot' component={Ehdot} />
        <Route path='/kuvia' component={Kuvia} />
        <Route path='/videot' component={Videot} />
        <Route path='/vahvistus' component={Vahvistus} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
