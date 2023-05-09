import React from 'react'

function TodoList() {
  return (
    <div className='todo-list'>
        <ul>
            <li>
                <div>Shopping</div>

                <div className='icon'>
                {/* <div style={{display: "flex", justifyContent: "space-between", width: "50px"}}> */}
                    
                    <i title='Complete' className='fas fa-check circle pointer'/>
                    <i title='Delete' className='fas fa-trash-alt pointer'/>
                    
                </div>
                
            </li>
        </ul>
    </div>
  )
}

export default TodoList