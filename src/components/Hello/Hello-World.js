import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Hello(){
    return(
        <>
            <h1 className="text-danger mt-5">Hello World !!</h1>
            <FontAwesomeIcon icon={faUser} />
        </>
    );
}

export default Hello;