import React, { useState } from 'react';
import { Greet } from './Greet';

type StatusProps = {
    status?: 'Success' | 'Loading' | 'Error'
}

export const Status = (props: StatusProps) => {
    let message;
    // So here I try to pass props from child to parent
    // The successMessage state is updated from the child component, Greet.
    const [successMessage, setSuccessMessage] = useState('')

    if (props.status === 'Success') {
        message = successMessage;
    } else if (props.status === 'Error') {
        message = 'Error whilst starting up'
    } else {
        message = 'Loading'
    }
    return (
        <>
            <div>{message}</div>
            <Greet name='willian' age={34} update={setSuccessMessage} />
        </>
    )
}
