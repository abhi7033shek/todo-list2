import React from 'react'

export default function ListRender(props) {
  return (
    <div>
        {props.list.map((list)=>{
            return(
                <div className='box' key={list.number}>
                    <p><ul>
                            <li>
                            {list.title}  ({list.date.toLocaleString()})
                        <button className="delete" >Delete</button>
                        </li>
                        </ul>
                        </p><hr className='line1'></hr>
                </div>
            )
        })}
    </div>
  )
}
