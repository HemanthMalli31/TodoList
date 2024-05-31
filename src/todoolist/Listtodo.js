import React, { Fragment,useState,useEffect } from 'react'
import EditTodo from '../todoolist/EditTodo';


const  Listtodo=()=> {
  const [todos, setTodos] = useState([]);


  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

 
  const getTodos = async () => { 
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      // console.log(jsonData)

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  },[]);
  console.log(todos);
  return (
    <div>
      <Fragment>
      <table class="table mt-5 text-center">
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
        </tr>
  
        <tbody>
        {todos.map(todo => (
           <tr key={todo.todo_id}>
            <td >{todo.description}</td>
            <td>
              <EditTodo todo={todo} />
              </td> 
            <td>
              <button  className="btn btn-danger"onClick={()=>deleteTodo(todo.todo_id)}>
                 Delete</button>
                 </td>
      
           </tr> 
              
          ))}
       </tbody>
      </table>
        
      </Fragment>
    
    
    </div>
  )
}

export default Listtodo