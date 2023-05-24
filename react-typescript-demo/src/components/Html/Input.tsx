type InputProps = React.ComponentProps<"input">

export const AnotherInput = (props: InputProps) => {
    return (
        <input {...props} />
    )
}