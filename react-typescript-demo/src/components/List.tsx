import React from 'react';

type ListProps = {
    names: {
        first: string
        last: string
    }[]
    // type for an array of objects
}


export const List = (props: ListProps) => {
    return (
        <div>
            {props.names.map((name, index) => {
                return (
                    <h2 key={index}>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}
