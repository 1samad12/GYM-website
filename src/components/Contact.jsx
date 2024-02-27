import React from 'react'
import  '../App.css'

function Contact() {
  return (
    <div  className='c'>
        <h1  className='h1'>Contact</h1>
        <div  className=''>
        <input   className='qw' type="text" placeholder="Name" name="" id="" />
        </div>
        <div>
        <input  className='qw' type="text" placeholder="Email" name="" id="" />
        </div>
        <div>
        <input  className='qw' type="text" placeholder="Subject" name="" id="" />
        </div>
        <div>
        <input   className='qw'type="text" placeholder="Message" name="" id="" />
        </div>
        <button  className='btn' >Send</button>
    </div>
  )
}
export default Contact