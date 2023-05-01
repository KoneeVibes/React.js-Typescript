import React from 'react';

type StatusProps = {
    status?: 'Success' | 'Loading' | 'Error'
}

export const Status = (props: StatusProps) => {
    let message;

    if (props.status === 'Success'){
        message = 'Success';
    }else if (props.status === 'Error'){
        message = 'Error whilst starting up'
    }else{
        message = 'Loading'
    }
  return (
    <div>{message}</div>
  )
}
