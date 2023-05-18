export type ProfileProps = {
    name: string
}

export const Profile = ({name}: ProfileProps) => {
    return (
        <div>
            <h1>Private Profile Component. Name is {name}</h1>
        </div>
    )
}