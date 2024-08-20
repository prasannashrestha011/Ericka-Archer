
import React from "react";

import CenterImage from "./centerImg/centerImg";
import NavBar from "../component/NavBar/NavBar";

export const MainPg:React.FC=()=>{
    return(
       <div>
        <NavBar/>
         <CenterImage/>
     
       </div>
    )
}