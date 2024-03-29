import React from 'react';
import {BrowserRouter as Router,Routes,Route,useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css';

// TODO: COMPONENTES
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

function App() {
  //TODO: Las 2 lineas posteriores son necesarias para enviar el Id al componente 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const parm_id = () => <CreateNote params={useParams()} />;

  return (
    <Router>
      <Navigation></Navigation>
      <div className='container p-4'>
        <Routes>
          <Route path='/' exact Component={NotesList}/> 
          <Route path='/edit/:id' Component={parm_id} /> 
          <Route path='/create' Component={CreateNote}/> 
          <Route path='/user' Component={CreateUser}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
