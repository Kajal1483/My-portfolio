import React from "react";
import ResumeB from "./resumeBlock";

function ParentR(props){
  return (<div class="row s-resume__section">
      <div class="column large-3 tab-12">
          <h3 class="section-header-allcaps">{props.title}</h3>
      </div>
      <div class="column large-9 tab-12">
      <ResumeB link="https://github.com/Kajal1483/My-Notes-App" projectName="Notes App" designation="Personal project" date="Aug-Sep 2020 " details="Made using HTML,CSS,Javascript and React framework..." />
      <ResumeB link ="https://github.com/Kajal1483/Weather-API" projectName="Weather App" designation="Personal project" date="Sep-oct 2020"  details="Front-end- HTML,CSS,Javascript,Handlebars...Backend- Node.js, express.js" />

</div>
</div>
)
}
export default ParentR;
