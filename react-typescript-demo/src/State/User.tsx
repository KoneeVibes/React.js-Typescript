import { useState } from "react"
import { Card } from "../components/Card"

export const User = () => {

    type AuthUser = {
        name: string
        email: string
    }

    const [loggedIn, setloggedIn] = useState<null | AuthUser>(null)
    // OR by way of type assertion
    // const [loggedIn, setloggedIn] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        console.log('Im logged in')
        setloggedIn({
            name: 'Ofofonono',
            email: 'umorenofofonono@gmail.com'
        })
    }

    const handleLogout = () => {
        console.log('Im logged out')
        setloggedIn(null)
    }

    return (
        <div>
            <Card CardStyles={{ display: 'flex', gap: '10em', justifyContent: 'space-between' }}>
                <button onClick={handleLogin} >Log In</button>
                <button onClick={handleLogout}>Log Out</button>
            </Card>
            {
                loggedIn ? (
                    <div>
                        <h1>User name is {loggedIn?.name}</h1>
                        <h1>User email is {loggedIn?.email}</h1>
                    </div>
                ) : null
            }

        </div>
    )
}