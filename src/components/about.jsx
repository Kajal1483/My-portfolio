import React from "react";

function About(){
return (<section id="about" className="s-about target-section">

    <div className="row">
        <div className="column large-3 tab-12">
            <img className="s-about__pic" src="images/mine.jpeg" alt=""/>
        </div>
        <div className="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>I am someone who takes responsibility for their actions and when things
               go wrong I don’t look to outside forces to blame. Rather, I logically analyze what
               happened, how the situation could have been handled more effectively and determine
               how to prevent the mishap going forward.

            </p>

            <hr/>

            <div className="row s-about__content-bottom">
                <div className="column w-1000-stack">
                    <h3>Contact Details</h3>

                    <p>
                    Domlur, Bengaluru<br/>
                    Karnataka, India, PIN-570061 <br/>
                    <a href="tel:+91-9068265527">9068265527</a> <br/>
                    <a href="mailto:kajal997choubey@gmail.com">kajal997choubey@gmail.com</a>
                    </p>
             <hr className="hr-k"></hr>
                </div>
                <div className="column w-1000-stack">
                    <a href="https://drive.google.com/file/d/1ouwXvTEbszzJ6TPrQCJ5_4-KbjQJRDZH/view?usp=sharing" className="btn btn--download">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path></svg>
                        Resume
                    </a>
                </div>
            </div>
        </div>
    </div>

</section>)}
export default About;
