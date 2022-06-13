import React from "react";
import '../css/Contador.css'

function Contador({ nroClicks }){
  return(
    <div className='contador'>
      {nroClicks}
    </div>
  )
}

export default Contador;