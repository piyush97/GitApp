import React from 'react';

var style = {
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
      backgroundColor: '#fbfbfb',


}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
  backgroundColor: '#fbfbfb',
}

var MYFAV={
	color:'#00CDCD',
}
var a={
}
function Footer() {
	
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
            
<span style={MYFAV}><i class="fa fa-code" aria-hidden="true"></i>  With <i class="fa fa-heart" aria-hidden="true"></i> By Piyush <br/>Check me out on <i class="fab fa-github"></i>
 </span>

            </div>
        </div>
    )
}

export default Footer;