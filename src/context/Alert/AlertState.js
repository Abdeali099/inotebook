import React, { useState } from 'react'
import AlertContext from './AlertContext';

function AlertState(props) {

    const [alert, setAlert] = useState({ msg: "", type: "" }); // -> 'alert' is an Object
    const [showAlert, setShowAlert] = useState(null)

    // set shAlert with setAlertMsg function //

    const setAlertMsg = (message, type) => {

        setShowAlert(true);

        setAlert({
            msg: message,
            type: type
        });

        setTimeout(() => {
            setAlert({ msg: "", type: "" });
            setShowAlert(null);
        }, 2500);
    };

    return (

        <AlertContext.Provider value={{ setAlertMsg,alert,showAlert}}>
            {props.children}
        </AlertContext.Provider>
    );
}

export default AlertState;