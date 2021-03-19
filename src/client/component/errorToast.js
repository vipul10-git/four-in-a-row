import React from 'react';
import '../../assets/css/error.css';

const ErrorMsgToast = (props) =>{
 
    const { errMsg } = props;
    return (
        <div className='errToast'>
            {errMsg}
        </div>
    );
}

export default ErrorMsgToast;
