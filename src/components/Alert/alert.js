import React from 'react'

function Alert(props) {

    const {showAlert,alert} = props;

    return (
        <>
            { showAlert &&  <div style={{ height: '20px',width:"40%",margin:"auto" }}  className={`${showAlert=== null  ? "invisible": "visible"}`}  >

                <div className={`alert alert-${alert.type} alert-dismissible fade ${showAlert=== true ? "show": "close"} my-2`} role="alert">

                    <strong>{(alert.type).toString().charAt(0).toUpperCase() + (alert.type).slice(1)}</strong> : {(alert.msg)}

                </div>

            </div>} 

        </>

    )
}

export default Alert