type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps, id: number) => {
    return (
        <button onClick={(event) => props.handleClick(event, id)}> Click Me</button>
    )
}
