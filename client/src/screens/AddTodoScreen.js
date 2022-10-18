import React, {useState} from 'react';
import {Alert, Button, Col, Form, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import axios from "axios";

function AddTodoScreen(props) {
   //getting values from component
   const location = useLocation();
   const [title, setTitle] = useState(location.state == null ? "" : location.state.title);
   const [description, setDescription] = useState(location.state == null ? "" : location.state.description);
   const [_alert, setAlert] = useState(false);
   const [alertType, setAlertType] = useState("success");
   const [alertText, setAlertText] = useState("");

   const onAdd = event => {
      event.preventDefault();
      if (!title || !description) {
         setAlert(true);
         setAlertText("Title or description is blank");
         setAlertType("danger")
      } else {
         if (location.state == null) {
            const newTodo = {
               title: title,
               description: description
            }

            axios.post('http://localhost:5000/todos/add', newTodo)
                .then(res => {
                   setAlert(true)
                   setAlertText("Todo added in the list");
                   setAlertType("success")
                })
                .catch(err => {
                   setAlert(true)
                   setAlertText(err.message);
                   setAlertType("danger")
                })

         } else {
            const newTodo = {
               _id: location.state.id,
               title: title,
               description: description
            }
            axios.put(`http://localhost:5000/todos/update/${newTodo._id}`, newTodo)
                .then(res => {
                   setAlert(true)
                   setAlertText("Todo updated");
                   setAlertType("success")
                })
                .catch(err => {
                   setAlert(true)
                   setAlertText(err.message);
                   setAlertType("danger")
                })
         }

         setTitle("");
         setDescription("");
      }
   };


   return (
       <>
          <Row>
             <Col md={6} sm={2} className={"offset-3"}>
                <Form>
                   <Form.Group id={"title"} className={"mb-3"}>
                      <Form.Label>Title</Form.Label>
                      <Form.Control className={"form-control"} onChange={(e) => setTitle(e.target.value)} name={title}
                                    value={title} type={"text"}
                                    placeholder={"Enter Title"}/>
                   </Form.Group>
                   <Form.Group id={"description"} className={"mb-3"}>
                      <Form.Label>Description</Form.Label>
                      <Form.Control as={"textarea"} className={"form-control"}
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description} name={description}
                                    rows={3}/>
                   </Form.Group>
                   <Button varient={"primary"} type={"submit"} onClick={onAdd}>
                      {
                         location.state == null ? "Add Todo" : "Edit Todo"
                      }
                   </Button>
                </Form>
                {
                    _alert &&
                    <Alert tag={`${alertType}`} variant={`${alertType}`} className={"mt-3"}>
                       {alertText}
                    </Alert>
                }
             </Col>
          </Row>
       </>
   );
}

export default AddTodoScreen;