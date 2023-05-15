import { createContext, useState } from "react";

type AuthUser = {
    name: string
    email: string
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

// The useContext hook is specifically designed for accessing values from a context within a component. However it is
// important note to take from this particular example is that it is a very neat way to pass data from child to parent
// component. So declaring the user state here and setting it to receive it's setUser value from its child component makes it sleek.

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    )
}