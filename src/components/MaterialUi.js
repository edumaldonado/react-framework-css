import React from "react";
import MaterialCard from "./MaterialCard"
import MaterialDrawer from "./MaterialDrawer"

export default function MaterialUi(){
    return(
        <>
        <h2>Material UI</h2>
        <h3>( previamente instalar con: npm install @mui/material @emotion/react @emotion/styledH Y npm install @mui/icons-material )</h3> 
        <MaterialCard/>  
        <MaterialDrawer/>     
        </>
    )
}
