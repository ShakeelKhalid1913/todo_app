import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AddTodoScreen from "./screens/AddTodoScreen";
import TodosScreen from "./screens/TodosScreen";
import Footer from "./components/Footer";

function App(props) {

   return (
       <>
          <BrowserRouter>
             <Header/>
             <Container>
                <Routes>
                   <Route path={"/"} element={<HomeScreen/>}></Route>
                   <Route path={"/addTodo"} element={<AddTodoScreen/>}></Route>
                   <Route path={"/todos"} element={<TodosScreen/>}></Route>
                </Routes>
             </Container>
             <Footer/>
          </BrowserRouter>
       </>
   );
}

export default App;