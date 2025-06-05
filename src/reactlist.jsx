import React from "react";
function Menubar ()
 {
    const newlist =[10,20,30,40]
    const rl = newlist.map((listvalues)=>{
        return <li>{listvalues}</li>
    });
    return<ol>{rl}</ol>
    
}

export default Menubar ;