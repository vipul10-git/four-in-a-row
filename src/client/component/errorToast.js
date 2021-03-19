import React from 'react';
import '../../assets/css/global.css';

const ErrorMsgToast = (props) =>{
 
        const { errMsg } = props;
        return (
                <div style={{ maxWidth: 450 }}>
                    <div className='errToast'>
                        {errMsg}
                    </div> 
                </div>
        );
}

export default ErrorMsgToast;
