import React from "react";
import ParentR from "./resumeComp/parentResume";
function Resume(){
  return(<section id="resume" className="s-resume target-section">
<ParentR title="Projects"/>

      <div className="row s-resume__section">
          <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps" id="education">Education</h3>
          </div>
          <div className="column large-9 tab-12">
              <div className="resume-block">

                  <div className="resume-block__header">
                      <h4 className="h3"> <a className="main-nav-item" href="https://nitsri.ac.in/">National institute of technology, Srinagar</a></h4>
                      <p className="resume-block__header-meta">
                        <span></span>
                        <span className="resume-block__header-date">
                        2019-Present
                        </span><br/>
                          <span className="resume-block__header-date">
                          CGPA-8.09
                          </span>
                      </p>
                  </div>
                  <p className="education1">

                    I'm a second year computer science student at NIT, Srinagar.
                  </p>

              </div>
              <div className="resume-block__header">
                  <h4 className="h3"> <a className="main-nav-item" href="https://apsbdbari.org/ncc.php">Army public school,J&K</a></h4>
                  <p className="resume-block__header-meta">
                    <span></span>

                      <span className="resume-block__header-date">
                      2018 HSC-87%
                      </span>
                      <br/>
                      <span className="resume-block__header-date">
                      2016 SSC-9.80 CGPA
                      </span>
                  </p>
              </div>
              <p className="education1">
              I have done my schooling from Army public school.

              </p>

          </div>

              </div>




      <div className="row s-resume__section">
          <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps" id="Skills">Skills</h3>
          </div>
          <div className="column large-9 tab-12">
              <div className="resume-block">

                  <p>
                  </p>

                  <ul className="skill-bars-fat">
                      <li>
                      <div className="progress percent65"></div>
                      <strong>C, C++</strong>
                      </li>
                      <li>
                      <div className="progress percent55"></div>
                      <strong>DS Algo</strong>
                      </li>
                      <li>
                      <div className="progress percent45"></div>
                      <strong>Python</strong>
                      </li>
                      <li>
                      <div className="progress percent70"></div>
                      <strong>Front-End</strong>
                      </li>
                      <li>
                      <div className="progress percent45"></div>
                      <strong>Back-End</strong>
                      </li>
                      <li>
                      <div className="progress percent60"></div>
                      <strong>DBMS</strong>
                      </li>
                  </ul>

              </div>

          </div>
      </div>

  </section> )}
  export default Resume;
