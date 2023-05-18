type ListProps<T> = {
    items: T[]
    handleOnClick: (value: T) => void
}

export const Lists = <T extends { name: string, age: number }>({ items, handleOnClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => handleOnClick(item)}>
                        {item.name}
                        {item.age}
                    </div>
                )
            })}
        </div>
    )
}