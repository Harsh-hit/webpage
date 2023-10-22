import React from "react";
import "./logoname.css"

const Logo = () =>{
    return(
        <header>
                <img src={process.env.PUBLIC_URL + "/ccd-logo.png"} alt="CCD Logo" />
                <h4>Communicando</h4>
        </header>
    )
}

export default Logo