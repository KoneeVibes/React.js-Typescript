import { UserData } from "./Person.types"

type CardProps = {
    CardStyles: React.CSSProperties
    children: React.ReactNode
    // take note that children is small 'c'
}

// trying out deconstructing CardProps
export const Card = ({ CardStyles, children }: CardProps) => {
    return (
        <div style={CardStyles}>
            {children}
        </div>
    )
}

export const Container = ({age}: UserData) => {

    return(
        <div>
            <h1>It works {age}</h1>
        </div>
    )
}