type TestOwnProps<T extends React.ElementType> = {
    size?: "sm" | "md" | "lg"
    color?: "primary" | "secondary"
    children: React.ReactNode
    as?: T
}

type TestProps<T extends React.ElementType> = TestOwnProps<T> & Omit<React.ComponentProps<T>, keyof TestOwnProps<T>>

export const Test = <T extends React.ElementType = "div">({ children, size, color, as }: TestProps<T>) => {
    const Component = as || "div"
    return (
        <Component className={`class-with-${size}-${color}`} >
            {children}
        </Component>
    )
}