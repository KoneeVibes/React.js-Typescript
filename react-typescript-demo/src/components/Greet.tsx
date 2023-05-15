import React from 'react';

type GreetProps = {
  name: string,
  age: number,
  update?: React.Dispatch<React.SetStateAction<string>>
}

export const Greet = (props: GreetProps) => {
  
  props.update && props.update ('Your attempt is successful')
  
  return (
    <div>Hi {props.name}, you have done well to upgrade your {props.age} typescript knowledge</div>
  )
}
