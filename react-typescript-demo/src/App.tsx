import React, { useState } from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { List } from './components/List';
import { Status } from './components/Status';
import { H1, H3W } from './components/Typography';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Card, Container } from './components/Card';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { User } from './State/User';
import { Counter } from './State/Counter';

function App() {

  const personName = {
    first: 'Ofofonono',
    last: 'Umoren'
  }

  const Info = {
    age: 12,
    class: {
      class: {
        level: 'Nursery',
        levelno: 2
      }
    }
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

  const [toggleState, setToggleState] = useState(true)

  const toggleButton = () => {
    setToggleState(!toggleState)
  }


  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<User/>} ></Route>
          <Route path='/lessonboard' element={<User/>} ></Route>
        </Routes>
      </BrowserRouter> */}
      <H1>This a sort of lesson board for me here, serious learning, terrible optics
        <H3W>I will win</H3W>
      </H1>
      <H3W>Testing alot of stuff</H3W>
      <Greet name={'Umoren'} age={14} />
      <Person name={personName} info={Info} />
      <List names={listOfNames} age={ages} />
      <Status status='Loading' />
      <Button handleClick={(e, id) => console.log('You clicked a', e, id)} />
      <Input value='' onChange={(event) => console.log(event)} />
      <Card CardStyles={{ display: 'flex', flexDirection: 'column' }}>
        <Button handleClick={(e) => console.log(e.target)} />
        <Input value='' onChange={() => console.log('A change')} />
        <Container age={4} />
      </Card>
      <Card CardStyles={{ background: 'pink', padding: '4em' }}>
        <User />
      </Card>
      <div style={{ display: "flex", justifyContent: "space-between" }} >
        <button onClick={toggleButton}>Toggle Button</button>
        <img src='./logo.svg' alt='sample logo'></img>
      </div>

      <div>
        {toggleState && <h1>I am toggled to show</h1>}
        <img src='./logo.svg' alt='sample logo'></img>
      </div>
      <Counter />
    </div>
  );
}

export default App;
