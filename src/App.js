import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

// TODO: COMPONENTES
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Navigation></Navigation>

      <Route path='/' Component={NotesList}/> 
      <Route path='/edit/:id' Component={CreateNote}/> 
      <Route path='/create' Component={CreateNote}/> 
      <Route path='/user' Component={CreateUser}/> 
    </Router>
  );
}

export default App;
