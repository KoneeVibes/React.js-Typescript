import React from 'react';

type GreetProps = {
    name: string,
    age: number
}

export const Greet = (props: GreetProps) => {
  return (
    <div>Hi {props.name}, you have done well to upgrade your {props.age} typescript knowledge</div>
  )
}
