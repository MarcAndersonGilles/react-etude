import React from 'react'

function TaskList(props) {
  return (
    <div>
        <ul>
      {props.tasks.map((task) => (
        <li key={task.id}>{task.description}</li>
      ))}
    </ul>
    </div>
  )
}

export default TaskList