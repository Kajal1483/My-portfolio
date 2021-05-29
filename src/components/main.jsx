import React from "react";

function Main(){
return (<section id="hero" className="s-hero target-section">

    <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>

    <div className="row s-hero__content">
        <div className="column">

            <div className="s-hero__content-about">

                <h1>I'm Kajal choubey.</h1>

                <h3>
            A <span>student</span>, budding <span>software developer </span> and <span>competitive programmer</span> enjoying with aderaniline rush and passion to learn more.
               Let's <a className="smoothscroll" href="#about">start scrolling </a>
                and learn more <a className="smoothscroll" href="#about">about me</a>.
                </h3>

                <div className="s-hero__content-social">
                <a href="https://www.linkedin.com/in/kajal-choubey-944b471a5/"><i className="fab fa-linkedin" aria-hidden="false"></i></a>
                    <a href="https://codeforces.com/profile/kajal_1483"><i className="fas fa-code" aria-hidden="false"></i></a>

                    <a href="https://github.com/Kajal1483"><i className="fab fa-github"aria-hidden="false"></i></a>


                </div>

            </div>

        </div>
    </div>

    <div className="s-hero__scroll">
        <a href="#about" className="s-hero__scroll-link smoothscroll">
            <span className="scroll-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"></path></svg>
            </span>
            <span className="scroll-text">Scroll Down</span>
        </a>
    </div>

</section>)}
export default Main;
