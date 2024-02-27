import React from 'react'
import Featubox from "./Featurbox"
import fimage1 from "../images/1.svg"
import fimage2 from "../images/2.svg"
import fimage3 from "../images/3.svg"
import fimage4 from "../images/4.svg"

function Featres() {
  return (
    <div  id='features'>
        <h1  className='ko'>FEATURES</h1>
        <div   className='a-container'>
            <Featubox  image={fimage1} title="weaghtlifting" />
            <Featubox  image={fimage2} title="free" />
            <Featubox  image={fimage3} title="free" />
            <Featubox  image={fimage4} title="free" />
        </div>
        </div>
  )
}

export default Featres