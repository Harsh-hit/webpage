import React, { useEffect } from "react";
import "./Loader.css";
import Navi from "../Navbar/navbar";
import Logo from "../LogoName/logoName";
const NewLoader = () => {
    useEffect(() => {
        let intro = document.querySelector(".intro");
        let logoSpan = document.querySelectorAll(".literary-brains");

        // Show <h4> immediately
        setTimeout(() => {
            intro.style.top = '0'; // Move the intro back to its original position
        }, 0);

        // Define idx within the forEach callback function
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 200);
        });

        // Remove the fade class from <span> elements after a delay
        setTimeout(() => {
            logoSpan.forEach((span) => {
                span.classList.remove("active");
                span.classList.add("fade");
            });
        }, logoSpan.length * 200 + 2000); // Adjust the timing based on the number of <span> elements

    }, []);

    return (
        <div className="intro">
            <Navi /> {/* Render the Navi component here directly */}
            <Logo/>
            <div className="logo-header">
                <h1>
                    {/* <span className="logo">Communicando</span> */}
                </h1>
                <h1 className="literary-brains">
                    <span>Literary</span>
                    <span>brains</span>
                    <div className="at-work">
                        <span>at</span>
                        <span>Work</span>
                        <span>.</span>
                    </div>
                </h1>
            </div>
        </div>
    );
}

export default NewLoader;
