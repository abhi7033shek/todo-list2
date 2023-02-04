import React from 'react'
import ListRender from './ListRender'

export default function Next7Days(props) {
  const date = new Date()
  const filteredlist = props.list.filter((task)=>{
    const diffTime = task.date - date
    const diffDays = Math.ceil((diffTime)/(1000*60*60*24))
    if(diffDays >0 && diffDays < 8){
      return true
    }
    return false
  })
  return (
    <div className='To'>
      <h1 className='Heading'>Next 7 Days</h1><hr></hr><br></br>
      <h4 className='Heading'>Tasks list</h4>
      <hr className='line'></hr>
      <ListRender list={filteredlist}/>
    </div>
  )
}
