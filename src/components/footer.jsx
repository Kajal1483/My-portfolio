import React from "react";
function Footer(){
  const year=new Date().getFullYear();
return(<footer className="s-footer">

    <div className="row">
        <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
            <ul className="s-footer__social">
            <li><a href="https://www.linkedin.com/in/kajal-choubey-944b471a5/"><i className="fab fa-linkedin" aria-hidden="false"></i></a></li>
                <li><a href="https://codeforces.com/profile/kajal_1483"><i className="fas fa-code" aria-hidden="false"></i></a></li>

              <li>  <a href="https://github.com/Kajal1483"><i className="fab fa-github"aria-hidden="false"></i></a></li>
            </ul>
        </div>

        <div className="column large-7 medium-6 w-1000-stack ss-copyright">
            <span>© Copyright {year}</span>
            <span>Design with <i style={{color:"red"}} className="fas fa-heart"></i> by <a href="#top">Kajal choubey</a></span>
        </div>
    </div>

    <div className="ss-go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"/></svg>
         </a>
    </div>
</footer>)}
export default Footer;
