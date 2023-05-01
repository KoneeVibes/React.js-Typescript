import React from 'react';

type ListProps = {

    // type declaration for an array of objects

    names?: {
        first: string
        last: string
    }[]

    // type declaration for an array of numbers

    age?: number[]
}


export const List = (props: ListProps) => {
    return (
        <div>
            {props.names?.map((name, index) => {
                return (
                    <div>
                        <h2 key={index}>{name.first} {name.last}</h2>
                    </div>
                )
            })}
            {
                props.age?.map(ag => {
                    return(
                        <p>I am {ag} old</p>
                    )
                })
            }

        </div>
    )
}
