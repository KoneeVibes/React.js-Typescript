import React from 'react';
import styled from 'styled-components';

// I'm sampling different stuff here around passing children props to react components:

// First I'm specifying the type that accepts string or numbers as children props;
type TypographyProps = {
    children: string | number
    color?: string
}

// Then here, I'm specifying the type that accepts another component as children props.
type H1Props = {
    children: React.ReactNode;
}

// Then here I'm showing how to return it's jsx(if that the correct term);
const H1W = styled.h1`
    color: pink;
`

const H2W = styled.h2`
    color: brown;
`
// This syntax is specific to styled components and makes code simpler. Here you can export both the component and it's type in one go;
export const H3W = styled.h3<TypographyProps>`
    color: ${(props) => props.color || 'orange'};
`

// Otherwise you can specify the child props type in this other format, but the former is preferrable.
export const H1 = (props: H1Props) => {
    return (
        <div>
            <H1W>{props.children}</H1W>
            <H3W color='brown'>Losers Quit</H3W>
        </div>
    )
}

export const H2 = (props: TypographyProps) => {
    return (
        <H2W>{props.children}</H2W>
    )
}
