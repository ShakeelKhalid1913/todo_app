import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function TodoItem(props) {
   const navigate = useNavigate();


   const navigateToAddTodo = () => {
     navigate('/addTodo', {state: {id: props.todo._id, title: props.todo.title, description: props.todo.description}});
   };

   return (
       <>
          <tr>
             <th width={"10%"}>{props.sno}</th>
             <th width={"20%"}>{props.todo.title}</th>
             <th width={"50%"}>{props.todo.description}</th>
             <th width={"10%"}>
                <Button style={{width: "100%"}} variant={"primary"} onClick={navigateToAddTodo}>Edit</Button>
             </th>
             <th style={{width: "10%"}}>
                <Button variant={"danger"} style={{width: "100%"}} onClick={() => {
                   props.onDelete(props.todo._id)
                }}>Delete</Button>
             </th>
          </tr>
       </>
   );
}

export default TodoItem;