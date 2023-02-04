import React, { useRef, useState } from 'react'

export default function Inbox(props) {
    const [newTask,setNewTask] = useState(false)
    const titleRef = useRef()
    const calendarRef = useRef()
    const newtaskHandler=()=>{
        setNewTask(true)
    }
    const addHandler=(e)=>{
        e.preventDefault()
        if(titleRef.current.value === ""){
            window.alert("Task Can Not Be Empty")
            return;

        }
        const newObj = {
            number : props.list.length+1,
            title : titleRef.current.value,
            date : new Date(calendarRef.current.value)
        }
        
        props.append(newObj)
        setNewTask(false)
    }
    const cancelHandler=()=>{
        setNewTask(false)
    }
   
    
  return (
    <div>
        <h3>INBOX</h3>
        {!newTask && (
            <button className='new' onClick={newtaskHandler}>+Add New</button>
        )}
        {newTask && (
            <form className='newtask-box'>
                <input type='text' ref={titleRef}/>
                <div className='button'>
                    <button className='new' onClick={addHandler}>Add Task</button>
                    <button className='new' onClick={cancelHandler}>Cancel</button>
                    <input type="date" ref={calendarRef} defaultValue="2023-01-04"/>
                </div>
            </form>
        )}
        <div>
            {props.list.map((list)=>{
                return(
                    <div className='box' key={list.number}>
                        {list.title} ({list.date.toLocaleString()})
                        <button className="delete" >Delete</button>

                    </div>
                )
            })}
        </div>
    </div>
  )
}
