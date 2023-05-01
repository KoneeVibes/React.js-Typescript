import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { List } from './components/List';
import { Status } from './components/Status';
import { H1, H3W } from './components/Typography';

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

  const ages = [12, 13, 15]

  return (
    <div className="App">
      <H1>This a sort of lesson board for me here, serious learning, terrible optics
        <H3W>I will win</H3W>
      </H1>
      <H3W>Testing alot of stuff</H3W>
      <Greet name={'Umoren'} age={14}/>
      <Person name={personName}/>
      <List names={listOfNames} age={ages}/>
      <Status status='Loading'/>
    </div>
  );
}

export default App;
