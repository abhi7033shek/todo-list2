import React from 'react'

export default function SideNav(props) {
  return (
    
   <div className='side-nav'>
    <h1 className='Heading'>TODO LIST</h1><hr></hr><br></br>
    <button className='newS' onClick={()=>{props.change("INBOX")}}>
       
            INBOX
       
    </button><br></br>
    <div>
    <button className='newS' onClick={()=>{props.change("TODAY")}}>
        
            TODAY
       
    </button><br></br>
    </div>
    <button className='newS' onClick={()=>{props.change("NEXT")}}>
       
            NEXT 7 DAYS
        
    </button>

   </div>
  )
}
