import React from 'react';

type NameSyntax = {
    first: string
    last: string
}

type ListProps = {

    // type declaration for an array of objects

    // names?: {
    //     first: string
    //     last: string
    // }[]

    // or

    names?: Array<NameSyntax>

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
