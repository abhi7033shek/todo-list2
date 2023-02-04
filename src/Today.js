import React from 'react'
import ListRender from './ListRender'

export default function Today(props) {
  const date = new Date()
  const filteredList = props.list.filter((task)=>{
    if(date.getFullYear() !==task.date.getFullYear()){
      return false;
    }
    if(date.getMonth() !== task.date.getMonth()){
      return false;
    }
    if(date.getDate() !== task.date.getDate()){
      return false
    }
    return true;
  })
  return (
    <div className='To'>
      <h1 className='Heading'>Today</h1><hr></hr><br></br><br></br>
      <h4 className='Heading'>Tasks list</h4>
      <hr className='line'></hr>
      <ListRender list={filteredList} />
      
    </div>
  )
}