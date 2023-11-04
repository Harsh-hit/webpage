import React from "react";
import "./logoname.css"

const Logo = () =>{
    return(
        <header>
                <img src={process.env.PUBLIC_URL + "/ccd-logo.png"} alt="CCD Logo" />
        </header>
    )
}

export default Logo