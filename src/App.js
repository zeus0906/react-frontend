import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmploye from './components/ListEmploye';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmploye from './components/CreateEmploye';
import UpdateEmploye from './components/UpdateEmploye';
import ViewEmploye from './components/ViewEmploye';

function App() {
  return (
    <div>
      <Router>
        <div>
           <Header />
              <div className="container">
                <Switch>
                  <Route path="/" exact component={ListEmploye}></Route>
                  <Route path="/employes" component={ListEmploye}></Route>
                  <Route path="/add-employes" component={CreateEmploye}></Route>
                  <Route path="/update-employes/:id" component={UpdateEmploye}></Route>
                  <Route path="/view-employes/:id" component={ViewEmploye}></Route>
                  <ListEmploye />
                </Switch>
              </div>
           <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
