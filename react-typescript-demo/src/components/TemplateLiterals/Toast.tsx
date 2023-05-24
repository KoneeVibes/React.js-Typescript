type HorizontalPosition = "left" | "center" | "right"
type VerticalPosition = "top" | "center" | "bottom"

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center"> | "center"
}

export const Toast = (props: ToastProps) => {
    return (
        <div>
            Toast Container - {props.position}
        </div>
    )
}