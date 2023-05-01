import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { List } from './components/List';

function App() {
  const personName = {
    first: 'Ofofonono',
    last: 'Umoren'
  }

  const listOfNames = [
    {
      first: 'Ofofonono',
      last: 'Umoren'
    },
    {
      first: 'Idaraobong',
      last: 'Umoren'
    },
    {
      first: 'Keneabasi',
      last: 'Umoren'
    }
  ]
  return (
    <div className="App">
      <Greet name={'Umoren'} age={14}/>
      <Person name={personName}/>
      <List names={listOfNames}/>
    </div>
  );
}

export default App;
