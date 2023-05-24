type ButtonProps = {
    variant: "primary" | "secondary"
    children: string
} & Omit<React.ComponentProps<"button">, "children">

export const AnotherButton = ({ children, variant, ...theRest }: ButtonProps) => {
    return (
        <button className={`class-with-${variant}`} {...theRest} >{children}</button>
    )
}