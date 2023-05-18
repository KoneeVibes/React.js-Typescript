type RandomNumberType = {
    value: number
}

type PositiveNumberType = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumberType = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type ZeroNumberType = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumberProps = PositiveNumberType | NegativeNumberType | ZeroNumberType

export const RandomNumber = (props: RandomNumberProps) => {
    return (
        <div>
            {props.value} {props.isPositive && "Positive"} {props.isNegative && "Negative"} {props.isZero && "Zero"}
        </div>
    )
}