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
import { User } from './components/State/User';
import { Counter } from './components/State/Counter';
import { ThemeContextProvider } from './components/Context/ThemeContext';
import { Box } from './components/Context/Box';
import { UserContextProvider } from './components/Context/UserContext';
import { DomRef } from './components/Ref/DomRef';
import { MutableRef } from './components/Ref/MutableRef';
import { ClassCounter } from './components/Class/Counter';
import { Private } from './components/Auth/Private';
import { Profile } from './components/Auth/Profile';
import { Lists } from './components/Generics/List';
import { RandomNumber } from './components/Restriction/RandomNumber';
import { Toast } from './components/TemplateLiterals/Toast';
import { AnotherButton } from './components/Html/Button';
import { Test } from './components/Polymorphic/Test';

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

  const [test, setTest] = useState("")

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
      {test}
      <Greet name={'Umoren'} age={14} update={setTest} />
      <Person name={personName} info={Info} />
      <List names={listOfNames} age={ages} />
      <Status status='Success' />
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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <ClassCounter message='The count value is' />
      <Private isLoggedIn={true} Component={Profile} />
      <Lists items={[{ name: "okon", age: 16 }, { name: "effiong", age: 60 }, { name: "umoren", age: 100 }]} handleOnClick={(item) => console.log(item)} />
      <RandomNumber value={10} isPositive />
      <Toast position={"center"} />
      <AnotherButton variant={"primary"} onClick={() => console.log("I will win")} >Another Button</AnotherButton>
      <Test as={"h1"} >I will win today</Test>
      <Test as={"label"} htmlFor='Win' >I will win tomorrow</Test>
      <Test as='p'>I will win always</Test>
    </div>
  );
}

export default App;
