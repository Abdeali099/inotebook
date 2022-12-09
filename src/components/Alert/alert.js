import React from 'react'

function Alert(props) {
    return (
        <>
            <div className="alert alert-primary d-flex align-items-center" role="alert">
            {/* <i className="fa fa-circle-exclamation mx-2"></i> */}
                <div>
                    {props.message}
                </div>
            </div>
        </>

    )
}

export default Alert