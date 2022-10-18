import React, {useEffect, useState} from 'react';
import TodoItem from "../components/TodoItem";
import {Container, Table} from "react-bootstrap";
import axios from "axios";
import {Audio, ThreeDots} from "react-loader-spinner";

function TodosScreen(props) {
   const [todos, setTodos] = useState([]);
   const [loading, setLoading] = useState(true);

   const onDelete = (_id) => {
      axios.delete(`http://localhost:5000/todos/delete/${_id}`)
          .then(res => {
             setTodos(todos.filter(todo => todo._id !== _id))
          })
          .catch(err => console.log("Could not delete"))
   };

   //work as life cycle componentDidMount, everytime any change occur this will run
   useEffect(() => {
      axios.get('http://localhost:5000/todos/')
          .then(res => {
             setTodos(res.data)
             setLoading(false)
          })
          .catch(err => {
             console.log("Error")
          })
   }, [])

   return (
       loading ?
           <div className={"text-center"} style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
              <ThreeDots
                  height="100"
                  width="150"
                  radius="9"
                  color="black"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
              />
           </div>
           :
           <Container className={"container-fluid"}>
              <div><h1>Todo List Details</h1></div>
              {todos.length !== 0 ?
                  <Table striped bordered hover>
                     <thead>
                     <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th colSpan={2}>Actions</th>
                     </tr>
                     </thead>
                     <tbody>
                     {
                        todos.map((todo, i) => {
                           return <TodoItem key={i + 1} sno={i + 1} todo={todo} onDelete={onDelete}/>
                        })
                     }
                     </tbody>
                  </Table>
                  :
                  <div className={"text-center"}>
                     <h1>There is no <span className={"text-danger"}>Todo</span> Added :(</h1>
                  </div>
              }
           </Container>
   );
}

export default TodosScreen;