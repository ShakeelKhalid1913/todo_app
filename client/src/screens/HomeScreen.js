import React from 'react';
import {Col, Image, Row} from "react-bootstrap";

function HomeScreen(props) {
   return (
       <>
         <div className={"text-start"}>
            <Row className={"mt-5"}>
               <Col md={3}>
                  <h1 className={"mb-3 align-content-center h1"}>Hello Shakeel</h1>
                  <p>
                     This is todo App in <code>React.js</code>.
                     You can view the all todos.
                     Add new Todos, Edit, or Delete them.
                     Let's Test it out :)
                  </p>
               </Col>
               <Col md={6} className={"offset-3"}>
                  <Image src={process.env.PUBLIC_URL + "/img/home.jpg"} alt={"PIC"} height={"100%"} width={"100%"}
                  className={"img-fluid"}/>
               </Col>
            </Row>
         </div>
       </>
   );
}

export default HomeScreen;