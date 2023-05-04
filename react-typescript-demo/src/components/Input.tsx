type InputProps = {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    return(
        <input type="text" value={props.value} onChange={props.onChange}/>
    )
}