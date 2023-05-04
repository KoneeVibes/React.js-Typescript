import React from 'react';
import { UserData } from './Person.types';

type PersonProps = {
  name: {
    first: string
    last: string
  }
  info: UserData
}

export const Person = ({name, info}: PersonProps) => {
  return (
    <div>
      <div>My name is {name.first} {name.last}</div>
      <h1>I am {info.age} years Old and in {info.class?.class.level} {info.class?.class.levelno} class</h1>
    </div>
  )
}
