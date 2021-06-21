import React from "react";

function About(){
return (<section id="about" className="s-about target-section">

    <div className="row">
        <div className="column large-3 tab-12">
            <img className="s-about__pic" src="images/mine.jpeg" alt=""/>
        </div>
        <div className="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>I am Kajal choubey, a 2nd year computer science student at National institute of technology
            srinagar. I am a passionate and consistent learner, a budding and innovative  front end web developer
             who believes in learning by doing. I love designing the front end part of web pages.
              I enjoy competitive programming and have a good hold on Data structure and algorithm.


            </p>

            <hr/>

            <div className="row s-about__content-bottom">
                <div className="column w-1000-stack">
                    <h3>Contact Details</h3>

                    <p>
                    Domlur, Bengaluru<br/>
                    Karnataka, India, PIN-570061 <br/>
                    <a href="#about">90********</a> <br/>
                    <a href="mailto:kajal997choubey@gmail.com">kajal997choubey@gmail.com</a>
                    </p>
             <hr className="hr-k"></hr>
                </div>
                <div className="column w-1000-stack">
                    <a href="https://drive.google.com/file/d/1lxtLvhOENBrwNkX4dhLJ9a84WKChXs1Q/view?usp=sharing" className="btn btn--download">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path></svg>
                        Resume
                    </a>
                </div>
            </div>
        </div>
    </div>

</section>)}
export default About;
