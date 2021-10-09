import React from "react";
import ResumeB from "./resumeBlock";

function ParentR(props){
  return (<div class="row s-resume__section">
      <div class="column large-3 tab-12">
          <h3 class="section-header-allcaps">{props.title}</h3>
      </div>
      <div class="column large-9 tab-12">
      <ResumeB link="https://github.com/Kajal1483/My-Notes-App" projectName="Notes App" designation="Personal project" date="Aug-Sep 2020 " details="Made using HTML,CSS,Javascript, Bootstrap and React framework ..." />
      

</div>
</div>
)
}
export default ParentR;
