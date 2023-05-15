import { useReducer } from "react";

type CounterState = {
    count: number
}

type UpdateAction = {
    type: "increment" | "decrement"
    payload: number
}

type ResetAction = {
    type: "reset"
}

type CounterAction = UpdateAction | ResetAction

export const Counter = () => {

    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state: CounterState, action: CounterAction) {
        switch (action.type) {
            case "increment":
                return { count: state.count + action.payload };
            case "decrement":
                return { count: state.count - action.payload };
            case "reset":
                return initialState
            default:
                return state
        }
    }

    // A little explainer to help me when I look back:

    // The useReducer hook is used in cases where states are managed by complex logic. It takes in a reducer function and an initial state value
    // and returns the state and a dispatch function. The reducer function contains your complex logic and takes in two parameters - the state 
    // and the action object from the dispatch function. 

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: "increment", payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>decrement 10</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </>
    )
}