import React from "react";
function ResumeB(props){

  return(  <div class="resume-block">

        <div class="resume-block__header">
            <h4 class="h3"><a class="main-nav-item" href={props.link}>{props.projectName}</a></h4>
            <p class="resume-block__header-meta">
                <span>{props.designation}</span>
                <span class="resume-block__header-date">
             {props.date}
                </span>
            </p>
        </div>

        <p class="kajal">
{props.details}
        </p>

    </div>)
}
export default ResumeB;
